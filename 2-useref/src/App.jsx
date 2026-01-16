import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

function App() {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  return (
    <>
    <div>
      <input id='name' ref={inputRef} type="text" />
      <label htmlFor="name"></label>
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item, index) => {return <h2 key={item}>{item}</h2>})}
    </div>
    </>
  )
}

export default App
