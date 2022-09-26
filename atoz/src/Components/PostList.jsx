import React from 'react'
import Post from './Post'

export default function PostList({posts, title, remove}) {
  if(!posts.length){
    return(
      <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
    )
  }else{
  return (
    <div className="postlist">
              <h1>{title}</h1>
                {posts.map( (post, index) => 
            <Post remove = {remove} number={index + 1} post={post} key={post.id} />
        )}
    
    </div>
  )}
}
