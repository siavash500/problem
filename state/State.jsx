import React from 'react'
import {  useState } from 'react';

//this is the fucking simple state and use the useStaet


export default function App () {
  const [text , setText] = useState ('')
  const [Showtext , setShowText] = useState (true);
  
  const isAvailable = () => {
    setShowText(!Showtext)
  }
  return (
    <>
        <button onClick={isAvailable} >Hide\Show</button><br />


          {
            !Showtext &&

              <input type="text" placeholder='Type' 
                onChange={(e)=> setText(e.target.value)}/>

          }

        <h2>{text}</h2>
    </>
  )
}