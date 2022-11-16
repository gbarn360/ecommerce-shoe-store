import React from 'react'
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useState } from 'react';

export default function UserPage() {

    const navigate = useNavigate();

    const[email,setEmail] = useState()
    const[brand,setBrand] = useState()
    const[name,setName] = useState()
    const[size,setSize] = useState()
    const[image,setImage] = useState()
    const[price,setPrice] = useState()
    const[quantity,setQuantity] = useState()
    const[color,setColor] = useState()
    const[response,setResponse] = useState()

    const sendInfo = ()=>{ 
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerEmail:email,brandName:brand,shoeName:name,shoeSize:size,shoePicURL:image,price:price,quantity:quantity,color:color })
      };
  
      fetch("/api/addShoe", requestOptions)
        .then(response => response.json())
        .then(data => setResponse(data.message));
    }
  
    

  return (
    <div>
        <NavBar />

        
        {/* <button className='addShoe' onClick={[navigate("/"),localStorage.setItem("user",false)]}>Sign out</button> */}

        <div className = "shoeInfo">
        <input type="text" placeholder='providerEmail' onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='brand name'onChange={(e) => setBrand(e.target.value)} />
        <input type="text" placeholder='shoe name' onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='shoe size' onChange={(e) => setSize(e.target.value)}/>
        <input type="text" placeholder='shoe image' onChange={(e) => setImage(e.target.value)}/>
        <input type="text" placeholder='shoe price' onChange={(e) => setPrice(e.target.value)}/>
        <input type="text" placeholder='quantity' onChange={(e) => setQuantity(e.target.value)}/>
        <input type="text" placeholder='color' onChange={(e) => setColor(e.target.value)}/>

        </div>

        <button onClick={()=>sendInfo()}>Submit Shoe </button>

        {response}

    </div>
  )
}
