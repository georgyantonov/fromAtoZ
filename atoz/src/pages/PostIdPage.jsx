import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useFetching } from './../hooks/useFetching';
import PostService from '../API/PostService';
import { useState } from 'react';
import { Loader } from '../Components/UI/loader/Loader';

export const PostIdPage = () => {
    const params = useParams()
    const[post, setPost] = useState({})
    const[comments, setComments] = useState([])
    const[fetchPostById, isLoading, error] = useFetching(async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const[fetchСomments, isCommentsLoading, commentsError] = useFetching(async(id) => {
        const response = await PostService.getComments(id)
        setComments(response.data)
    })
    useEffect(() => {
      fetchPostById(params.id)
      fetchСomments(params.id)
    },[])
    
    return (
        <div>
            <h1>Страница поста {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id},{post.title}</div>
            }
            <h2>Комментарии</h2>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map(comm => 
                        <div key={comm.id}>
                            <h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
