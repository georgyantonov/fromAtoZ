import React from 'react'
import MyButton from './UI/button/MyButton'
import {MyInput} from './UI/input/MyInput'
import { useState } from 'react'

export const PostForm = ({posts, create}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
      })
    
      function addNewPost(e){
        e.preventDefault()
        const newPost = {
            ...post, id: posts.length !==0 ? 
                    posts[posts.length-1].id + 1 :
                    1
        }
        create(newPost)
        setPost({title:'', body: ''})
      }

  return (
    <form>
        <MyInput 
          type="text" 
          name="title" 
          value={post.title} 
          placeholder='Название поста' 
          onChange = {(e) => setPost({...post, title: e.target.value})}
        />
        <MyInput 
        type="text" 
        name="body" 
        value={post.body} 
        placeholder='Текст поста'
        onChange = {(e) => setPost({...post, body: e.target.value})} 
        /> 
        <MyButton onClick={(e)=>addNewPost(e)} >Создать пост</MyButton>
      </form>
  )
}
