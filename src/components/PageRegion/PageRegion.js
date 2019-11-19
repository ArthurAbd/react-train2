import React from 'react';
import ListItems from '../ListItems'
import {Link} from 'react-router-dom'
import Row from '../Row'

import {ApiConsumer} from '../Api-context/Api-context'

import './PageRegion.css'
import { resolve } from 'dns';
import { reject } from 'q';

export default class PageRegion extends React.Component {

    state = {
        selectedItem: 'Africa'
    }

    onSelected = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    getCountryByRegion() {
        return new Promise((resolve, reject) => {
            resolve(console.log('getCountryByRegion'))
            // this.props.api.getSearchByRegion(this.state.selectedItem)
            // .then((res) => resolve(res))
        })
    }
    
    render() {

        const listItems = (
            <ApiConsumer>
                {
                    ({getAllRegion}) => {
                        return (
                            <ListItems 
                                getData={getAllRegion}
                                onSelected={this.onSelected}
                                renderItem={(item) => (
                                    <span className='bg-transparent'>{item.name}
                                    </span>)}/>
                        )
                    }
                }
            </ApiConsumer>);

        const countryInfo = (
            <ApiConsumer>
                {
                    () => {
                        return (
                        <ListItems
                            getData={this.getCountryByRegion}
                            renderItem={(item) => (
                                <Link to={`${item.name}`}>
                                <span className='bg-transparent'>{item.name}
                                <br/> Столица: {item.capital}</span>
                            </Link>)}/>
                            )
                    }
                }
            </ApiConsumer>
        );

        return(
            <Row left={listItems} right={countryInfo} />
        )
    }
}