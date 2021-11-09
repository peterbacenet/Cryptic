import { Card, Image, Button, CardContent } from 'semantic-ui-react'
import CryptoContainer from './CryptoContainer'

function Profile ({currentUser}) {
    console.log(currentUser.name)
    let watchlist = currentUser.watchlist
    console.log(watchlist)
    const createCards = watchlist.forEach((crypto) => (
        <CryptoContainer
            crypto={crypto}
            />
    ))
    return (
        <div>
    <h1> {currentUser.name}'s Profile </h1>
    {createCards}
    
        </div>
    )   
}
export default Profile;