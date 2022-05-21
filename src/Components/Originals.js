import "../Styles/Viewer.scss"

import Data from "../jsnon/Data.json"
import { Link } from "react-router-dom"
import React from 'react'

function Originals() {
  return (
    <>
    <h1>Originals</h1>
    <div className="Viewer">
    {    
    Data.map((movie) => {
           if(movie.type==="original"){
            return (
              <Link to={`/${movie.id}`} >

        <div key={movie.id} className="Viewer_img">
        <img src={movie.cardImg} alt={movie.titleImg}  />
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

export default Originals