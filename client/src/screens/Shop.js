import NavBar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import React, { useState,useEffect } from "react";





function Shop() {

  
  const[data,setData] = useState();
  useEffect(()=>{
   fetch("/api")
   .then((res)=>res.json())
   .then((data)=>setData(data))
  },[]);
  



  return (
    <div >
      <NavBar />
      <div className="shopContainer">

        <div className="sidebarContainer">
          <div className="sidebar">
            sidebar
          </div>
        </div>
        <div className="mainPanelContainer">
          <div className="panel">
            slideshow pics
          </div>


          <div className="row">
            <div className="item" href="mens">
              <p className="mens" >MENS</p>
            </div>
            <div className="item">
              <Dropdown />
            </div>
            <div className="item">
              <Dropdown />
            </div>
          </div>

          <div className="row">
            <div className="item">
              <Dropdown />
            </div>
            <div className="item">
              <Dropdown />
            </div>
            <div className="item">
              <Dropdown />
            </div>
          </div>

          <div className="row">
            <div className="item">
              <p className="mens">WOM</p>

            </div>
            <div className="item">
              <Dropdown />
            </div>
            <div className="item">
              <Dropdown />
            </div>
          </div>
          <div className="row">
            <div className="item">
              <Dropdown />
            </div>
            <div className="item">
              <Dropdown />
            </div>
            <div className="item">
              <Dropdown />
            </div>
          </div>


        </div>




      </div>

    </div>
  );
}

export default Shop;
