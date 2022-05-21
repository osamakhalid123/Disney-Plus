import "../Styles/MainPage.scss"

import New from "./New"
import Originals from "./Originals"
import React from 'react'
import Recommended from "./Recommended"
import Slide from "./Slide"
import Trinding from "./Trending"

function MainPage() {
  return (
    <div className="Main">
        <Slide/>
        <div className="cart">
            <div>
            <img src="/images/viewers-national.png" alt="ww"/>
            <video autoPlay loop playsInline muted>
            <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" /> 
            </video>
            </div>
            <div>
             <img src="/images/viewers-marvel.png" alt="ww"/>
             <video   src="/videos/1564676115-marvel.mp4" autoPlay loop playsInline muted />
             </div>
            <div>
                <img src="/images/viewers-pixar.png" alt="ww"/>
                <video  src="/videos/1564676714-pixar.mp4" autoPlay loop playsInline muted  />
              </div>
            <div>
            <img src="/images/viewers-starwars.png" alt="ww"/>
            <video  src="/videos/1608229455-star-wars.mp4"  autoPlay loop playsInline muted  />

            </div>
            <div>
            <img src="/images/viewers-disney.png" alt="ww"/>
            <video  src="/videos/1564674844-disney.mp4"   autoPlay loop playsInline muted />

            </div>
        </div>
        <Recommended/>
        <Originals/>
        <Trinding/>
        <New/>

    </div>
  )
}

export default MainPage