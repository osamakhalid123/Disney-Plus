import "../Styles/NavBar.scss"

import React,{useEffect} from 'react'
import { UserLogIn, UserLogOut, selectUserEmail, selectUserName, selectUserPhoto } from "../Redux/Slice"
import { auth, provider } from "./firebase.js"
import { signInWithPopup, signOut } from "firebase/auth"
import {useDispatch, useSelector}from "react-redux"

import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function NavBar() {


const dispatch=useDispatch();
const navigate = useNavigate();
const username=useSelector(selectUserName)
const useremail=useSelector(selectUserEmail)
const userphoto=useSelector(selectUserPhoto)

useEffect(() => {
  auth.onAuthStateChanged(async (user)=>{
  
    if(user){
      SetUser(user)
      navigate("/Home")
    }
  })
    
}, [username]);
  
const SetUser=(user)=>{
 dispatch(UserLogIn({
  UserName:user.displayName,
  UserEmail:user.email,
  UserPhoto:user.photoURL,
 }
 ))
}

  const handleAuth = ()=>{
   
signInWithPopup(auth, provider).then((result)=>{
  SetUser(result.user)
})
  }

  const HanadleSignOut=()=>{
    signOut(auth).then((result)=>{
      dispatch(UserLogOut())
      navigate("/")
    })
  }
  
  return (
    <div className='container'>

        <Link to="/Home"> 
        <img  src='/images/logo.svg' alt='Logo'/>
        </Link> 
        {
          username ? 
          <>
        <div className="leftsection">
          <ul>
          <li>
          <Link to="/Home"> 
          <img src="/images/home-icon.svg" alt="Home"/> 
          <span>Home</span>
          </Link> 

          </li>

          <li> 
          <a href="www.disney.com"> 
          <img src="/images/search-icon.svg" alt="Search"/> 
          <span>Search</span>
          </a> 
          </li>
          <li> 
          <a href="www.disney.com">  
          <img src="/images/original-icon.svg" alt="Originals"/> 
          <span>Originals</span>
          </a> 

          </li>
          <li> 
          <a href="www.disney.com"> 
          <img src="images/movie-icon.svg" alt="Movies"/> 
          <span>Movies</span>
          </a>

          </li>
          <li> 
          <a href="www.disney.com"> 
          <img src="images/series-icon.svg" alt="Series"/>  
          <span>Series</span>
          </a> 

          </li>
        </ul>
        </div>
          <div className="rightSection"> 
            <img className="userphoto" src={userphoto} alt={username}/>
            <span onClick={HanadleSignOut} className="logOut"> Logout </span>
           </div>
          </>
        : 
        <div className="Log">
          <button onClick={handleAuth} >Login</button>
        </div>
        }
        
    </div>
  )
}

export default NavBar