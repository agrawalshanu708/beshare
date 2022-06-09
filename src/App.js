import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar, PlainNav } from "./comps";
import { ToastContainer } from "react-toastify";
import { Login, Signup, Home, Profile, Error404 } from "./screens/index";
function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <div>
        {pathname === "/login" || pathname === "/" ? <PlainNav /> : <Navbar />}
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path = "*" element = {<Error404/>}/>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
