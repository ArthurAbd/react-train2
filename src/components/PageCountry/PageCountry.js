import React from 'react';
import ListItems from '../ListItems'
import {Link} from 'react-router-dom'

import {ApiConsumer} from '../Api-context/Api-context'

import './PageCountry.css'

export default class PageCountry extends React.Component {
    
    render() {

        const listItems = (
            <ApiConsumer>
                {
                    ({getAllCountry}) => {
                        return (
                            <ListItems 
                                getData={getAllCountry}
                                renderItem={(item) => (
                                    <Link to={`${item.name}`}>
                                        <span className='bg-transparent'>{item.name}
                                        <br/> Столица: {item.capital}</span>
                                    </Link>)}/>
                        )
                    }
                }
            </ApiConsumer>)

        return(
            <React.Fragment>
                {listItems}
            </React.Fragment>
        )
    }
}