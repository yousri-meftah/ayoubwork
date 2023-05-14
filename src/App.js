import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Addpost from './pages/Addpost'
import Navbar from './Components/Navbar'
import './App.css'
import PostPage from './pages/PostPage'
const App = () => {
  return (
    <div className='app'>
       
     
      <BrowserRouter>
     
     
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/PostPage'element={<PostPage/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/SignUp'element={<SignUp/>}/>
        <Route path='/AddPost'element={<Addpost/>}/>
        <Route path='/AddPost'element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App