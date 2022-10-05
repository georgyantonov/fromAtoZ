import '../styles/App.css';
import React, {  useEffect, useRef, useState } from 'react';
import PostList from '../Components/PostList';
import { PostForm } from '../Components/PostForm';
import { PostFilter } from '../Components/PostFilter';
import { MyModal } from '../Components/UI/MyModal/MyModal';
import MyButton from '../Components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import { Loader } from '../Components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../utils/pages'
import { Pagination } from '../Components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import { MySelect } from '../Components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort:'', query:''})
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError ] = useFetching(async(limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const changePage = (page) => {
    console.log(page)
    setPage(page)
  }

  useObserver(lastElement, isPostsLoading, page < totalPages, ()=> {
    setPage(page + 1)
  })
  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton
      onClick={fetchPosts}
      >Получить посты</MyButton>
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
      <MySelect 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Количество постов"
        options={[
          {value:10, name:'10'},
          {value:25, name:'25'},
          {value:50, name:'50'},
          {value:-1, name:'Все'},
        ]}
      />
      {postError && 
        <h1>Произошла ошибка {postError}</h1>
      }
      {isPostsLoading &&
         <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
      }
        <PostList 
          remove = {removePost} 
          posts = {sortedAndSearchedPosts} 
          title = "Список постов"
        />
        <div ref={lastElement}></div>
      <Pagination 
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
