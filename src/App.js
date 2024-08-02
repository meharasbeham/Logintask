import React from "react";
import { Routes,Route,Link } from "react-router-dom";
import "./App.css";
import login from "./pages/login";
import forgot from "./pages/forgot";
import Sigin from "./pages/sigin";
import home from "./pages/home";

function APP(){
  
  return(
  <div className="APP">
    
        <div>
      <Link to={"/login"}></Link>
      <Link to={"/forgot"}></Link>
      <Link to={"/"}></Link>
      <Link to={"/home"}></Link>
    </div>
    <Routes>
    <Route path="/" Component={Sigin}/>
      <Route path="/login" Component={login}/>
      <Route path="/forgot" Component={forgot}/>
      <Route path="/home" Component={home}/>
    </Routes>


</div>
  );
}
export default APP;