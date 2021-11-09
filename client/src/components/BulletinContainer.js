import React, { useState } from "react";
import { Container, Header, Card, Button,CardContent } from 'semantic-ui-react'

function BulletinContainer(props){
  const {bullet} = props;
  console.log(bullet)
  // create bulletins
  const linkStyles = {
    paddingtop: "5px",
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "magenta",
    textDecoration: "none",
  }

    return( 
      <Card className='bulletin'>
        <CardContent>
        <Header as='h2'> Featured Bulletin </Header>
        <p>
        Cryptocurrencies are starting the week on a positive note.

        Ether, the world’s second-largest digital coin, surged more than 4% in 24 hours Monday to hit a new all-time high above $4,700. The token was last trading at a price of $4,740, according to Coin Metrics data.

        Ether is the cryptocurrency of the Ethereum blockchain. In the crypto market, the terms ether and ethereum are often interchangeable when referring to the currency.

        Bitcoin, meanwhile, climbed 7% to a price of $66,250, inching back toward a record high above $66,900 set in late October.

        The reason for the move wasn’t clear. Cryptocurrencies are known for their volatile price swings, with moves of up to 20% higher or lower relatively common.

        Mikkel Morch, executive director at crypto hedge fund ARK36, said a $70,000 price for bitcoin now “seems imminent.”

        “Importantly, the uptick doesn’t seem to be leverage-driven but rather results from the increased demand on the spot market where there’s currently very little sell-side liquidity,” Morch said in an emailed note Monday.
        </p>
        <Button style={linkStyles}> Add Comment </Button>
        <Button style={linkStyles}> Create Bulletin</Button>
        </CardContent>
      </Card>
    )
}
export default BulletinContainer;