import React from 'react';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

import './ListItems.css';

export default class ListItems extends React.Component {

    state = {
        listItems: null,
        infiniteScrollCount: 0
    }

      

    componentDidMount() {
        Window.onscroll = () => console.log(document.body)
        
        const {getData} = this.props;
        if (getData) {
            getData()
            .then((listItems) => {
                this.setState(listItems)
            })
        }
    }

    renderList = (items) => {
        return items.map((item) => {
            const label = this.props.renderItem(item)
            return (
                <li key={item.name}
                className="list-group-item"
                onClick={() => this.props.onSelected(item.name)}>
                    {label}</li>
            )
        })
    }

    infiniteScroll(listItems) {
        const infiniteScrollCount = this.state.infiniteScrollCount
        const items = listItems.slice(0, infiniteScrollCount + 10)

        return this.renderList(items)
    }

    

    render() {
        const {listItems} = this.state;
        if (!listItems) {
            return <Spinner />
        }

        document.onscroll = () => {
            const height = document.documentElement.scrollHeight
            const scroll = document.documentElement.scrollTop
            const clientHeight = document.documentElement.clientHeight

            if (height - clientHeight - scroll === 0) {

                const infiniteScrollCount = this.state.infiniteScrollCount
                const newInfiniteScrollCount = {
                    infiniteScrollCount: infiniteScrollCount + 10
                }
                this.setState(newInfiniteScrollCount)

                items.push(this.infiniteScroll(listItems))
            }
        }

        let items = this.infiniteScroll(listItems)
        console.log(items)

        return (
            <ul className="list-country list-group list-group-flush list-fix ">
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
