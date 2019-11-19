import React from 'react';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

import './ListItems.css';

export default class ListItems extends React.Component {

    state = {
        listItems: null
    }

    componentDidMount() {
        const {getData} = this.props;
        if (getData) {
            getData()
            .then((listItems) => {
                this.setState(listItems)
            })
        }
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

ListItems.defaultProps = {
    onSelected: () => {}
}

ListItems.propTypes = {
    getData: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    onSelected: PropTypes.func
}