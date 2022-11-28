import { BsBagDash } from "react-icons/bs"
//npm install react-icons --save

function Dropdown({ info }) {
  return (
    <div className="panelRise">
      <p className="name">{info.name}</p>
      <p className="price">${info.price}.00</p>
      <p className="sizes">Sizes:10 11 12</p>
      <div className="btnContainer">
        <button className="addToCartBtn"><BsBagDash /></button>
      </div>
    </div>
  );
}


export default Dropdown;
