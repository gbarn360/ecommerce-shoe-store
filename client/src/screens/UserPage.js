import React from 'react'
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";


export default function UserPage() {

    const navigate = useNavigate();

  return (
    <div>
        <NavBar />
        
        <button onClick={[navigate("/"),localStorage.setItem("user",false)]}>Sign out</button>
    </div>
  )
}
