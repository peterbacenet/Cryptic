
import { Card, Image, Button } from 'semantic-ui-react'

function Profile ({currentUser, crypto}) {
console.log(currentUser)
console.log(currentUser.watchlist)
    return (
        <div>
            <h2> {currentUser.name} </h2>
            <Card.Group>
                
                Watchlist Cards Go Here
            </Card.Group>
            <h2> User Activity</h2>
        </div>
    )   
}

export default Profile;