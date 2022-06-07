import React from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./comps";
import {Login, Signup,Home,Profile} from "./screens/index"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/" element ={<Signup/>}/>
      <Route path = "/home" element ={<Home/>}/>
      <Route path = "/profile/:userId" element = {<Profile/>}/>
     
    </Routes>
    </div>
  );
}

export default App;
