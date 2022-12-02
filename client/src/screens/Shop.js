import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import ShoeContainer from "../components/ShoeContainer";
import React, { useState,useEffect} from "react";
import {useLocation} from "react-router-dom";

function Shop() {
  const location = useLocation();
  const[data,setData] = useState([]);
  async function getShoes(){
  
    let getInfo =  await fetch("/shop/shoes")
    let result = getInfo.json();
    
     return result;
  }

  useEffect(()=>{
    getShoes().then(result =>setData(result))
  },[]);

  return (
    <div>
      <NavBar />

      <div className="shopContainer">

        <div className="sidebarContainer">
          <div className="sidebar">
            Sidebar
          </div>
        </div>

        <div className="mainPanelContainer">
          <div className="panel">
            Image Header / Shoe Images
          </div>
          <div className="row">
            {!data ? " " :data.map((item)=>(<ShoeContainer shoeInfo={item}/>))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Shop;