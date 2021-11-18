import {Header, Card, Button} from 'semantic-ui-react'
import {useState} from 'react'
function CommentContainer(props){
    const {comments, currentUser} = props;
    const [show, setShow] = useState(true)
    function handleDelete(){
      fetch(`/comments/${comments.id}`,{
        method: "DELETE",
        headers:{
          "Content-Type" : "application/json"
        }})
        .then(setShow(!show))
    }
    return(
      <div>
        { show? (
           <Card>
           <Card.Content>
           <Header> Comment created on: {comments.crypto.data} </Header>
             {comments.content}
             <br/>
             <br/>
             {currentUser.id === comments.user.id? (<Button onClick={handleDelete} color = "red"> Delete </Button>):(null)}
       </Card.Content>
       </Card>
        ):(null)}
       
  <br/>
      </div>
    )
}
export default CommentContainer;