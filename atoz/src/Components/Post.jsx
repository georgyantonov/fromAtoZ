import React, { useState } from 'react'
import '../styles/post.scss'
import MyButton from './UI/button/MyButton'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function Post(props) {
  const router = useNavigate()
  const [promo, setPromo] = useState('posts posts__post')
  useEffect(() =>{
    if(props.post.id % 10 == 0){
      setPromo('posts posts__post posts__post_promo')
    }
  })
  return (
    <div className='posts' id={props.post.id}>
      <div className={promo}>
        <div className="post__content">
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
            <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
      </div>
    </div>
  )
}
