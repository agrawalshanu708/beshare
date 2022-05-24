import React from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./comps";
import {Login, Signup,Home} from "./screens/index"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/Signup" element ={<Signup/>}/>
      <Route path = "/" element ={<Home/>}/>
     
    </Routes>
    </div>
  );
}

export default App;
