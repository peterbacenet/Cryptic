import { Card, Header, Button } from "semantic-ui-react";
import {useState} from 'react'

function Watchlist(props){
    const {crypto} = props
    const [show, setShow] = useState(true)
    console.log(crypto)

    function removeWatch(){
        fetch(`watchlists/${crypto.id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json"
        }})
        .then(
            setShow(!show),
            console.log("Deleted!"))}
    return( 
        <div>
        {
            show ? (
            <Card padding="20px">
                <Card.Content>
                <Header> {crypto.T} </Header>
                <p> Closing Price - {crypto.c} </p>
                <p> 24 Hour High - {crypto.h} </p>
                <p> 24 Hour Low - {crypto.l} </p>
                <p> 24 Hour Starting Price - {crypto.o} </p>
                <p> Total Volume - {crypto.v} </p>
                </Card.Content>
                <Button color="red" onClick={removeWatch}> Remove from Watchlist </Button>
            </Card>
        ): (<div></div>)
        }
        <br/>
        </div>
        )
}
export default Watchlist;