import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <NavLink className="nav-link" to="/">
                    <i className="fa fa-home" />&nbsp;Home
                </NavLink>
                <br />
                <NavLink className="nav-link" to="/users">
                    <i className="fa fa-users" />&nbsp;Users
                </NavLink>
                <br />
                <NavLink className="nav-link" to="/games">
                    <i className="fa fa-gamepad" />&nbsp;Games
                </NavLink>
                <br />
                <NavLink className="nav-link" to="/ListItems">
                    ListItems
                </NavLink>
                <br />
            </div>
        )
    }
}

export default Sidebar;
