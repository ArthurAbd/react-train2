import React from 'react';
import ListCountry from '../ListCountry'
import CountryInfo from '../CountryInfo'

export default class Page extends React.Component {

    state = {
        selectedCountry: "Guatemala"
    }

    onCountrySelected = (country) => {
        this.setState({
            selectedCountry: country
        })
    }
    
    render() {
        return(
            <div className="row">
                <div className='list-country col-4'>
                    <div className='bg-dark p-3 my-2 border-def'>
                        <ListCountry 
                            listCountries={this.props.listCountries}
                            onCountrySelected={this.onCountrySelected} />
                    </div>
                </div>
                <div className='list-country col-8'>
                    <div className='bg-dark p-3 my-2 border-def'>
                        <CountryInfo selectedCountry={this.state.selectedCountry} />
                    </div>
                </div>
            </div>
        )
    }
}