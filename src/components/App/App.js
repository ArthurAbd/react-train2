import React from 'react';
import Header from '../Header'
import PageCountry from '../PageCountry'
import RandomCountry from '../RandomCountry'
import Api from '../../services/ApiService'
import CountryInfo from '../CountryInfo'

import {ApiProvider} from '../Api-context/Api-context'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

export default class App extends React.Component {

    api = new Api()

    state = {
        speedUpdateRandonCountry: 2000,
        showRandomCountry: true,
        listCountries: null
    };

    componentDidMount() {
        this.api.getAllCountry()
            .then(({listItems}) => {
                const names = listItems.map((item) => item.name)
                console.log(names)
                this.setState({
                    listCountries: names
                })
            })
    }

    toggleRandomCountry = () => {
        this.setState((state) => {
            return {
                showRandomCountry: !state.showRandomCountry
            }
        });
    };

    render() {
        const randomCountry = this.state.showRandomCountry ? <RandomCountry
            speedUpdateRandonCountry={this.state.speedUpdateRandonCountry}
            getOneCountry={this.api.getOneCountry}
            names={this.state.listCountries} /> : null;

        return (
            <div className="app container">
                <ApiProvider value={this.api}>
                    <Router>
                        <Header />
                        {randomCountry}
                        <button className="toggle-planet btn btn-warning btn-lg m-2"
                            onClick={this.toggleRandomCountry}>
                            Вкл/выкл рандом
                        </button>

                        <Switch>
                            <Route path="/"
                                exact
                                render={() =>
                                    <p className="text-center h2">Добро пожаловать!</p>}/>
                            <Route path="/country" exact component={PageCountry} />
                            <Route path="/country/:name"
                                render={({match}) => {
                                    const {name} = match.params;
                                    return (
                                    <div className='bg-dark p-3 my-2 border-def'>
                                        <CountryInfo 
                                            getOneCountry={this.api.getOneCountry}
                                            selectedCountry={name}/>
                                    </div>
                                    )
                                }} />
                            <Route render={() =>
                                    <p className="h2">Не верный URL</p>} />
                        </Switch>
                    </Router>
                </ApiProvider>
            </div>
        )
    }
}