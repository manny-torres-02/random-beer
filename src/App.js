import './App.css';
import { useEffect, useState } from 'react';
import BeerTemplate from './components/BeerTemplate';

function App() {
  // use state hooks

  let [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null);

  // hoosk for API Call? 
  let [responseData, setResponseData] = useState({})

  //Hooks for beer 
  const [beerName, setBeerName] = useState("name")
  let [beerDescription, setBeerDescription] = useState("try this beer")
  const [newImage, setNewImage] = useState()
  const url = "https://api.punkapi.com/v2/beers/random"
  // useEffect hooks 
  //  const data; 


  // fetchRequest 
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResponseData(result);
          console.log(responseData)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [isLoaded])


  const generate = () => {
    setIsLoaded(!isLoaded)
    setBeerName(responseData[0].name)
    setBeerDescription(responseData[0].description)
    setNewImage(responseData[0].image_url)
    console.log(responseData[0].description)
    console.log(isLoaded)
  }
  return (
    <div className="App">
      <h1> Have you tried this beer?  </h1>
      {/* Maybe do a dark mode? 
      also, Maybe do generate a random background-color  */}
      <BeerTemplate 
      name={beerName}
      description={beerDescription}
      beerImage={newImage}
      />
      <button onClick={generate}> Generate Random Beer </button>
    </div>
  );
}


export default App;
