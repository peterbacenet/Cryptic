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
        <br/>
        <br/>
        {currentUser.id === comments.user.id? (<Button color = "red"> Delete </Button>):(null)}
  </Card.Content>
  </Card>
  <br/>
      </div>
    )
}
export default CommentContainer;