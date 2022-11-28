import React from 'react'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom';
import shoe from "../images/shoe.png";


export default function ShoeContainer({ shoeInfo }) {
  const navigate = useNavigate();


  return (
    <div className="item" onClick={() => navigate("/shop/shoe_one", { state: { shoeInfo } })}>
      <Dropdown info={shoeInfo} />

      <img src={shoeInfo.image} />
    </div>
  )
}
