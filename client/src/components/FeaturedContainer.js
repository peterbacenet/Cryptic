import { Card, Image, Button } from 'semantic-ui-react'
import BulletinContainer from './BulletinContainer';
function FeaturedContainer({crypto}){
    console.log(crypto)
    return(
        <Card background="white" className="featuredcard">
        <Card.Content>
            <Card.Header> {crypto.T} </Card.Header>
            <Card.Meta>Closing Price: {crypto.c} </Card.Meta>
            <Card.Meta> Trading Volume: {crypto.v} </Card.Meta>
            <Card.Description> 
            <BulletinContainer />
            </Card.Description>
        </Card.Content>
        </Card>
    )
}
export default FeaturedContainer;  