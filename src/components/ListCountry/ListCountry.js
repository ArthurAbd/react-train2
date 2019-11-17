import React from 'react';
import Spinner from '../Spinner';

import './ListCountry.css';

export default class ListCountry extends React.Component {


    renderList = (listCountries) => {
        return listCountries.map((country) => {
            return (
                <li key={country}
                className="list-group-item bg-dark"
                onClick={() => this.props.onCountrySelected(country)}>
                    {country}</li>
            )
        })
    }

    render() {
        const {listCountries} = this.props;
        if (!listCountries) {
            return <Spinner />
        }

        const items = this.renderList(listCountries);

        return (
            <ul className="list-country list-group list-group-flush list-fix">
                {items}
            </ul>
        )
    }
}