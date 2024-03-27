import React from "react";
import { Routes,Route,Link } from "react-router-dom";
import "./App.css";
import login from "./pages/login";
import forgot from "./pages/forgot";
import create from "./pages/create";


function APP(){
  return(
  <div className="APP">
    
        <div>
      <Link to={"/"}></Link>
      <Link to={"/forgot"}></Link>
      <Link to={"/create"}></Link>
    </div>
    <Routes>
      <Route path="/" Component={login}/>
      <Route path="/forgot"Component={forgot}/>
      <Route path="/create" Component={create}/>
    </Routes>


</div>
  );
}
export default APP;