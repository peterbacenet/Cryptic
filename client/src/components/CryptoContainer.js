import { Card, Button } from 'semantic-ui-react'
import { useState} from 'react';
import CryptoDetails from './CryptoDetails'
function CryptoContainer (props) {
const {crypto,currentUser, toggle, setToggle} = props;
const [cryptoData, setCryptoData] = useState([])
const [watch, setWatch] = useState(false)
// patches watchlist to include clicked crypto, triggers create crypto
// test
console.log(crypto)

function handleWatch() { 
    setWatch(!watch)
    currentUser.watchlists.push(crypto)
fetch(`/watchlists/`, {
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify({
            user_id: currentUser.id,
            data: crypto.T,
            T: crypto.T,
            c: crypto.c,
            h: crypto.h,
            l: crypto.l,
            n: crypto.n,
            o: crypto.o,
            t: crypto.t,
            v: crypto.v,
            vw: crypto.vw
    })
}).then(res => {
    if(res.ok)
    console.log(currentUser.watchlists)

    else
    console.log("Patch failed")
})
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
            data: crypto.T,
            T: crypto.T,
            c: crypto.c,
            h: crypto.h,
            l: crypto.l,
            n: crypto.n,
            o: crypto.o,
            t: crypto.t,
            v: crypto.v,
            vw: crypto.vw

        })
    }).then(res => {
        if(res.ok)  
            fetchingCrypto()
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
                {   cryptoData ? (
                        <Button basic color='teal' onClick={fetchingCrypto}>
                            <CryptoDetails toggle={toggle} setToggle={setToggle} crypto={crypto} currentUser={currentUser} cryptoData={cryptoData} />
                        </Button>
                    ):(
                        <Button color = 'blue' onClick={createCrypto}>
                            Create
                        </Button>
                    )
                }
            // add to watchlist array and creates record of cryptoData
            { watch? (<Button> Added! </Button>):(<Button onClick={handleWatch} basic color='red'>
                    Watchlist
                </Button>)} 
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