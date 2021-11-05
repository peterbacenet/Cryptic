import { Card, Image, Button } from 'semantic-ui-react'

function CryptoContainer (props) {
const {crypto, loggedIn, currentUser, setCurrentUser} = props;
// console.log(currentUser)
function createCrypto() {
    fetch(`/cryptos`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            data: crypto
        })
    }).then(res => {
        if(res.ok)
            console.log("Creation Success")
            else
            console.log("Could Not Create")
    })
}
function updateWatch() {
        fetch(`/update/users/${currentUser.id}`, {
            credentials: 'include',
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                watchlist: currentUser.watchlist.push(crypto)
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
        <Card.Meta>{crypto.c}</Card.Meta>
        <Card.Description>
          Crypto Pairings
        </Card.Description>
      </Card.Content>
      {
      loggedIn? (
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button basic color='teal' onClick={createCrypto}>
            Trade
        </Button>
        <Button onClick={updateWatch} basic color='red'>
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