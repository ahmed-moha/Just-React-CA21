import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./Navbar"
import Home from './Home'
function App() {
  // const isAdmin = false;
  // const isLoggedIn = true;
  // const title = "Welcome React"
  // const person={name:"Ahmed",age:30, isMale:true}
  // const numbers=[1,2,3,4,5]

  // const squentialNo=numbers.map((item)=><li>{item}</li>)

  // if (isAdmin) {
  //   return (
  //     <div className="app">

  //       <h1>Welcome Admin</h1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="app">
  //       <h1>You're not allowed</h1>
  //     </div>
  //   );
  // }


  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Home message="Welcome CA218" age={40} />

      </div>
    </div>
  );
}

export default App
