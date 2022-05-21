
import Data from "../jsnon/Data.json"
import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function DetailsPage() {
    const {Dataid} = useParams();
    const thisMovie = Data.find(movie => {return movie.id == Dataid} )
    return (
      
      <Container  image={thisMovie.backgroundImg} >
        <TitleImage src={thisMovie.titleImg} alt="ads"/>
        <Wraper>
        <Play> 
         <img src="images/play-icon-black.png" alt="" />
          <p>Play</p>
          </Play>
          <Tralier> 
         <img src="images/play-icon-white.png" alt="" />
          <p>Tralier</p>
          </Tralier>
          <AddIcon>+</AddIcon>
          <GrouIcon>
          <img src="images/group-icon.png" alt="" />
          </GrouIcon>
          </Wraper>
          <TextWrap>
          <SubTitel>
            {thisMovie.subTitle}
          </SubTitel>
          <Description>
            {thisMovie.description}
          </Description>
          </TextWrap>
    </Container>
)
}
const Container = styled.div`
background-image:url(${props => props.image}) ;
background-position:center center;
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 100%;
        min-height: 100%;
        z-index: -3;
        position:absolute ;
`;

const TitleImage=styled.img`
  position: relative;
    top: 3rem;
    left: 4rem;
    width: 28rem;
    height: 15rem;
    opacity:1 ;
    margin:20px ;
    @media only screen and (max-width: 785px) {
     max-width:50vh ;
    max-height: 10rem;
         
      }
`
const Wraper=styled.div`
display:flex ;
align-items:center ;
position:relative ;
flex-direction:row ;
height:80px ;
width:70px ;

`
const Play=styled.div`
position: absolute;
  display:flex ;
 justify-content:center ;
  align-items: center;
    background-color: white;
    width: 80px;
    height: 50px;
    top: 2rem;
    left: 5rem;
    border-radius: 10px;
    margin:10px ;
    cursor: pointer;
    @media only screen and (max-width: 785px) {
      top: 3rem;

         
      }

`

const Tralier=styled.div`
position: absolute;

display:flex ;
 justify-content:center ;
  align-items: center;
    background-color: transparent;
    color: white ;
    width: 110px;
    height: 50px;
    top: 2rem;
    left: 11rem;
    border-radius: 10px;
    font-size:20px ;
    margin:10px ;
    border:1px solid white ;
    cursor: pointer;
    &:hover{
      background-color:grey ;
    }
    @media only screen and (max-width: 785px) {
      top: 3rem;

         
      }

`
const AddIcon=styled.span`
position:absolute ;
color:white ;
display:flex ;
 justify-content:center ;
  align-items: center;
font-size:30px ;
width: 50px;
    height: 50px;
  
    background-color: transparent;
border-radius:50% ;
z-index:5 ;
font-weight:bolder ;
    top: 2.7rem;
    left: 19.5rem;
    padding:10px ;
    border:1px solid white ;
    cursor: pointer;
    &:hover{
      background-color:grey ;
    }
    @media only screen and (max-width: 785px) {
      top: 3.5rem;

         
      }
`
const GrouIcon=styled.div`
position: absolute;
  display:flex ;
 justify-content:center ;
  align-items: center;
    background-color: transparent;
    color: white ;
    width: 50px;
    height: 50px;
    top: 2rem;
    left: 23rem;
    border-radius: 50%;
    font-size:20px ;
    margin:10px ;
    border:1px solid white ;
    cursor: pointer;
    &:hover{
      background-color:grey ;
    }
    @media only screen and (max-width: 785px) {
      top: 3rem;

         
      }

`

const TextWrap=styled.div`
position:relative ;
display:flex ;
flex-direction:column ;
align-items:center;
`
const SubTitel=styled.p`
  color:white ;
  position: absolute;
  display:flex ;
  align-items: center;
    top: 2rem;
    left: 5.6rem;
    font-size:1.3rem ;
    margin:1rem 0 ;
    @media only screen and (max-width: 785px) {
      top: 2rem;
      max-width:80vw ;
      max-height:120px ;
         
      }
   
`
const Description=styled.p`
color: white;
    position: absolute;
    top: 5.1rem;
    left: 5.3rem;
    max-width: 60vw;
    line-height: 1.5;
    max-height: auto;
    font-size: 1.3rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    @media only screen and (max-width: 785px) {
      top: 7rem;
    left: 5.6rem;
    max-width:80vw ;
    line-height:1.5 ;
    max-height:auto ;
    font-size:1.3rem ;
         
               }
          
`

export default DetailsPage