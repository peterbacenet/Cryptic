import Homepage from './components/Homepage';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
// provide authentication


//c number
// The close price for the symbol in the given time period.

// h number
// The highest price for the symbol in the given time period.

// l number
// The lowest price for the symbol in the given time period.

// n number
// The number of transactions in the aggregate window.

// o number
// The open price for the symbol in the given time period.

// t integer
// The Unix Msec timestamp for the start of the aggregate window.

// v number
// The trading volume of the symbol in the given time period.


// rest.crypto.dailyOpenClose("BTC", "USD", "2020-    10-14")
// .then(data => console.log(data))


// rest.crypto.dailyOpenClose("SHIB", "USD", "2020-10-14") #set data
// .then(data => console.log(data))

// rest.crypto.snapshotAllTickers() // paywalled
// .then(data => console.log(data))

// rest.crypto.aggregates("SHIB", 1, "week", "2021-10-05","2021-10-05") // aggregate error

useEffect(() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => 
      setCurrentUser(user)
      );
    }
  });
}, []);

  
  return (
    <div className="App"> 
      <Homepage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
