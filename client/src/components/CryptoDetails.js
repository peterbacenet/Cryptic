import React from 'react'
import { Button, Header, Card, Form, Modal, CardContent } from 'semantic-ui-react'
import { useState} from 'react';
// import BulletinContainer from './BulletinContainer'
// import CommentContainer from './CommentContainer'

function CryptoDetails(props) {
const [open, setOpen] = React.useState(false)
const [commentForm, setCommentForm] = useState(false)
const [viewComments, setViewComments] = useState(false)
const {cryptoData, crypto, currentUser, toggle, setToggle} = props;
const [content, setContent] = useState("")
const [viewBulletins, setViewBulletins] = useState(false)
const [bulletForm, setBulletForm] = useState(false)
const [ticker, setTicker] = useState("")
const [tickerID] = useState()
const [title, setTitle] = useState("")


//styling
const linkStyles = {
  paddingtop: "5px",
  paddingbottom: "5px",
//   background: "magenta",
  display: "block",
  width: "800px",
  padding: "10px",
  margin: "auto",
//   background: "magenta",
  textDecoration: "none",
}

// creates new objects for comments and bulletins
function handleComment(e){
    // e.preventDefault();
    posting({
        content: content,
        user_id: currentUser.id,
        crypto_id: cryptoData.id 
    })
}
function handleBulletin(e) {
    e.preventDefault();
    console.log(tickerID)
  //   handleTicker();
    handlePost ({
    title: title,
    content: content,
    user_id: currentUser.id,
    crypto_id: cryptoData.id
    })
}

// posting bulletins and comments
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
// generate cards for exisitng comments and bulletins
let generateComs = cryptoData.comments ?(
    cryptoData.comments.map(((comment) =>  {
        return (
            <div>
                        <Card>
                        <Card.Content>
                        <p> Created by: {comment.user.name} </p>
                        <Header> {comment.content} </Header>
                        
                        <Button onClick={() => setCommentForm(!commentForm)} color='green'> Add Comment </Button>
                        {currentUser.id === comment.user.id ? (<Button onClick={(e) =>handleDelete(comment)} color="red"> Delete Comment </Button>):(null)}
                        {/* <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button> */}
                        </Card.Content>
                </Card>
            <br/>
            </div>
                )}))):(null)

let generateBullets = cryptoData.bulletins ? (
    cryptoData.bulletins.map(((bullet) =>  {
        console.log(bullet)
    return (
        <div>
                    <Card>
                    <Card.Content>
                    <Header> {bullet.title} </Header>
                    <p> Created by: {bullet.user.name} </p>
                    <Header> {bullet.content} </Header>
                    
                    <br/>
                    <Button onClick={() => setBulletForm(!bulletForm)} color='orange'> Create Bulletin </Button>
                    {currentUser.id === bullet.user.id ? (<Button onClick={(e) =>handleDestroy(bullet)} color="red"> Delete Bulletin </Button>):(null)}
                    {/* <button className="ui button" onClick={() => setViewBulletins(!viewBulletins)}> Close Form </button> */}
                    </Card.Content>
            </Card>
        <br/>
        </div>
)}))):(null)

// delete actions
function handleDestroy(bullet){
    fetch(`/bulletins/${bullet.id}`,{
    method: "DELETE",
    headers:{
    "Content-Type" : "application/json"
    }})
    .then(setToggle(!toggle))
}

function handleDelete(comment){
fetch(`/comments/${comment.id}`,{
    method: "DELETE",
    headers:{
    "Content-Type" : "application/json"
    }})
    .then(setToggle(!toggle))
}

//on submit, pop open comments/bulletings

function handleCommentSubmit(){
    setCommentForm(!commentForm)
    setViewComments(!viewComments)
}
return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<p> Details </p>}
            className="modaldetail">
        <Modal.Content>
            <div className='details' floated="left" style={linkStyles}>
            <h1> {cryptoData.data} </h1>
            <p> Statistics: </p>
            <li> 24 Hour High - {crypto.h} </li>
            <li> 24 Hour Low - {crypto.l} </li>
            <li> 24 Hour Open - {crypto.o} </li>
            <li> 24 Hour Close - {crypto.c} </li>
            <li> 24 Hour Volume - {crypto.v} </li>
            </div>
            <div className= "detailbutton" style={linkStyles}>
            <Button onClick={() => setViewComments(!viewComments)} basic color='blue'> View Comments </Button>
            <Button onClick={() => setViewBulletins(!viewBulletins)} basic color='green'> View Bulletins </Button>
            </div>
        </Modal.Content>
        <div justify="left" className="detailcard">
            { viewComments? ([generateComs]):(null)}
        <br/>
            { viewComments? (null):(
                <Card>
                    <CardContent>
                    <Header> Add a comment..  </Header>
                        <Button onClick={() => setCommentForm(!commentForm)} color='teal'> Add Comment </Button>
                    </CardContent>
                    </Card>
                )}
        </div>
            <br/>
            <div floated="right">
            { viewBulletins? ([generateBullets]):(null)}
            {/* <br/> */}

            {viewBulletins ? (null): (
                <Card>
                <CardContent>
                <Header> Add a bulletin..  </Header>
                    <Button onClick={() => setBulletForm(!bulletForm)} color='blue'> Add Bulletin </Button>
                </CardContent>
                </Card>
            )}
            <br/>
        </div>
        <div >
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
            <button className="ui button" onClick={() => handleCommentSubmit}> Close Form </button>
        </Form>
        </Card.Content>
        </Card> 
        ):(null)
    }
    <br/>
    {
        bulletForm? (
        <Card>
        <Card.Content>
            <Header> Create New Bulletin </Header>
            <Form onSubmit={handleBulletin}>
            <input name="tickerholder" onChange={(e) => setTicker(e.target.value)} value={ticker} placeholder="ticker?" type="text" />
            <input name="titleholder" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="bulletin title.." type="text" />
            <input name="contentholder" onChange={(e) => setContent(e.target.value)} value={content} placeholder="content" type="text" />
            <button className="ui button" type="submit"> Submit Bulletin </button>
            <button className="ui button" onClick={() =>setBulletForm(!bulletForm)}> Close Form </button>
            </Form>
            </Card.Content>
        </Card> 
        ):(null)
    }
        <br/>  
    </div>
</Modal>

    )
}
export default CryptoDetails