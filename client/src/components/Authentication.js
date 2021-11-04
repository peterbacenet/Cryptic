import React from 'react'
import { Button, Header, Image, Form, Modal } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation';
import Homepage from './Homepage';

function Authentication (props) {
// authentication should be a modal
    const {linkStyles, loggedIn, setLoggedIn} = props;
    const [open, setOpen] = React.useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)
    const [signUp, setSignUp] = useState(false)

    function handleLogIn(){
        console.log("You've Logged In")
        setLoggedIn(true)
        setOpen(false)
    }

    function handleSignUp() {
        console.log("You've Signed Up")
        setLoggedIn(true)
        setOpen(false)
    }
    // useEffect(() => {
    //     fetch('/me', {
    //     credentials: 'include'
    //     })
    //     .then(res => (

    //         (res.ok) ? 
            
    //         (res.json().then((user) => (
    //             setCurrentUser(user),
    //             setAuthChecked(true),
    //             < Navigation currentUser={currentUser} />)))
    // :
    //         (setAuthChecked(false),
    //             < Navigation currentUser={currentUser} />)
        
    // ))}, [])
    //             // if authchecked is false, display message credentials invalid
    // if(!authChecked) {
    //     return 
    //     <div>
    //         Credentials Invalid! Please try again, or sign up for a new account
    //     </div>
    //     }

    return (
    <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<p> Auth </p>} >
        <Modal.Header> Please Login or Create an Account</Modal.Header>
        <Modal.Content image>
            {signUp? (
                <Modal.Description>
                <Header labelPosition="right">Sign Up</Header>
                <p>
                    <label htmlFor="name">
                        Name
                    </label>
                <br/>
                    <input type="text" name="name" // value={username} // onChange={(e) => setUsername(e.target.value)}
                    />
                <br/>
                    <label htmlFor="password">
                        Password
                    </label>
                <br/>
                    <input type="text" name="password" // value={username} // onChange={(e) => setUsername(e.target.value)}
                    />
                <br/>
                    <label htmlFor="confirmation">
                        Password Confirmation
                    </label>
                <br/>
                    <input type="text" name="confirmation" // value={username} // onChange={(e) => setUsername(e.target.value)}
                    />
                </p>
                </Modal.Description>
            ):(
                <Modal.Description>
                <Header>Log In</Header>
                <p>
                    <label htmlFor="name">
                        Name
                    </label>
                <br/>
                    <input type="text" name="name" // value={username} // onChange={(e) => setUsername(e.target.value)}
                    />
                <br/>
                    <label htmlFor="password">
                        Password
                    </label>
                <br/>
                    <input type="text" name="password" // value={username} // onChange={(e) => setUsername(e.target.value)}
                    />
                </p>
                </Modal.Description>
            )}
        </Modal.Content>
        <Modal.Actions>
            {signUp? (
        <Button 
        content="Log In"
        color='black' 
        onClick={() => setSignUp(!signUp)}>
        </Button>
            ):(
        <Button 
        content="Sign Up"
        color='black' 
        onClick={() => setSignUp(!signUp)}>
        </Button>
            )}
            {signUp?(
        // handle sign up
            <Button
            content="Submit"
            labelPosition='right'
            icon='checkmark'
            onClick={handleSignUp}
            positive
        />):(
        // handle log in
            <Button
            content="Submit"
            labelPosition='right'
            icon='checkmark'
            onClick={handleLogIn}
            positive
        />)
        }
        
        </Modal.Actions>
    </Modal>
        )  
}
export default Authentication;