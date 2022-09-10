import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Car from "./component/Car";

function App() {
  const [starwarData, setStarwarData] = useState({})

  const [count, setCount] = useState(1)

  // console.log("Component rendered")  
  // side effect 


  useEffect(function() {
    console.log("Effect ran")
    
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarwarData(data))

  }, [count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starwarData, null, 2)}</pre>
      
    
    </div>
  )
}
export default App