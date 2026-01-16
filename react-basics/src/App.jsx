import React from 'react'
import Navbar from './components/Navbar';

function App() {
  let x = "Billionare Club";
  let array = ["English", "Hindi", "Spanish", "Nepali"];

  let data = "boy";

  return (
    <>
    <Navbar/>
    <p>{x}</p>
    {array.map((language) => {return <h3>{language}</h3>})}
    {data === "boy"? <h2>Boy</h2> : <h2>Girl</h2>}
    </>
  )
}

export default App;
