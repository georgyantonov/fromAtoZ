import React from 'react'
import { useState } from 'react'


export default function Counter() {

    const [count, setCount] = useState(0)
    function inc(){
        setCount(count+1);
        console.log(count);
      }
    
      function dec(){
        setCount(count-1);
        console.log(count);
      }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={inc}>Инкремент</button>
            <button onClick={dec}>Декремент</button>
        </div>
    )
}

