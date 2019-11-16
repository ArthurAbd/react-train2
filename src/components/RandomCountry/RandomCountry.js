import React from 'react';
import Api from '../../services/ApiService'

import './RandomCountry.css';

export default class RandomCountry extends React.Component {

    constructor() {
        super();
        this.state = {
            name: null,
            capital: null,
            population: null,
            area: null,
            flag: null,
        };
        // this.api = new Api;
        // this.updateCountry();
    }

    

    

    // updateCountry() {
    //     this.api
    //     .getOnePlanet('guatemala')
    //     .then((country) => {
    //         this.setState({
    //             name: country.name,
    //             capital: country.capital,
    //             population: country.population,
    //             area: country.area,
    //             flag: country.flag,
    //         })
    //     })
    // }
    
    render() {
        
        return (
            <div className="random-country p-3 my-2 bg-dark border-def">
                <div className="row">
                    <div className="col-4 bg-dark">
                        <img src="https://restcountries.eu/data/geo.svg" className="img-fluid" alt="Responsive"/>
                    </div>
                    <div className="col-8 bg-dark">
                        <div className="p-3 bg-dark">
                            <h2 className="bg-dark">Название</h2>
                            <ul className="list-group list-group-flush list-fix">
                                <li className="list-group-item bg-dark">Столица: </li>
                                <li className="list-group-item bg-dark">Население: 1</li>
                                <li className="list-group-item bg-dark">Площадь: 1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
