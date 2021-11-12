import { Card, Image, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import CryptoDetails from './CryptoDetails'
function CryptoContainer (props) {
const {crypto,currentUser} = props;
const [cryptoData, setCryptoData] = useState([])

// patches watchlist to include clicked crypto, triggers create crypto
function handleWatch() {
    //post to create a new watchlist attached to current user, validate uniqueness of current user 
    // patch the created watchlist to add to it. 
    console.log(crypto.T)
    currentUser.watchlists[0].list.push(crypto)
    console.log(currentUser)
   
    // console.log(currentUser)
    // createCrypto();
}   
//creates crypto record in database
function createCrypto() {
    // console.log(crypto)
    fetch(`/cryptos`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            data: crypto.T
        })
    }).then(res => {
        if(res.ok)
            console.log("Creation Success")
            else
            console.log("Could Not Create")
    })
}
//loads crypto details using databse record
function fetchingCrypto() {
    // createCrypto()
    fetch(`/crypto/${crypto.T}`)
    .then((r) => r.json())
    .then(data => {
        setCryptoData(data)
        console.log(data)
});
}


    return (
        <div className="cards">
            <Card>
    <Card.Content>
        <Card.Header>{crypto.T}</Card.Header>
        <Card.Meta>Closing Price: {crypto.c}</Card.Meta>
        <Card.Meta> Trading Volume: {crypto.t}</Card.Meta>
        <Card.Meta> Transaction Volume: {crypto.n} </Card.Meta>
        <Card.Description>
        </Card.Description>
    </Card.Content>
        { currentUser? (
        <Card.Content extra>
            <div className='ui buttons'>
            // if cryptoData record exists... show button otherwise null
                {   cryptoData? (
                        <Button basic color='teal' onClick={fetchingCrypto}>
                            <CryptoDetails currentUser={currentUser} cryptoData={cryptoData} />
                        </Button>
                    ):(null)
                }
            // add to watchlist array and creates record of cryptoData
                <Button onClick={handleWatch} basic color='red'>
                    Watchlist
                </Button>
            </div>
        </Card.Content>):
        
    <Card.Content extra>
    Log In for Full Functionality
    </Card.Content>
    }
    </Card>
        </div>
    
    )
}
export default CryptoContainer; 