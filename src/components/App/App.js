import React from 'react';
import Header from '../Header'
import PageCountry from '../PageCountry'
import RandomCountry from '../RandomCountry'
import ListItems from '../ListItems'
import Api from '../../services/ApiService'

import './App.css';

export default class App extends React.Component {

    api = new Api()

    state = {
        showRandomCountry: true,
        listCountries: ["Afghanistan", "Åland Islands", "Albania", "Algeria",
        "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica",
        "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia",
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados"]
    };

    toggleRandomCountry = () => {
        this.setState((state) => {
            return {
                showRandomCountry: !state.showRandomCountry
            }
        });
    };

    onSelectedRegion = () => {
        console.log('region')
    }

    onSelectedRegionBlock = () => {
        console.log('regionBlock')
    }

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
                <PageCountry getData={this.api.getAllCountry} />
                <div className="row">
                    <div className='page-list col-4'>
                        <div className='bg-dark p-3 my-2 border-def'>
                            <ListItems 
                                getData={this.api.getAllRegion}
                                onSelected={this.onSelectedRegion}
                                renderItem={(item) => item.name}
                                />
                        </div>
                    </div>
                    <div className='page-info country-info col-8'>
                        <div className='bg-dark p-3 my-2 border-def'>
                            sss
                            {/* <CountryInfo selectedCountry={this.state.selectedCountry} /> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='page-list col-4'>
                        <div className='bg-dark p-3 my-2 border-def'>
                            <ListItems 
                                getData={this.api.getAllRegionBlock}
                                renderItem={(item) => item.name}
                                onSelected={this.onSelectedRegionBlock} 
                                />
                        </div>
                    </div>
                    <div className='page-info country-info col-8'>
                        <div className='bg-dark p-3 my-2 border-def'>
                            sss
                            {/* <CountryInfo selectedCountry={this.state.selectedCountry} /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}