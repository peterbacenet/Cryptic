import { CardContent, Card ,Header, Image, CardDescription } from "semantic-ui-react";

function News({article}){
    // console.log(article)
    return(
        <div className="news">
            <Card>
              <img width="300" height="200" src={article.image_url} />  
                <CardContent>
                    <h4> {article.title} </h4>
                    <h5> {article.author} via {article.publisher.name} </h5>
                    <CardDescription> {article.description} </CardDescription>
                    <a href={article.article_url}> Full Article </a>
                </CardContent>
            </Card>
        <br/>
        </div>
    )
}
export default News;