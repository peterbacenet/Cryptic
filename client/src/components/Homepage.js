import { polygonClient, restClient, websocketClient } from "@polygon.io/client-js";
import { useState, useEffect } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import Navigation from './Navigation'
import CryptoContainer from "./CryptoContainer";
import Profile from "./Profile"
import Currencies from "./Currencies"  
import Authentication from "./Authentication" 


function Homepage () {
const [marketData, setMarketData] = useState([])
const rest = restClient("ozCbtJMUwHk31pXy7OhIeWbHzjytSflP");

useEffect( () => { 
    fetch('https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2021-11-01?adjusted=true&apiKey=ozCbtJMUwHk31pXy7OhIeWbHzjytSflP')
    .then((r) => r.json())
    .then(data => {
    // console.log("Data fetched..", data.results)
    setMarketData(data.results)
    // market data received 166 different cryptos
    // console.log("UseEffect Fired")
})
}, [])

// created containers for Market Data
const singleCrypto = marketData.map((crypto) => (
    <CryptoContainer crypto={crypto} />
))
// featured Crypto is Bitcoin
const featuredCrypto = marketData.find((data) => (data.T = "X:BTCUSD"))

console.log("Current State...",marketData)
console.log("Featured Crypto...", featuredCrypto)   
    return (
        <div>
            <div className='ui menu'>
                <Navigation />
            </div>
            <body>
                <Switch>
                    <Route exact path ="/">
                        <h3>Please login or signup for the full experience</h3>
                        <Authentication />
                    </Route>
                    <Route exact path="/home">
                        <h1>The Hub</h1>
                    </Route>
                    <Route path="/currencies">
                        <Currencies singleCrypto={singleCrypto} />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </body>
        </div>
    )
}

export default Homepage;