import NavBar from "../components/Navbar";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Account = ({ credentials}) => {


 

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setResponse] = useState("");
  const[signedIn,setSignIn] = useState(false);


 

  const sendInfo = () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    };

    fetch("/apiPost", requestOptions)
      .then(response => response.json())
      .then(data => setResponse(data.message));
  }



  return (
    <div>
      <NavBar signin = {signedIn}/>

      <div className="accountContainer">
        <div className="centerfocus">

          <h1 className="signInText">Welcome back</h1>

          <div className="emailContainer">
            <input id="signinEmail" className="signinEmail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="passwordContainer">
            <input id="signinPassword" className="signinPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="signInButtonContainer">
            <button id = "submite" className="signinButton" onClick={() => { var result = credentials(); if (result == true) sendInfo() }}>Sign in</button>
          </div>


          <div className="newAccount">
            <a href="http://localhost:3000/account/newAccount" class="createAccountButton">no account? </a>
            <a href="http://localhost:3000/account/resetPassword" className="forgotPasswordButton">forgot password?</a>
          </div>
          <div className="resultContainer">
            <div className="result">{res == "found" ? [navigate("/"),localStorage.setItem("user",true)]:res}</div>

          </div>
        </div>
      </div>
      

    </div>
  );
}
export default Account;
