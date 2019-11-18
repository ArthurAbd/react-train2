import React from 'react';
import ListItems from '../ListItems'
import CountryInfo from '../CountryInfo'
import Row from '../Row'

import './PageCountry.css'

export default class Page extends React.Component {

    state = {
        selectedCountry: "Guatemala"
    }

    onSelected = (country) => {
        this.setState({
            selectedCountry: country
        })
    }
    
    render() {

        const listItems = (<ListItems 
            getData={this.props.getData}
            onSelected={this.onSelected}
            renderItem={(item) => (<span className='bg-transparent'>{item.name}
                <br/> Столица: {item.capital}</span>)}/>);

        const countryInfo = (<CountryInfo selectedCountry={this.state.selectedCountry} />);

        return(
            <Row left={listItems} right={countryInfo} />
        )
    }
}