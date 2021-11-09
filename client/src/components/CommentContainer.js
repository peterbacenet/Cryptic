import { Container, Header, Card, Button, CardContent } from 'semantic-ui-react'
function CommentContainer(props){
    const {comments, currentUser} = props;
    return(
      <Card>
      <Card.Content>
        {comments.content}
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
export default CommentContainer;