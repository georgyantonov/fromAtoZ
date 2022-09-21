import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {

  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Your comment');

  function inc(){
    setLikes(likes+1);
    console.log(likes);
  }

  function dec(){
    setLikes(likes-1);
    console.log(likes);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <button onClick={inc}>Инкремент</button>
      <button onClick={dec}>Декремент</button>
      <input 
      type = "text" 
      name = "comment" 
      value = {value} 
      onChange = { (e) => setValue(e.target.value)}
      onFocus = { (e) => e.target.value = null}
      />
    </div>
  );
}

export default App;
