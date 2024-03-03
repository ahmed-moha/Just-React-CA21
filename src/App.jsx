import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let name = "Hellow CA218"
  let age = 20
  let likes=40;
  let isFemale=true;
  const studentinfo={name:"Ali",age:40}
  return (
    <>
      <h1 className='myH1'>{name}</h1>
      <h2>{age}</h2>
      <h3>{likes} Liked This Post</h3>
      <h4>{isFemale}</h4>
      <h1>{9+3}</h1>
      <h2>{Math.random()*100}</h2>
      {/* <h5>{studentinfo}</h5> */}
    </>
  );
}

export default App
