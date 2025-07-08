import { useState } from 'react'
import React from 'react'

export default function State() {
    const [count , setCount ] =useState (0)
   
  return (
    <div>
        <p>number: {count}</p>
        <button onClick={()=> setCount(count +1)}>+</button>
        <br />
        <button onClick={()=> setCount(count -1)} >-</button>
    </div>
  )
}
