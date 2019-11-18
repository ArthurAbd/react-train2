import React from 'react';
import Api from '../../services/ApiService'
import Spinner from '../Spinner'

import './CountryInfo.css';

export default class CountryInfo extends React.Component {
    
    api = new Api()

    state = {
        country: {},
        loading: true
    }

    onLoad = (country) => {
        this.setState({
            country,
            loading: false
         });
    }

    getCountry = (selectedCountry) => {
        this.setState({loading: true});
        this.api
        .getOneCountry(selectedCountry)
        .then((country) => {
            this.onLoad(country)
        })
        // .catch(this.onError)
    }

    componentDidMount() {
        this.getCountry(this.props.selectedCountry)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedCountry !== this.props.selectedCountry) {
            this.getCountry(this.props.selectedCountry)
        }
    }

    render() {
        const {country: {name, capital, area,
            flag, borders, timezones}, loading} = this.state;

        if (loading) {
            return <Spinner />
        }
        
        return (
            <React.Fragment>
                <h2 className="bg-dark">{name}</h2>
                <ul className="list-group list-group-flush list-fix">
                    <li className="list-group-item bg-dark">Площадь: {area}</li>
                    <li className="list-group-item bg-dark">Граничит с {borders}</li>
                    <li className="list-group-item bg-dark">Столица: {capital}</li>
                    <li className="list-group-item bg-dark">Расположена на 'материке'</li>
                    <li className="list-group-item bg-dark">Языки:</li>
                    <li className="list-group-item bg-dark">Таймзоны {timezones}</li>
                    <li className="list-group-item bg-dark">Валюта: </li>
                </ul>
                <h2 className="bg-dark my-3">Флаг</h2>
                <img src={flag} className="img-fluid rounded" alt="Responsive"/>
            </React.Fragment>
        )
    }
}

// название
// площадь
// граничит
// столица
// материк
// языки
// численность
// таймзон
// флаг