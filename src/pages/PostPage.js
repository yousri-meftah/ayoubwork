import React from 'react'
import { useState } from 'react';
import Post2 from '../Components/Post2';
import Comments from '../Constants/comments';
import './PostPage.css'
import Comment from '../Components/Comment';
const PostPage = () => {
    const [blogPost, setBlogPost] = useState(null);
    const [comments, setComments] = useState([]);
  return (
   
    <div className='post-page'>
        <div className='post2_'>
            <h1>Promblem</h1>
        <Post2 username="Aziz" problem="sdvsdvdvffdvefdvvfd v"title="<ddvsqvdqvddqvqvavzv"/>
        </div>
        <div className='comments'>
            <h1>Comments:</h1>
            {
                Comments.map((element)=>(
                    <Comment username={element.username} title={element.title} problem={element.content}/>
                ))
            }
        </div>
       
    </div>
  )
}

export default PostPage