import React, { useState } from "react";
import { Container, Header, Card, Button, Form, CardContent } from 'semantic-ui-react'
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

function BulletinContainer(props){
  const {bulletin, currentUser} = props;
  const [showForm, setShowForm] = useState(false)

  const [content, setContent] = useState("")
  const [ticker, setTicker] = useState("")
  const [tickerID, setTickerID] = useState()

  const linkStyles = {
    paddingtop: "5px",
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "magenta",
    textDecoration: "none",
  }
  //creates bulletin object successfully
  function handleBulletin(e) {
    e.preventDefault();
    handleTicker();
    handlePost ({
      content: content,
      user_id: currentUser.id,
      crypto_id: tickerID
    })
  }
  function handleTicker() {
    // createCrypto()
    fetch(`/crypto/${ticker}`)
    .then((r) => r.json())
    .then(data => {
        setTickerID(data.id)
        console.log("set ticker id")
  });
  }

  //duplicate keys, cant post due to seeded data
  function handlePost(newBulletin) {
    console.log(newBulletin)
    fetch('/bulletins', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBulletin),
    })
      .then(resp => resp.json())
      .then(
        console.log("Added Bulletin to DB")
      )
  }

  return(
    <div>

    <Card>
      <Card.Content>
        <Header> Crypto Bulletin for {bulletin.crypto.data} </Header>
        <HeaderSubHeader> Created by: {bulletin.user.name} </HeaderSubHeader>
        <br/> {bulletin.content} <br/>
      {
        currentUser? (
        <Card.Content extra>
          <div className='ui three buttons'>
            <Button onClick={() => setShowForm(!showForm)} basic color='teal'> Create Bulletin </Button>
          </div>
        </Card.Content>):
        (<Card.Content extra> Log In for Full Functionality </Card.Content>)
      }
      </Card.Content>
    </Card>
    
  <br/>

    {
      showForm? (
        <Card>
          <br/> 
          <Card.Header padding="10px"> <h2> Bulletin Form </h2> </Card.Header>
        <Card.Content>
        <Form onSubmit={handleBulletin}>
          <input name="tickerholder" onChange={(e) => setTicker(e.target.value)} value={ticker} placeholder="ticker?" type="text" />
          <input name="contentholder" onChange={(e) => setContent(e.target.value)} value={content} placeholder="content" type="text" />
          <button className="ui button" type="submit"> Submit Bulletin </button>
          <button className="ui button" onClick={() =>setShowForm(!showForm)}> Close Form </button>
        </Form>
        </Card.Content>
        </Card> 
      ):(null)
    }

<br/>

<br/>
    </div>
  )
}
export default BulletinContainer;