import './styles/App.css';
import React, { useState } from 'react';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import {MyInput} from './Components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: "Javascript", body: 'Жуэс'},
    {id:2, title: "Python", body: 'Весёлого питонинга'},
    {id:3, title: "С", body: 'Си, синьор'},
    {id:4, title: "Swift", body: 'Яблоководы'}
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  function addNewPost(e){
    e.preventDefault()
    const newPost = {
      id: posts[posts.length-1].id + 1,
      title,
      body
    }
    setPosts([...posts, newPost])
    console.log(posts)
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          type="text" 
          name="title" 
          value={title} 
          placeholder='Название поста' 
          onChange = {(e) => setTitle(e.target.value)}
        />
        <MyInput 
        type="text" 
        name="body" 
        value={body} 
        placeholder='Текст поста'
        onChange = {(e) => setBody(e.target.value)} 
        /> 
        <MyButton onClick={(e)=>addNewPost(e)} >Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title = "Список постов"/>
    </div>
  );
}

export default App;
