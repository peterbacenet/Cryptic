import React from 'react'
import { Button, Header, Image, Form, Modal, ModalContent } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import BulletinContainer from './BulletinContainer'
import CommentContainer from './CommentContainer'

function CryptoDetails(props) {
const [open, setOpen] = React.useState(false)
const {cryptoData, currentUser} = props;
const [bulletData, setBulletData] = useState([])
const [hasBulletins, setHasBulletins] = useState(false)

function organizedBulletins() { cryptoData.bulletins? (cryptoData.bulletins.map((bulletin) => (
        console.log("organized bullets fired"),
        fetch(`/bulletins/crypto/${cryptoData.id}`)
        .then((r) => r.json())
        .then(data => (
            setBulletData(bulletData),
            setHasBulletins(true)
        ))
))):(console.log("No Bulletins!"))}

function organizedComments() {cryptoData.comments.map((comments)=> (
    console.log("organized comments fired"),
    <CommentContainer comments={comments} currentUser={currentUser} />
))}

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
            <button onClick={organizedBulletins}>Bulletins</button> 
            <button onClick={organizedComments}>Comments</button> 
        </Modal.Content>):(
        <Modal.Content>
            Not added to server!
        </Modal.Content>
        )
    }
    { hasBulletins? (<Modal.Content> <BulletinContainer bulletin={bulletData} currentUser={currentUser}/> </Modal.Content> ):(null)}
        </Modal>
    )
}
export default CryptoDetails