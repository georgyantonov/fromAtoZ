import React from 'react'

export default function Post(props) {

  return (
    <div className='post' id={props.post.id}>
        <div className="post__content">
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
            <button >Удалить</button>
            </div>
    </div>
  )
}
