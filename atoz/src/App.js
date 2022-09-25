import './styles/App.css';
import React, { useMemo, useState } from 'react';
import PostList from './Components/PostList';
import { PostForm } from './Components/PostForm';
import { MySelect } from './Components/UI/select/MySelect';
import { MyInput } from './Components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: "Javascript", body: 'Жуэс'},
    {id:2, title: "Python", body: 'Весёлого питонинга'},
    {id:3, title: "С", body: 'Си, синьор'},
    {id:4, title: "Swift", body: 'Яблоководы'}
  ])

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }
  const [selectedSort, setSelectedSort] = useState('')

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  const [searchQuery, setSearchQuery] = useState('')
  const sortedPosts = useMemo(() => {
    console.log('Сортировка')
    if(selectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }else{
      return posts;
    }
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  },[searchQuery, sortedPosts])
  return (
    <div className="App">
      <PostForm 
        create = {createPost} 
        posts={posts}
      />
      <div>
        <MyInput 
          placeholder='Поиск поста'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Cортировка по'
          options={[
            {value: 'title', name:'По названию'},
            {value: 'body', name:'По описанию'},
          ]}  
        />
      </div>
      {sortedAndSearchedPosts.length 
      ? <PostList 
          remove = {removePost} 
          posts = {sortedAndSearchedPosts} 
          title = "Список постов"
        />
      : <h1 style={{textAlign:'center'}}>Посты не найдены</h1>    }
      
    </div>
  );
}

export default App;
