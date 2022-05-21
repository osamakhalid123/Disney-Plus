import "../Styles/Viewer.scss"

import Data from "../jsnon/Data.json"
import { Link } from "react-router-dom"
import React from 'react'

function Trinding() {
  return (
    <>
    <h1>Trinding</h1>
    <div className="Viewer">
    {    
    Data.map((movie) => {
           if(movie.type==="trending"){
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

export default Trinding