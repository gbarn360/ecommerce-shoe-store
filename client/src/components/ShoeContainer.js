import React from 'react'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom';


export default function ShoeContainer({shoeInfo}) {
    const navigate = useNavigate();


  return (
    <div className="item" onClick={()=>navigate("/shop/shoe_one",{state:{shoeInfo}})}>
        <Dropdown info = {shoeInfo} />
    </div>
  )
}
