import { Container, Header, Card, Button, CardContent } from 'semantic-ui-react'
function CommentContainer(props){
    const {comments, currentUser} = props;
    console.log(currentUser)
    console.log(comments)
    return(
      <Card>
      <Card.Content>
        {comments.content}
        CRYPTO: {comments.crypto}
    {
      currentUser? (
      <Card.Content extra>
        {/* <div className='ui two buttons'>
        <Button basic color='teal'>
          Add Comment
        </Button>
        <Button basic color='red'>
          Button 2
        </Button>
    </div> */}
    </Card.Content>):
    <Card.Content extra>
    Log In for Full Functionality
    </Card.Content>
    }
  </Card.Content>
  </Card>
    )
}
export default CommentContainer;