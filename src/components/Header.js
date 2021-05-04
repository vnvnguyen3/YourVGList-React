import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/userActions';

class Header extends Component {
    render() {
        return (
            <div className="header-links">
                {
                    this.props.user.userName === "" ?
                    <div>
                        <NavLink className="header-link" to="/login">
                            Login 
                        </NavLink>
                        &nbsp;/&nbsp;
                        <NavLink className="header-link" to="/register">
                            Register
                        </NavLink>
                    </div> :
                    <div>
                        <NavLink className="header-link" to="/">
                            {this.props.user.userName}
                        </NavLink>
                        &nbsp;/&nbsp;
                        <NavLink className="header-link" to="/">
                            <button type="submit" onClick={this.props.logout}>Log Out</button>
                        </NavLink>
                    </div>
                }
            </div>
        )
    }
}

Header.propTypes= {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.profile
})

export default connect(mapStateToProps, {logout})(Header);