import { Menu } from 'semantic-ui-react'
import React from 'react'
// import { Switch, Route, NavLink } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Header, Icon} from 'semantic-ui-react';
import Authentication from './Authentication';


function Navigation (props) {
const {currentUser, setCurrentUser} = props;

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
    setCurrentUser(null)
    console.log("Current user...", currentUser)
    fetch("/logout", {
        method: "DELETE",
      }).then(console.log("Current user...", currentUser));
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
                {currentUser? (
                        <Menu.Item style={linkStyles}>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>): null }

                        <Menu.Item style={linkStyles} >
                            <Link to="/"> Home </Link>
                        </Menu.Item>
            
                        <Menu.Item style={linkStyles}>
                            <Link to="/currencies">Currencies</Link>
                        </Menu.Item>
                        
                        {currentUser? (
                            <Menu.Item onClick={handleLogOut} name="logout" style={linkStyles} >
                            Log Out
                            </Menu.Item>
                        ):(
                        <Menu.Item style={linkStyles} >
						<Authentication 
                        // watchlist={watchlist} setWatchlist={setWatchlist} 
                        currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                        </Menu.Item>)}
                </Menu>

                <br/>
                </nav>

            </Header>
        </div>
    )
}

export default Navigation;