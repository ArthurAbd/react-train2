import React from 'react';
import Header from '../Header'
import Page from '../Page'
import RandomCountry from '../RandomCountry'
import Api from '../../services/ApiService'

import './App.css';

export default class App extends React.Component {

    api = new Api()

    state = {
        showRandomCountry: true,
        listCountries: null
    };

    componentDidMount() {
        this.api
            .getAllCountry()
            .then((listCountries) => {
                this.setState(listCountries)
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
        const planet = this.state.showRandomCountry ? <RandomCountry
            names={this.state.listCountries} /> : null;

        return (
            <div className="app container">
                <Header />
                {planet}
                <button className="toggle-planet btn btn-warning btn-lg m-2"
                    onClick={this.toggleRandomCountry}>
                    Вкл/выкл рандом
                </button>
                <Page listCountries={this.state.listCountries} />
            </div>
        )
    }
}