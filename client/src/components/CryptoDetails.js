import React from 'react'
import { Button, Header, Card, Image, Form, Modal, ModalContent, CardContent } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import BulletinContainer from './BulletinContainer'
import CommentContainer from './CommentContainer'

function CryptoDetails(props) {
const [open, setOpen] = React.useState(false)
const [commentForm, setCommentForm] = useState(false)
const [viewComments, setViewComments] = useState(false)
const {cryptoData, currentUser} = props;
const [bulletData, setBulletData] = useState([])
const [hasBulletins, setHasBulletins] = useState(false)
const [content, setContent] = useState("")

function organizedBulletins() { 
        cryptoData.bulletins? (cryptoData.bulletins.map((bulletin) => (
        console.log("organized bullets fired"),
        <BulletinContainer bulletin={bulletin} />
        // fetch(`/bulletins/crypto/${cryptoData.id}`)
        // .then((r) => r.json())
        // .then(data => (
        //     console.log(data),
        //     setBulletData(bulletData),
        //     setHasBulletins(true)
        ))):(console.log("No Bulletins!"))
    }

function handleComment(e){
    // e.preventDefault();
    posting({
        content: content,
        user_id: currentUser.id,
        crypto_id: cryptoData.id
    })
}
function posting(newComment){
    console.log(newComment)
    fetch('/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then(resp => resp.json())
      .then(
        console.log("Added Console to DB"),
        setContent("")
      )
}
    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<p> Details </p>} >
        {cryptoData?(
        <Modal.Content>
            Hello World {cryptoData.data}
            <br/>
            <Button onClick={() => setViewComments(!viewComments)} basic color='blue'> View Comments </Button>
        </Modal.Content>):(
        <Modal.Content>
            Not added to server!
        </Modal.Content>
        )
    }
    {hasBulletins? (<Modal.Content> <BulletinContainer bulletin={bulletData} currentUser={currentUser}/> </Modal.Content> ):(null)}



    {
    viewComments? (
    (()=> {
        if(cryptoData.comments[0]) {
            return <Card>
                    <CardContent>
                    <Header> {cryptoData.comments[0].content} </Header>
                    <Button onClick={() => setCommentForm(!commentForm)} color='red'> Add Comment </Button>
                    <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button>
                    </CardContent>
                   
                </Card>;
        } else {
            return <Card>
                <CardContent>
                <Header> No comments here yet!  </Header>
                    <Button onClick={() => setCommentForm(!commentForm)} color='red'> Add Comment </Button>
                    <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button>
                </CardContent>
            </Card>
        }
    })()
    ):(null)
}
<br/>

{
    commentForm? (
    <Card>
    <Card.Content>
        <Header> Post New Comment </Header>
    <Form onSubmit={handleComment}>
        {/* <input name="tickerholder" type="text" /> */}
        <input onChange={(e) => setContent(e.target.value)}  value={content} width="20px" name="contentholder" placeholder="content..." type="text" />
        <br/>
        <br/>
        <button className="ui button" type="submit"> Submit Comment </button>
        <button className="ui button" onClick={() =>setCommentForm(!commentForm)}> Close Form </button>
    </Form>
    </Card.Content>
    </Card> 
    ):(null)
}
<br/>

    <br/>  
</Modal>

    )
}
export default CryptoDetails