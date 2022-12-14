import Slide from "./Components/Slide";
import "./App.css";
import React from "react";
import { useEffect } from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {
   useEffect(()=>{
    let url="https://slides-app-220822.herokuapp.com/slides"
    fetch(url)
    .then(res=>res.json())
     .then((resp)=>{
      console.log(resp)
     })
     .catch(err=>{
      console.log(err);
     })
  },[])
  return (
    <div className="App">
       
      <h1 data-cy="header">Slides</h1>
      <h3>Intro to React</h3>
      <h3>ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components</h3>
      <Slide />
      <button  data-cy="prev" >Prev</button>
      <button data-cy="next" >Next</button>
    </div>
  );
}
