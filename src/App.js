import React from "react"
import { Route, Routes,useLocation } from "react-router-dom";
import "./App.css";
import { Navbar, PlainNav } from "./comps";
import {Login, Signup,Home,Profile} from "./screens/index"
function App() {
  const location = useLocation()
  return (
    <div className="App">
    {location['pathname'] === "/login" ? <PlainNav/> : <Navbar/>}
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
