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
const [viewBulletins, setViewBulletins] = useState(false)
const [bulletForm, setBulletForm] = useState(false)

function handleComment(e){
    // e.preventDefault();
    posting({
        content: content,
        user_id: currentUser.id,
        crypto_id: cryptoData.id
    })
}

let generateComs = cryptoData.comments ?(
    cryptoData.comments.map(((comment) =>  {
        return (
            <div>
                        <Card>
                        <Card.Content>
                        <Header> {comment.content} </Header>
                        <Button onClick={() => setCommentForm(!commentForm)} color='green'> Add Comment </Button>
                        <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button>
                        </Card.Content>
                </Card>
            <br/>
            </div>
                )}))):(null)



let generateBullets = cryptoData.bulletins ? (
    cryptoData.bulletins.map(((bullet) =>  {
    return (
        <div>
                    <Card>
                    <Card.Content>
                    <Header> {bullet.content} </Header>
                    <Button onClick={() => setCommentForm(!commentForm)} color='yellow'> Add Comment </Button>
                    <button className="ui button" onClick={() => setViewBulletins(!viewBulletins)}> Close Form </button>
                    </Card.Content>
            </Card>
        <br/>
        </div>
)}))):(null)


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
    setContent(""),
    setCommentForm(!commentForm)
    )
}

return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<p> Details </p>} >
        {cryptoData.comments?(
        <Modal.Content>
            Hello World {cryptoData.data}
            <br/>

            <Button onClick={() => setViewComments(!viewComments)} basic color='blue'> View Comments </Button>
            <Button onClick={() => setViewBulletins(!viewBulletins)} basic color='green'> View Bulletins </Button>
        </Modal.Content>):(
        <Modal.Content>
            Not added to server!
        </Modal.Content>
        )
        }
    {/* {hasBulletins? (<Modal.Content> <BulletinContainer bulletin={bulletData} currentUser={currentUser}/> </Modal.Content> ):(null)} */}
    { viewComments? ([generateComs]):(
        <Card>
        <CardContent>
        <Header> Add a comment..  </Header>
            <Button onClick={() => setCommentForm(!commentForm)} color='red'> Add Comment </Button>
            {/* <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button> */}
        </CardContent>
        </Card>
    )}
    <br/>

{ viewBulletins? ([generateBullets]):(
    <Card>
    <CardContent>
    <Header> Add a bulletin..  </Header>
        <Button onClick={() => setBulletForm(!bulletForm)} color='blue'> Add Bulletin </Button>
        {/* <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button> */}
    </CardContent>
    </Card>
)}

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