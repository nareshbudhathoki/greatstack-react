import React, { useState } from 'react'
import Navbar from './components/Navbar';
import FirstComponent from './components/FirstComponent';

function App() {
  const [y, setY] = useState(0);
  let x = "Billionare Club";
  let array = ["English", "Hindi", "Spanish", "Nepali"];

  let data = "girl";

  const btnClick = ()=>{
    console.log("clicked");
    setY(prev => prev+1)
  }

  return (
    <>
    <Navbar/>
    <p>{x}</p>
    {array.map((language) => {return <h3>{language}</h3>})}
    {data === "boy"? <h2>Boy</h2> : <h2>Girl</h2>}

    <div>
      <button onClick={btnClick}>Click Me!</button>
      <p>{y}</p>
      <FirstComponent data ={y} fn={setY}/>
    </div>
    </>
  )
}

export default App;
