import { useEffect } from 'react';
import BulletinContainer from './BulletinContainer';
import CommentContainer from './CommentContainer';
import Watchlist from './Watchlist';

function Profile ({currentUser, toggle, setToggle}) {

useEffect( () => { 
fetch(`/users/${currentUser.id}`)
.then((r) => r.json())
.then(data => {
console.log(data)
})
})

const organizedWatch = currentUser.watchlists.map((crypto) => (
    <Watchlist crypto={crypto} />
))

if (currentUser.bulletins){
    const organizedBulletins = currentUser.bulletins.map((bulletin) => (
        <BulletinContainer
        bulletin={bulletin}
        key={bulletin.id}
        currentUser={currentUser}
        toggle={toggle}
        setToggle={toggle}
        />
    ))
}

const organizedComments = currentUser.comments.map((comments)=> (
        <CommentContainer comments={comments} toggle={toggle} setToggle={setToggle} currentUser={currentUser} />
    ))
    return (
        <div className="titlehead">
            <br/>
        <h1> Cryptic Activity</h1>
        <br/> 
    <br/>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 6 }}>
            <div className="column">
                <h2> {currentUser.name}'s Watchlist: </h2>
                    {organizedWatch}
            </div>
        <div className="column">
            <h2> Posted Bulletins: </h2>
             {organizedBulletins}
        </div>
        <div padding='10px'  className="column">
        <h2> Posted Comments: </h2>
            {organizedComments}
        </div>
            <br/>
        </div>  
        </div>
    )   
}
export default Profile;