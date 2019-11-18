import React from 'react';
import Spinner from '../Spinner';

import './ListItems.css';

export default class ListCountry extends React.Component {

    state = {
        listItems: null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((listItems) => {
                this.setState(listItems)
            })
    }

    renderList = (listItems) => {
        return listItems.map((item) => {
            const label = this.props.renderItem(item)
            return (
                <li key={item.name}
                className="list-group-item"
                onClick={() => this.props.onSelected(item.name)}>
                    {label}</li>
            )
        })
    }

    render() {
        const {listItems} = this.state;
        if (!listItems) {
            return <Spinner />
        }

        const items = this.renderList(listItems);

        return (
            <ul className="list-country overflow-auto list-group list-group-flush list-fix ">
                {items}
            </ul>
        )
    }
}