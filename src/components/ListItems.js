import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListItems } from '../actions/listItemActions';

class ListItems extends Component {
    componentDidMount(){
        this.props.fetchListItems();
    }

    render() {
        const listItems = this.props.listItems.map(listItem => (
            <div key={listItem.id}>
                <h3>{listItem.user.userName}</h3>
                <p>{listItem.game.title}</p>
                <p>{listItem.rating}</p>
            </div>
        ));
        return (
            <div>
                <h1>ListItems</h1>
                {listItems}
            </div>
        )
    }
}

ListItems.propTypes = {
    fetchListItems: PropTypes.func.isRequired,
    listItems: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    listItems: state.listItems.listItems,
})

export default connect(mapStateToProps, {fetchListItems})(ListItems);