import React, { useState } from 'react'
import './App.css'
function App() {
 const [count , setCount] = useState(0)
 const [name , setName] = useState("Session 10")

  function increment (){
    setCount(count+1)
    setName("Increment")
  }

  const decrement = ()=>{
    setCount(count-1)
    setName("Decrement")
  }
  return (
    <div className='container'>
      This is Session 10. We are learing React JS.

      <div className='show'>
        The value of the Counter is : {count} with {name}
      </div>
      <div className='btns'>
          <button onClick={increment} className='btn'>+</button>
          <button onClick={decrement} className='btn'>-</button>
      </div>
    </div>
  )
}

export default App