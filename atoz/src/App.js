import './styles/App.css';
import React from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import Post from './Components/Post';

function App() {

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <Post post = {{id:1, title: "Javascript", body: 'Жуэс'}}/>
      <Post post = {{id:2, title: "Python", body: 'Ну не на питоне же'}}/>
      <Post post = {{id:3, title: "Assembly", body: 'О боги'}}/>
    </div>
  );
}

export default App;
