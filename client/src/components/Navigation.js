import { Input, Menu } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Icon} from 'semantic-ui-react'

function Navigation () {

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "yellow"
  };

function handleLogout() {
    console.log("Log out clicked")
}

    return (
        <div>

        <Header as='h5'icon>
                <Icon id="icon" name='music'/>
                <h1>
                Cryptic
                </h1>
                <Header.Subheader >
                Browse currencies, and find something new.
                </Header.Subheader>
        <br/>
        <nav>
        <span name="header">
            <Router>
                <NavLink to="/" style={linkStyles}> Home </NavLink>
                <NavLink to="/profile" style={linkStyles}>Profile</NavLink>
                <NavLink to="/discover" style={linkStyles}>Currencies</NavLink>
                <NavLink to="/login" style={linkStyles} onClick={handleLogout}>Logout</NavLink>
            </Router>
        </span>

        <br/>   

        {/* <span>Logged in as {currentUser.email} </span> */}

        </nav>

        </Header>

        </div>
    )
}

export default Navigation;