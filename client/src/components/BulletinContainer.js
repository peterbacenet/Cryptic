import React, { useState } from "react";
import { Header, Card, Button, Form } from 'semantic-ui-react'
// import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

function BulletinContainer(props){
  const {bulletin, currentUser} = props;
  const [showForm, setShowForm] = useState(false)

  const [content, setContent] = useState("")
  const [ticker, setTicker] = useState("")
  const [tickerID, setTickerID] = useState()
  const [title, setTitle] = useState("")

  //creates bulletin object successfully
  function handleBulletin(e) {
    e.preventDefault();
    console.log(tickerID)
    handleTicker();
    handlePost ({
      title: title,
      content: content,
      user_id: currentUser.id,
      crypto_id: tickerID
    })
  }

  function handleTicker() {
    fetch(`/crypto/${ticker}`)
    .then((r) => r.json())
    .then(data => {
        setTickerID(data.id)
        console.log(data)
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
        console.log("Added Bulletin to DB"),
        setContent(""),
        setTitle(""),
        setTicker("")
      )
  }

  return(
    <div>

    <Card>
      <Card.Content>
        <Header> {bulletin.title} </Header>
        Creator: {bulletin.user.name} 
        <br/> Crypto: {bulletin.crypto.data}
        <br/> {bulletin.content} <br/>
      {
        currentUser? (
        <Card.Content extra>
          <br/>
          <div className='ui three buttons'>
            <Button onClick={() => setShowForm(!showForm)} color='teal'> Create Bulletin </Button>
            <Button color='red'> Delete </Button>
          </div>
        </Card.Content>):
        (<Card.Content extra> Log In for Full Functionality </Card.Content>)
      }
      </Card.Content>
    
    </Card>
    <br/>
    {
      showForm? (
        <div>
        <Card>
        <Card.Content>
        <Card.Header padding="10px"> <h2> Bulletin Form </h2> </Card.Header>
        <Form onSubmit={handleBulletin}>
          <input name="tickerholder" onChange={(e) => setTicker(e.target.value)} value={ticker} placeholder="ticker?" type="text" />
          <input name="titleholder" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="bulletin title.." type="text" />
          <input name="contentholder" onChange={(e) => setContent(e.target.value)} value={content} placeholder="content" type="text" />
          <button className="ui button" type="submit"> Submit Bulletin </button>
          <button className="ui button" onClick={() =>setShowForm(!showForm)}> Close Form </button>
        </Form>
        </Card.Content>
        </Card> 
        <br/>
        </div>
      ):(null)
    }
    </div>
  )
}
export default BulletinContainer;