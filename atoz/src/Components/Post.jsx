import React from 'react'
import '../styles/post.css'
import MyButton from './UI/button/MyButton'


export default function Post(props) {
  return (
    <div className='post' id={props.post.id}>
        <div className="post__content">
            <strong>{props.number}. {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
    </div>
  )
}
