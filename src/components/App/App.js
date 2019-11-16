import React from 'react';
import Header from '../Header'
import ListCountry from '../ListCountry'
import CountryInfo from '../CountryInfo'
import RandomCountry from '../RandomCountry'

import './App.css';

export default () => {
    return (
        <div className="app container">
            <Header />
            <RandomCountry />
            <div className="row">
                <ListCountry />
                <CountryInfo className="col-8" />
            </div>
        </div>
    )
}