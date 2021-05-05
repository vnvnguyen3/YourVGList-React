import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

class UserProfile extends Component {
    componentDidMount() {
        const userName = this.props.match.params.userName;
        this.props.fetchUser(userName);
    }
    render() {
        const user = this.props.user;
        return (
            <div>
                <h2>{user.userName}</h2>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
            </div>
        )
    }
}

UserProfile.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.users.user,
})

export default withRouter(connect(mapStateToProps, {fetchUser})(UserProfile));