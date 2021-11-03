import { Input, Menu } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Header, Icon} from 'semantic-ui-react'


function Navigation () {

const linkStyles = {
    paddingtop: "5px",
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "mediumspringgreen"
  };

function handleLogout() {
    console.log("Log out clicked")
}

    return (
        <div className="mainheader">

            <Header as='h5'icon>
                
                <h2>
                    <Icon id="icon" name='gem outline' />
                    Cryptic
                </h2>
                <Header.Subheader >
                    Browse currencies, and find something new.
                </Header.Subheader>
                    <br/>
                <nav>
                <Menu secondary name="header">
                        <Link to="/" style={linkStyles}> Home </Link>
                        <Link to="/profile" style={linkStyles}>Profile</Link>
                        <Link to="/currencies" style={linkStyles}>Currencies</Link>
                        <Link to="/authenticate" style={linkStyles} onClick={handleLogout}>Logout</Link>
                </Menu>

                <br/>
                </nav>

            </Header>
        </div>
    )
}

export default Navigation;