// import CryptoContainer from "./CryptoContainer";
import {useState} from 'react'
function Currencies (props) {
    const {singleCrypto, input, setInput, date} = props;
    // console.log(singleCrypto)

    return (
        <div>
            <div className="titlehead">
                <br/>
            <h1>Market Data as of {date}  </h1>
            <div className="ui icon input">
                <i className="search icon"></i>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={(e) => setInput(e.target.value)}
                /> 
                
            </div>
            <br/><br/>
            <br/>
            </div>
            
           
            <div className="crypto">
            {singleCrypto}
            </div>
        </div>
    )
}
export default Currencies;  