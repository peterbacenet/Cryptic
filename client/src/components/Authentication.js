import React from 'react'
import { Button, Header, Image, Form, Modal } from 'semantic-ui-react'
import { useState, useEffect } from 'react';

function Authentication (props) {
// authentication should be a modal
    const {linkStyles, loggedIn, setLoggedIn, toggle, setToggle, currentUser, setCurrentUser} = props;
    const [open, setOpen] = React.useState(false)
    const [authChecked, setAuthChecked] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

console.log(name, password, confirmation)

    function handleLogIn(){
        fetch('/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, password})
        })
            .then(res => {
            if (res.ok) {
                res.json().then(user => {
                console.log(user)
                setOpen(false)
                setCurrentUser(user)
                setLoggedIn(true)
                })
            } else {
                res.json().then(errors => {
                console.log("Bad Login")
                })
            }
            })
}
//////////////////////////////////////////////////////////////////////
    function handleSignUp() {
        fetch('/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password,
                password_confirmation: confirmation
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                    setCurrentUser(user)
                    console.log(user)
                    setLoggedIn(true)
                    setOpen(false)
                })
            } else {
                res.json().then(errors => {
                    console.log(errors)
                })
            }
        })

        
        
        //post user
        //fetch user
        //set user
    }

    // if authchecked is false, display message credentials invalid
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
                    <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name="name"/>
                <br/>
                    <label htmlFor="password">
                        Password
                    </label>
                <br/>
                    {/* <input type="text" onChange={e => setState({ text: e.target.value })}/> */}
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" name="password"/>
                <br/>
                    <label htmlFor="confirmation">
                        Password Confirmation
                    </label>
                <br/>
                    <input onChange={(e)=>setConfirmation(e.target.value)} value={confirmation} type="text" name="confirmation" // value={username} // onChange={(e) => setUsername(e.target.value)}
                    />
                </p>
                </Modal.Description>
            ):(
                <Form.Field>
                <Header>Log In</Header>
                <p>
                    <label htmlFor="name">
                        Name
                    </label>
                <br/>
                <input onChange={(e)=> setName(e.target.value)} type="text" name="name"/>
                <br/> 
                    <label htmlFor="password">
                        Password
                    </label>
                <br/>
                    <input onChange={(e)=>setPassword(e.target.value)} type="text" name="password" // value={username} // onChange={(e) => setUsername(e.target.value)}
                    />
                </p>
                </Form.Field>
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
            icon='checkmark'
            onClick={handleSignUp}
            positive
        />):(
        // handle log in
            <Button
            content="Submit"
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