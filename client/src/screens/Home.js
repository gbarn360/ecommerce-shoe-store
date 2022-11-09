import { useEffect } from "react";
import NavBar from "../components/Navbar";

function Home() {

  return (
    <div>
      <NavBar  />
      <div className="homepageContainer">
        <div className="logoContainer">
          <h1>SIKE</h1>
          <h3>WEARS</h3>
          <p className="slogan">We aren't just a shoe brand, we're a meme brand</p>
        </div>
        <div className="categoryContainer">

          <div onClick={() => { window.location.href = "http://localhost:3000/shop" }} className="category">
            shop mens
          </div>
          <div onClick={() => { window.location.href = "http://localhost:3000/shop" }} className="category">
            shop womens
          </div>
          <div onClick={() => { window.location.href = "http://localhost:3000/shop" }} className="category">
            shop all
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
