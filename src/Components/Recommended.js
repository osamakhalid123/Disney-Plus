import "../Styles/Viewer.scss"

import Data from "../jsnon/Data.json"
import { Link } from "react-router-dom"
import React from 'react'

function Recommended() {
  return (
    <>

    <h1>Recommended For You</h1>
    <div className="Viewer">
    {    
    Data.map((movie) => {
      if(movie.type==="recommend"){
        return (
              <Link to={`/${movie.id}`} >
        <div key={movie.id} className="Viewer_img">
        <img src={movie.cardImg} alt="sfad"  />
        </div>
                </Link>
        )  
    } 
        
        
        
        
    })
   }
        </div>

        </>
  )
}

export default Recommended