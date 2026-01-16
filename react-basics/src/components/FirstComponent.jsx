import React from 'react'

function FirstComponent({data, fn}) {
  return (
    <>
    <div>
      <button onClick={()=> {fn(10)}}>Set 10</button>
      The value of y is :{data}
    </div>
    </>
  )
}

export default FirstComponent
