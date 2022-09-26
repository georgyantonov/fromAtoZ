import './styles/App.css';
import React, { useMemo, useState } from 'react';
import PostList from './Components/PostList';
import { PostForm } from './Components/PostForm';
import { MySelect } from './Components/UI/select/MySelect';
import { MyInput } from './Components/UI/input/MyInput';
import { PostFilter } from './Components/PostFilter';
import { MyModal } from './Components/UI/MyModal/MyModal';
import MyButton from './Components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: "Javascript", body: 'Жуэс'},
    {id:2, title: "Python", body: 'Весёлого питонинга'},
    {id:3, title: "С", body: 'Си, синьор'},
    {id:4, title: "Swift", body: 'Яблоководы'}
  ])

  const [modal, setModal] = useState(false)

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  const [filter, setFilter] = useState({sort:'', query:''})
  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    console.log('Сортировка')
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }else{
      return posts;
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query, sortedPosts])
  return (
    <div className="App">
      <MyButton
        style={{marginTop: 30}}
        onClick={() => setModal(true)}
      >
        Создать пост
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm 
          create = {createPost} 
          posts={posts}
        />
      </MyModal>
      <PostFilter 
      filter={filter}
      setFilter={setFilter}
      />
      <PostList 
          remove = {removePost} 
          posts = {sortedAndSearchedPosts} 
          title = "Список постов"
        />      
    </div>
  );
}

export default App;
