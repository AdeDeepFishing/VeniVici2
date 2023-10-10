import { useState, useEffect } from 'react'
import QueryRes from './Components/QueryRes'
import History from './Components/History';
import Banned from './Components/Banned';
import './App.css'

function App() {
  const [allCats, setAllCats] = useState([]);
  const [history, setHistory] = useState([
    {
      name: null, 
      origin: null,
      imgSrc: null
    }
  ]);
  const [data, setData] = useState({
    name: "",
    origin: "",
    intelligence: null,
    affectionLevel: null,
    lifeSpan: null,
    imgSrc: ""
  })
  const [bannedList, setBannedList] = useState([]);
  const [showData, setShowData] = useState(false);

  const api_key = "live_Gw3UEaVOImSvc1M77zTFCcRqH7aN60WSlJNrcPgzVxN6D7vfveEiuG46mHhBCOuc";

  useEffect(() => {
    async function getAPI() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds",{headers: {
        'x-api-key': api_key
      }})
      const queryData = await response.json();
      const FilteredData = queryData.filter(element => element.image?.url != null);
      setAllCats(FilteredData);     
    }
    getAPI();
  },[])

  const fillData = (index) => {
    const {name, origin, intelligence, affection_level, life_span, image} = allCats[index];
    setData(prevState => ({
      ...prevState,
      name: name,
      origin: origin,
      intelligence: intelligence,
      affectionLevel: affection_level,
      lifeSpan: life_span,
      imgSrc: image.url
    }))

    setHistory((prevCats) => [...prevCats, {name: name, origin:origin, imgSrc: image.url}]);

  }
  const getRandomCat = () => {
    let randNum = Math.floor(Math.random() * 65);
    while(allCats[randNum] === undefined){
      randNum = Math.floor(Math.random() * 65);
    }
    fillData(randNum);
    setShowData(true);
  }

  return (
    <div className="App">
      <History history={history}/>
      <div className="main-container">
        <h1>Trippin' on Cats</h1>
        <h3>Discover cats from your wildest dreams!</h3>
        <h3>😺😸😹😻😼😽🙀😿😾</h3>

        {showData && 
          <QueryRes 
            data={data} 
            setBannedList={setBannedList} 
            allCats={allCats}
            setAllCats={setAllCats}
          />
        }

        <button onClick={getRandomCat}>Discover!</button>
      </div> 
      <Banned 
        bannedList={bannedList} 
        setBannedList={setBannedList}
      />
    </div>
  )
}

export default App
