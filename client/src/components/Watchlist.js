import { Card, Header } from "semantic-ui-react";

function Watchlist(props){
    const {crypto} = props
    console.log(crypto)
    return( 
        <Card padding="20px">
            <Card.Content>
            <Header> {crypto.T} </Header>
            <p> Closing Price - {crypto.c} </p>
            <p> 24 Hour High - {crypto.h} </p>
            <p> 24 Hour Low - {crypto.l} </p>
            <p> 24 Hour Starting Price - {crypto.o} </p>
            <p> Total Volume - {crypto.v} </p>
            </Card.Content>
        </Card>
    )
}
export default Watchlist;