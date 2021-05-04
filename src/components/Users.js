import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class Users extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {
        const userItems = this.props.users.map(user => (
            <div key={user.id}>
                <h3>{user.userName}</h3>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
            </div>
        ));
        return (
            <div>
                <h1>Users</h1>
                {userItems}
            </div>
        )
    }
}

Users.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.users.users,
})

export default connect(mapStateToProps, {fetchUsers})(Users);