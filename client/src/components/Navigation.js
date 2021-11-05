import { Input, Menu } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Header, Icon} from 'semantic-ui-react';
import Authentication from './Authentication';


function Navigation (props) {
const {loggedIn, setLoggedIn, currentUser, setCurrentUser} = props;

const linkStyles = {
    paddingtop: "5px",
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "magenta",
    textDecoration: "none",
  };

function handleLogOut(){
    setLoggedIn(false)
}

    return (
        <div className="mainheader">

            <Header>
                
                <h2>
                    <Icon id="icon" name='gem outline' />
                    Cryptic
                </h2>
                <Header.Subheader >
                    Browse currencies, and find something new.
                </Header.Subheader>
                    <br/>
                <nav>
                <Menu secondary >
                {loggedIn? (
                        <Menu.Item style={linkStyles}>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>): null }

                        <Menu.Item style={linkStyles} >
                            <Link to="/"> Home </Link>
                        </Menu.Item>
            
                        <Menu.Item style={linkStyles}>
                            <Link to="/currencies">Currencies</Link>
                        </Menu.Item>
                        
                        {loggedIn? (
                            <Menu.Item onClick={handleLogOut} style={linkStyles} >
                            Log Out
                            </Menu.Item>
                        ):(
                        <Menu.Item style={linkStyles} >
						<Authentication currentUser={currentUser} setCurrentUser={setCurrentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                        </Menu.Item>)}
                </Menu>

                <br/>
                </nav>

            </Header>
        </div>
    )
}

export default Navigation;