import { BsBagDash } from "react-icons/bs"

function NavBar({ home }) {




  return (
    <div className="NavContainer">
      <div className="navElements">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/shop">Shop</a>

        {localStorage.getItem("user") == "true" ? <a href = "http://localhost:3000/UserPage">Account</a> : <a href = "http://localhost:3000/Account">Account</a>}
      </div>
      <div className="bagContainer">
        <a href="http://localhost:3000/shoppingCart" className="bag"><BsBagDash /></a>
      </div>


    </div>
  );
}


export default NavBar;
