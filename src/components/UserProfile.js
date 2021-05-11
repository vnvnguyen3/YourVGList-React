import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser, updateUserDescription } from '../actions/userActions';
import { fetchListItems } from '../actions/listItemActions';

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const userName = this.props.match.params.userName;
        this.props.fetchUser(userName);
        this.props.fetchListItems();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            id: this.props.user.id,
            description: this.state.description
        }
        this.props.updateUserDescription(user);
        alert("Successfully updated description");
        this.props.history.push('/users');
    }

    render() {
        const user = this.props.user;
        const listItems = this.props.listItems.filter(listItem => listItem.user.id === user.id)
            .map(listItem => (
                <div>
                    <p>Game: {listItem.game.title}</p>
                    <p>Rating: {listItem.rating}</p>
                    <p>Status: {listItem.status}</p>
                    <p>Priority: {listItem.priority}</p>
                </div>
        ));
        return (
            <div>
                <h2>{user.userName}</h2>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.description}</p>
                <p>{user.email}</p>
                {user.userName === this.props.profile.userName ? 
                <div>
                    <h3>Update Description</h3>
                    <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="description">Description: </label> <br />
                        <input type="text" name="description" onChange={this.onChange} 
                            value={this.state.description} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                </div> : ""}
                <h3>List of games</h3>
                {listItems}
            </div>
        )
    }
}

UserProfile.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    updateUserDescription: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    fetchListItems: PropTypes.func.isRequired,
    listItems: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    user: state.users.user,
    profile: state.users.profile,
    listItems: state.listItems.listItems
})

export default withRouter(connect(mapStateToProps, {fetchUser, updateUserDescription, fetchListItems})(UserProfile));