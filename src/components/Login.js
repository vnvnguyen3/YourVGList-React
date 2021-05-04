import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, login } from '../actions/userActions';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = this.props.users.filter(user => user.userName === this.state.username && user.password === this.state.password)[0];
        if (typeof user !== 'undefined'){
            this.props.login(user);
            alert("You have successfully logged in");
            this.props.history.push('/');
        }
        else{
            alert("Incorrect username and/or password");
        }
    }

    render() {
        return (
            <div className="login">
                <h1>Please Log In</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="username">Username: </label> <br />
                        <input type="text" name="username" onChange={this.onChange} 
                            value={this.state.username} />
                    </div>
                    <br />
                    <div>
                        <label for="password">Password: </label> <br />
                        <input type="password" name="password" onChange={this.onChange} 
                            value={this.state.password} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, {fetchUsers, login})(Login);