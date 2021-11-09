import React from 'react'
import { Button, Header, Image, Form, Modal, ModalContent } from 'semantic-ui-react'
import { useState, useEffect } from 'react';

function CryptoDetails(props) {
    const [open, setOpen] = React.useState(false)
    const [cryptoBulletins, setCryptoBulletins] = useState([])
    const {cryptoData} = props;
    
// bring in correct crypto

function fetchingBulletins() {
    fetch(`/bulletins/crypto/${cryptoData.id}`)
    .then((r) => r.json())
    .then(data => {
    console.log("Bulletin...",data)
});
}
    //bring in correct comments
function fetchingComments() {
    fetch(`/comments/crypto/${cryptoData.id}`)
    .then((r) => r.json())
    .then(data => {
    console.log("Comments...",data)
});
}

    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<p> Details </p>} >
        {cryptoData?(
        <ModalContent>
            Hello World {cryptoData.data}
            {fetchingBulletins}
            {fetchingComments}
        </ModalContent>):(null)
    }
        </Modal>
    )
}
export default CryptoDetails