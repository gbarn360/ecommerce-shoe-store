import NavBar from "../components/Navbar";
import shoes1 from "../images/blackshoes.png"
import CartItems from "./CartItems";

// const CartItemProps = {
//   productName: String,
//   imageURL: String,
//   productDelete: String,
//   productInfo: String,
//   productPrice: Number,
// }

function Home() {
  return (
    <div className="cart-page-container">
      <NavBar  />
      <div className="cart-container">
        <div className="cart-title">
          Cart
        </div>
        <div className="cart-tab">

        </div>
        <div className="cart-info">

          <CartItems imageURL={shoes1} productName="SIKE" productColor="White" productSize="Men 10 / Female 11.5" productPrice="124.99"/>
          <CartItems imageURL={shoes1} productName="WEARS 2.0" productColor="White" productSize="Men 10 / Female 11.5" productPrice="179.99"/>
        </div>
          <h3 className="totalPrice">Total Price: $304.98</h3>
          <button className="placeOrderBtn">Place Order</button>
      </div>
   </div>
  );
}

export default Home;
