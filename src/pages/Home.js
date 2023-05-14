import React, { useEffect } from 'react'
import './Home.css'
import Post from '../Components/Post'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import codingProblems from '../Constants/codingProblems'
const Home = () => {
  
  return (
    <div className='home'>
      <Navbar/>
      <div className='posts'>
       {
        codingProblems.map((element)=>(
          <Post username={element.username}title={element.title} problem={element.content}/>
        ))
       }
       </div> 
      
      
    </div>
  )
}

export default Home