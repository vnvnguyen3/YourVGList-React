import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { Link } from 'react-router-dom';

class Users extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {
        const userItems = this.props.users.map(user => (
            <div key={user.id}>
                <Link to={`/users/${user.userName}`}>
                    {user.userName}
                </Link>
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