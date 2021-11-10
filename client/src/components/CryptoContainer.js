import { Card, Image, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import CryptoDetails from './CryptoDetails'
function CryptoContainer (props) {
const {crypto, watchlist, setWatchlist, currentUser} = props;
const [cryptoData, setCryptoData] = useState([])

function fetchingCrypto() {
    // createCrypto()
    fetch(`/crypto/${crypto.T}`)
    .then((r) => r.json())
    .then(data => {
        setCryptoData(data)
        console.log(cryptoData)
});
}

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
    fetchingCrypto();
}

function updateWatch() {
        watchlist.push({
            T: crypto.T,
            c: crypto.c,
        })
        fetch(`/users/${currentUser.id}`, {
        credentials: 'include',
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            watchlist: watchlist
        })
        }).then(
        console.log(currentUser),
        )
    };
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
                {   cryptoData? (
                        <Button basic color='teal' onClick={fetchingCrypto}>
                            <CryptoDetails currentUser={currentUser} cryptoData={cryptoData} />
                        </Button>
                    ):(null)
                }
                <Button onClick={createCrypto} basic color='red'>
                    Create 
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