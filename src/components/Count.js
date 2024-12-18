import React, { useState } from 'react'
import "./Count.css";


const Count = () => {

    const[count, setCount]= useState(0);
    const increment = ()=> {
        setCount(count + 1)
    };
    const decrement = ()=>{
        setCount(count -1)
    };

  return (
    <div className='count-container'>
        <div>
            <h1 style={{color: count> 0 ? 'blue' : count < 0 ? 'red' : 'black'}}>{count}</h1>
            <div className='buttons'>
                <button className='min' onClick={decrement}>-</button>
                <button className='plus' onClick={increment}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Count