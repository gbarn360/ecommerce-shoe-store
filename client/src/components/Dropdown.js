import { BsBagDash } from "react-icons/bs"
//npm install react-icons --save

function Dropdown() {
  return (
    <div className="panelRise">
         <p className="name">Name</p>
         <p className="price">Price</p>
         <p className="sizes">Sizes: 9 10 11 12</p>
         <div className="btnContainer">
        <button className="addToCartBtn"><BsBagDash /></button>
        </div>
    </div>  
  );
}


export default Dropdown;
