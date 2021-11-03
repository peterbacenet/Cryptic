// import CryptoContainer from "./CryptoContainer";
import {useState} from 'react'
function Currencies (props) {
    const [results, setResults] = useState("")
    const {singleCrypto, date} = props;
    // console.log(singleCrypto)
    return (
        <div>
            <h3>Market Data as of  </h3>
            <div class="ui icon input">
                <i class="search icon"></i>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={(e) => setResults(e.target.value)}
                /> 
            </div>
            <div className="crypto">
            {singleCrypto}
            </div>
        </div>
    )
}
export default Currencies;  