import './App.css';
import { useEffect, useState } from 'react';

function App() {
// use state hooks

// hoosk for API Call? 
let [responseData, setResponseData] = useState('')

//Hooks for beer 
const [beerName, setBeerName] = useState("null")
const [beerDescription, setBeerDescription]= useState("null")

// useEffect hooks 

useEffect(() => {
  setResponseData('the response data has been set ')
  console.log(responseData)
}, [responseData, setResponseData])


  const generate = () => {
    alert("beer Generated")
  }
  return (
    <div className="App">
      <h1> Have you tried this beer?  </h1>
      {/* Maybe do a dark mode? 
      also, Maybe do generate a random background-color  */}
      <button onClick={generate}> Generate Random Beer </button>
    </div>
  );
}

export default App;
