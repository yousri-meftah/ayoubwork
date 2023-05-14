import React from 'react'
import Avatar from '../Assets/Avatar.png'
import './Comment.css'
import { BiWindowClose } from 'react-icons/bi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Comment = ({username,title,problem}) => {
    const [replying,setReply] = useState(false)
    const navigate = useNavigate();
    const handler=()=>{
      setReply(true)
      
    }
  return (
    
    <div className='comment' >
        <div className='comment-container'>
        
            <div className='comment-user ' >
                    <h3>{username}</h3>
                    <img src={Avatar} className='avatar2'/>    
            </div>

            <div onClick={()=>navigate('/PostPage')} className='post-problem'>
                    <h2>{title}</h2>
                    {problem}
            </div>

            <div className='comment-button'>
                <button onClick={handler}>Reply</button>
            </div>
        
        
            <div>

            </div>
    </div>
    {/* {replying && <div >
      <input type='text' placeholder='Add Your Reply'/>
      <button>Submit  </button>
      <BiWindowClose className='icon' onClick={()=>setReply(false)}/></div>
      } */}
    </div>
  )
}

export default Comment