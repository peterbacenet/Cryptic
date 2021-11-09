import React, { useState } from "react";
import { Container, Header, Card, Button, CardContent } from 'semantic-ui-react'

function BulletinContainer(props){
  const {bulletin, currentUser} = props;
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
      <Card>
        <Card.Content>
          {bulletin.content}
      {
        currentUser? (
        <Card.Content extra>
          <div className='ui two buttons'>
          <Button basic color='teal'>
            Button 1
          </Button>
          <Button basic color='red'>
            Button 2
          </Button>
      </div>
      </Card.Content>):
      <Card.Content extra>
      Log In for Full Functionality
      </Card.Content>
      }
    </Card.Content>
    </Card>
    )
}
export default BulletinContainer;