import { useEffect } from 'react';
import { Card, Image, Button, CardContent } from 'semantic-ui-react'
import CryptoContainer from './CryptoContainer'

function Profile ({currentUser}) {
    //fetch bulletins for user
    //fetch watchlist for user --> comes in with user
    //fetch comments for user 

    useEffect( () => { 
        fetch(`/`)
        .then((r) => r.json())
        .then(data => {
    })
    }, [])
    return (
        <div>
            <h1> {currentUser.name}'s Profile </h1> 
        
            <h2> {currentUser.name}'s Watchlist </h2>
                <p> {currentUser.watchlist} </p>
            <h2> {currentUser.name}'s Activity </h2>
                <p> {currentUser.bulletins[0].content} </p>
                <p> {currentUser.comments[0].content}</p>
        </div>
    )   
}
export default Profile;