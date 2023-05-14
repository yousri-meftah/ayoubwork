import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Avatar from '../Assets/Avatar.png'

const Navbar = ({username}) => {
  return (
    
    <nav>
      <div className='user_header'>
        <img className='avatar' src={Avatar}/>
        <h3>{username}</h3>
      </div>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/AddPost" activeClassName="active">
          Add Post
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
    

  </nav>
 
  )
}

export default Navbar