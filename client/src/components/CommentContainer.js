import { Container, Header, Card, Button, CardContent } from 'semantic-ui-react'
function CommentContainer(props){
    const {comments, currentUser} = props;
    console.log(comments)

    //fetch comments with user_id and display

    return(
      <div>
        <Card>
      <Card.Content>
      <Header> Comment created on: {comments.crypto.data} </Header>
        {comments.content}
    {/* {
      currentUser? (
            <div className='ui two buttons'>
              <Button basic color='teal'>
                Create Comment
              </Button>
            </div> ):
    <Card.Content extra>
    Log In for Full Functionality
    </Card.Content>
    } */}
  </Card.Content>
  </Card>
  <br/>
      </div>
    )
}
export default CommentContainer;