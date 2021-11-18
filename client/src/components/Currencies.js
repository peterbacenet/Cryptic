// import CryptoContainer from "./CryptoContainer";

function Currencies (props) {
    const {singleCrypto, setInput, date} = props;


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