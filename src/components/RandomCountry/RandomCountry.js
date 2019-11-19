import React from 'react';
import Api from '../../services/ApiService';
import Spinner from '../Spinner';
import Error from '../Error';
import PropTypes from 'prop-types';

import './RandomCountry.css';

export default class RandomCountry extends React.Component {

    api = new Api();

    state = {
        country: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        if (this.props.names) {
            this.getCountry()
            this.interval = setInterval(this.getCountry, 1000);
        }
    }

    // componentDidUpdate(prevProps) {
    //     console.log(prevProps)
    //     if (prevProps.names !== this.props.names) {
    //         this.getCountry();
    //     }
    // }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    onLoad = (country) => {
        this.setState({
            country,
            loading: false
         });
    }
    
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    getCountry = () => {
        const names = this.props.names;
        const numCountry = Math.floor(Math.random() * names.length);
        const {getOneCountry} = this.props;

        getOneCountry(names[numCountry])
            .then(this.onLoad)
            .catch(this.onError)
    }
    
    render() {
        const { country, loading, error } = this.state;

        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const countryView = !loading && !error ? <CountryView country={country} /> : null;

        return (
            <div className="random-country p-3 my-2 bg-dark border-def">
                {errorMessage}
                {spinner}
                {countryView}
            </div>
        )
    }
}

const CountryView = ({country}) => {
    const {name, capital, population, area, flag} = country;
    return (
        <div className="row">
            <div className="col-4 bg-dark">
                <img src={flag} className="img-fluid rounded" alt="Responsive"/>
            </div>
            <div className="col-8 bg-dark">
                <div className="p-3 bg-dark">
                    <h2 className="bg-dark">{name}</h2>
                    <ul className="list-group list-group-flush list-fix">
                        <li className="list-group-item bg-dark">Столица: {capital}</li>
                        <li className="list-group-item bg-dark">Население: {population}</li>
                        <li className="list-group-item bg-dark">Площадь: {area}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

RandomCountry.defaultProps = {
    speedUpdateRandonCountry: 10000,
    onSelected: () => {}
}

RandomCountry.propTypes = {
    speedUpdateRandonCountry: PropTypes.number
}