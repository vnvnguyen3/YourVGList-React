import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, createUser } from '../actions/userActions';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm: '',
            firstName: '',
            lastName: '',
            email: ''
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

        const userExists = this.props.users.filter(user => user.userName === this.state.username)[0];
        if(this.state.username === "" || this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.password === "" || this.state.confirm === "") {
            alert("You cannot leave any field blank");
        } else if(typeof userExists !== 'undefined'){
            alert("Username already exists");
        } 
        else if(this.state.password !== this.state.confirm) {
            alert("Passwords do not match");
        }else{
            const user = {
                userName: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                description: "",
                email: this.state.email,
                role: 'USER'
            }
            this.props.createUser(user);
            alert("Successfully registered");
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <h1>Register for a new account</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="firstName">First Name: </label> <br />
                        <input type="text" name="firstName" onChange={this.onChange} 
                            value={this.state.firstName} />
                    </div>
                    <br />
                    <div>
                        <label for="lastName">Last Name: </label> <br />
                        <input type="text" name="lastName" onChange={this.onChange} 
                            value={this.state.lastName} />
                    </div>
                    <br />
                    <div>
                        <label for="email">Email: </label> <br />
                        <input type="email" name="email" onChange={this.onChange} 
                            value={this.state.email} />
                    </div>
                    <br />
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
                    <div>
                        <label for="confirm">Confirm Password: </label> <br />
                        <input type="password" name="confirm" onChange={this.onChange} 
                            value={this.state.confirm} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, { fetchUsers, createUser })(Register);
