import { polygonClient, restClient, websocketClient } from "@polygon.io/client-js";
import { useState, useEffect } from 'react';
import { Switch, Route} from 'react-router-dom'
import Navigation from './Navigation'
import CryptoContainer from "./CryptoContainer";
import Profile from "./Profile"
import Currencies from "./Currencies"  
import BulletinContainer from "./BulletinContainer";
import FeaturedContainer from "./FeaturedContainer";


function Homepage () {
const [marketData, setMarketData] = useState([])
const [loggedIn, setLoggedIn] = useState(false)
const [currentUser, setCurrentUser] = useState([])
const rest = restClient("ozCbtJMUwHk31pXy7OhIeWbHzjytSflP");
const date = "2021-11-03"
const allBullets = []

useEffect( () => { 
    fetch(`https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/${date}?adjusted=true&apiKey=ozCbtJMUwHk31pXy7OhIeWbHzjytSflP`)
    .then((r) => r.json())
    .then(data => {
    setMarketData(data.results)
})
}, [])


useEffect( () => { 
    fetch(`/bulletins`)
    .then((r) => r.json())
    .then(data => {
    allBullets.push(data)
})
}, [])

console.log(allBullets)
// created containers for Market Data
const singleCrypto = marketData.map((crypto) => (
    <CryptoContainer 
        key={crypto.T}
        currentUser={currentUser} 
        loggedIn={loggedIn} 
        crypto={crypto}/>
))
// featured Crypto is Bitcoin
const featuredCrypto = marketData.find((data) => (data.T = "X:BTCUSD"))

//convert watchlist to array
currentUser.watchlist=[]
console.log(currentUser)
// console.log("Current State...",marketData)
// console.log("Featured Crypto...", featuredCrypto)   
    return (
        <div>
            <div className='ui menu'>
                <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </div>
                <Switch>
                    <Route exact path ="/">
                        <h3>Please login or signup for the full experience</h3>
                        <h1>Welcome to Cryptic, your only source for Crypto Currency market data, and user interaction</h1>
                        <FeaturedContainer />
                        <BulletinContainer />
                    </Route>
                    <Route path="/currencies">
                        <Currencies date={date}loggedIn={loggedIn} singleCrypto={singleCrypto} />
                    </Route>
                    <Route path="/profile">
                        <Profile currentUser={currentUser} />
                    </Route>
                </Switch>
        </div>
    )
}

export default Homepage;