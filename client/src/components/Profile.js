// import { useEffect } from 'react';
// import { Card, Header, CardContent } from 'semantic-ui-react'
import BulletinContainer from './BulletinContainer';
import CommentContainer from './CommentContainer';
// import CryptoContainer from './CryptoContainer';
import Watchlist from './Watchlist';

function Profile ({currentUser}) {
    //fetch bulletins for user --> comes in with user
    //fetch watchlist for user --> comes in with user --> comes in as string 
    //fetch comments for user --> commes in with user -->

const organziedWatch = currentUser.watchlists[0].list.map((crypto) => (
    <Watchlist crypto={crypto} />
))

const organizedBulletins = currentUser.bulletins.map((bulletin) => (
        <BulletinContainer
        bulletin={bulletin}
        key={bulletin.id}
        currentUser={currentUser}
        />
    ))

const organizedComments = currentUser.comments.map((comments)=> (
        <CommentContainer comments={comments} currentUser={currentUser} />
    ))
    return (
        <>
        <h1>Profile </h1> 
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 5 }}>
            <div className="column">
                <h2> {currentUser.name}'s Watchlist: </h2>
                    {organziedWatch}
            </div>
        <div className="column">
            <h2> Posted Bulletins: </h2>
             {organizedBulletins}
        </div>
        <div className="column">
        <h2> Posted Comments: </h2>
            {organizedComments}
        </div>
            <br/>
        </div>  
        </>
    )   
}
export default Profile;