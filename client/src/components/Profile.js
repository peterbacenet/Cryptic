import { useEffect } from 'react';
import { Card, Image, Button, Header, CardContent } from 'semantic-ui-react'
import BulletinContainer from './BulletinContainer';
import CommentContainer from './CommentContainer';
import CryptoContainer from './CryptoContainer'
import parse from 'html-react-parser';

function Profile ({currentUser}) {
    //fetch bulletins for user --> comes in with user
    //fetch watchlist for user --> comes in with user --> comes in as string 
    //fetch comments for user --> commes in with user -->
    
    // console.log(currentUser)
    // console.log(typeof currentUser.watchlist)
    // // currentUser.watchlist.json()
    // currentUser.watchlist.split("/"/")




    const organizedBulletins = currentUser.bulletins.map((bulletin) => (
        <BulletinContainer
        bulletin={bulletin}
        currentUser={currentUser}
        />
    ))

    const organizedComments = currentUser.comments.map((comments)=> (
        <CommentContainer comments={comments} currentUser={currentUser} />
    ))
    return (
        <div>
            <h1>Profile </h1> 
        
            <h2> {currentUser.name}'s Watchlist </h2>
                <Card><CardContent><Header>{currentUser.watchlist} </Header></CardContent></Card>
                
            <h2> {currentUser.name}'s Activity </h2>
                {organizedBulletins}
                <br/>
                {organizedComments}
        </div>  
    )   
}
export default Profile;