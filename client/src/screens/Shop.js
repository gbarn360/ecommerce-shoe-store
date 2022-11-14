import NavBar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import React, { useState,useEffect } from "react";


function Shop() {

  
  const[data,setData] = useState();


  async function getShoes(){
  
    let getInfo =  await fetch("/shop/shoes")
    let result = getInfo.json();
    
     return result;
  }

  useEffect(()=>{
    getShoes().then(result =>setData(result))
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
              {!data ? " " :data[0].name}
            </div>
            <div className="item">
              <Dropdown />
              {!data ? " " :data[1].name}
            </div>
            
          </div>

        </div>




      </div>

    </div>
  );
}

export default Shop;
