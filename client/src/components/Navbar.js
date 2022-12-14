import { BsBagDash } from "react-icons/bs"
import { Roles } from "../constants/roles";

function NavBar({ home }) {

  const signedInPage = () => {
    if(localStorage.getItem(Roles.User) == "true") {
      return <a href = "/UserPage">Account</a>;
    } else if(localStorage.getItem(Roles.Manufacturer) == "true") {
      return <a href = "/ManufacturerPage">Account</a>
    } else if(localStorage.getItem(Roles.Admin) == "true") {
      return <a href = "/AdminPage">Account</a>
    } else {
      return <a href = "/Account">Account</a>
    }
  }


  return (
    <div className="NavContainer">
      <div className="navElements">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>

        {/*localStorage.getItem("user") == "true" ? <a href = "/UserPage">Account</a> : <a href = "/Account">Account</a>*/}
        {signedInPage()}
      </div>
      <div className="bagContainer">
        <a href="/shoppingCart" className="bag"><BsBagDash /></a>
      </div>


    </div>
  );
}


export default NavBar;
