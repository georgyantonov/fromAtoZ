import React from 'react'
import Post from './Post'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { memo } from 'react';

function PostList({posts, title, remove}) {
  if(!posts.length){
    return(
      <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
    )
  }else{
  return (
    <div className="postlist">
              <h1>{title}</h1>
              <TransitionGroup>
                {posts.map( (post, index) =>
                <CSSTransition
                key={post.id}

                timeout={500}
                classNames="post"
                > 
                <Post remove = {remove} number={index + 1} post={post} key={post.id} />
                </CSSTransition> )}
              </TransitionGroup>
    
    </div>
  )}
}

function isEqual(prevProps, nextProps){
  const { posts : prevPost } = prevProps;
  const { posts : nextPost } = nextProps
  console.log(prevPost);
  console.log(nextPost);
  if ( prevPost.length !== nextPost.length  ){
    return false;
  }
  return true;
}
export default memo(PostList, isEqual)