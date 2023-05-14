import React from 'react'
import './Post.css'


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BiWindowClose} from "react-icons/bi"
import Avatar from '../Assets/Avatar.png'
const Post = ({username,comments,problem,title}) => {
  const [replying,setReply] = useState(false)
  const handler=()=>{
    setReply(true)
    
  }
  const navigate = useNavigate();
  
  return (
    <div className='post'>
    <div className='post-container'>
      
        <div className='post_poster'>
                <h3>{username}</h3>
              <img src={Avatar} className='avatar'/>  
                
        </div>
          <div onClick={()=>navigate('/PostPage')} className='post-problem'>
            <h2>{title}</h2>
                    {problem}
          </div>
          <div className='button'>
                  <button onClick={handler}>Reply</button>
          </div>
       
       
        <div className='reply_field'>

        </div>
    </div>
    {replying && <div className='reply_field'>
      <input type='text' placeholder='Add Your Reply'/>
      <button>Submit  </button>
      <BiWindowClose className='icon' onClick={()=>setReply(false)}/></div>
      }
    </div>
  )
}

export default Post