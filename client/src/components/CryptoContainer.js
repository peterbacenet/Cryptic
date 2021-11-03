import {Line} from 'react-chartjs-2';
import { Card } from 'semantic-ui-react'

function CryptoContainer (props) {
const {crypto} = props;
function handleClick(){
    console.log("Clicked")
}

    return (
        <div className="cards">
            <Card
            onClick={handleClick}
            href='#card-example-link-card'
            header={crypto.T}
            meta={crypto.o}
            description= {crypto.c}
            />
        </div>
    
    )
}
export default CryptoContainer; 