// import { restClient } from "@polygon.io/client-js";
import { useState, useEffect } from 'react';
import { Switch, Route} from 'react-router-dom'
import Navigation from './Navigation'
import CryptoContainer from "./CryptoContainer";
import Profile from "./Profile"
import Currencies from "./Currencies"  
import News from "./News"
// import BulletinContainer from "./BulletinContainer";
// import FeaturedContainer from "./FeaturedContainer";
import Authentication from "./Authentication";


function Homepage ({currentUser, setCurrentUser}) {
const [marketData, setMarketData] = useState([])
const [input, setInput] = useState("")
const [allBullets, setAllBullets] = useState([])
const [news, setNews] = useState([])
const [toggle, setToggle] = useState(false)
// const [watchlist, setWatchlist] = useState([])
// const rest = restClient("ozCbtJMUwHk31pXy7OhIeWbHzjytSflP");
const date = "2021-11-16"
// const featuredCrypto = marketData.find((data) => (data.T = "X:BTCUSD"))
const filter = ( marketData.filter((data) => input === "" || data.T.toLowerCase().includes(input.toLowerCase()) ))
// auto load market data
useEffect( () => { 
    fetch(`https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/${date}?adjusted=true&apiKey=ozCbtJMUwHk31pXy7OhIeWbHzjytSflP`)
    .then((r) => r.json())
    .then(data => {
    setMarketData(data.results)
})
}, [])

//auto refresh upon post 

useEffect(() => {
    console.log("Re-Running...")
    },[toggle]);

// auto load bulletins on load
useEffect( () => { 
    fetch(`/bulletins`)
    .then((r) => r.json())
    .then(data => {
    allBullets.push(data)
})
}, [])

if (currentUser) {
console.log(currentUser)
    fetch(`/watchlists/${currentUser.id}`)
    .then((r) => r.json())
    .then(data => {
        console.log(data)
    })
} 
const singleCrypto = filter.map((crypto) => (
    <CryptoContainer 
        key={crypto.T}
        currentUser={currentUser} 
        crypto={crypto}
        toggle={toggle}
        setToggle={setToggle}
        />
))
//fetch news
useEffect( () => {
    fetch('https://api.polygon.io/v2/reference/news?ticker=BTC&order=asc&limit=15&apiKey=ozCbtJMUwHk31pXy7OhIeWbHzjytSflP')
    .then((r) => r.json())
    .then(data => {setNews(data.results)})
},[])
// render news in containers
console.log(news)
const singleNews = news.map((article) => (
    <News key={article.id} article={article}/>
))
console.log(news)
    return (
        <div>
            <div className='ui menu'>
                <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
                <Switch>

                    <Route exact path ="/">
                        <div className="titlehead">
                            <br/>
                        {currentUser? (<h1> Welcome to Cryptic, {currentUser.name} </h1>): (<h1> Please Login for the Full Cryptic Experience </h1>)}
                        <p> This weeks featured crypto is Bitcoin </p>
                        <br/>
                        </div>
                        <br/>
                        <div className="newss">
                        {singleNews}
                     
                        </div>
                    </Route>

                    <Route path="/currencies">
                        <Currencies date={date}  input={input} setInput={setInput} singleCrypto={singleCrypto} />
                    </Route>
                    {currentUser? (
                    <Route path="/profile">
                        <Profile currentUser={currentUser} toggle={toggle} setToggle={setToggle} />
                    </Route>
                    ):(
                    <Route path="/profile">
                        <Authentication />
                    </Route>
                    )}
                    

                </Switch>
        </div>
    )
}

export default Homepage;