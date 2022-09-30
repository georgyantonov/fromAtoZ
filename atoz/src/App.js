import './styles/App.css';
import React, {  useEffect, useState } from 'react';
import axios from 'axios'
import PostList from './Components/PostList';
import { PostForm } from './Components/PostForm';
import { PostFilter } from './Components/PostFilter';
import { MyModal } from './Components/UI/MyModal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import { Loader } from './Components/UI/loader/Loader';
import Memoised from './Components/Memoised';

function App() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort:'', query:''})
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts(){
    setIsPostsLoading(true)
    setTimeout(async() => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoading(false)
    }, 10000)

  }

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Memoised 
        fetchPosts={fetchPosts}
        setModal={setModal}
      />
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
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
        : <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = "Список постов"
      />
      }
            
    </div>
  );
}

export default App;
