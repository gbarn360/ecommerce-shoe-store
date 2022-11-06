
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

const NewAccount = ({ credentials }) => {

    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [res,setResponse] = useState();
    const sendInfo = ()=>{

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email:email,password:password })
      };
      
        fetch("/apiNewAccount",requestOptions)
        .then(response => response.json())
        .then(data => setResponse(data.message));
      }

    return (
        <div>

            <NavBar />
        <div className="accountContainer">
            <div className="centerfocus">

            <h1 className="signInText">Let's create an account</h1>

                    <div className="emailContainer" >
                        <input className="signinEmail" id="signinEmail" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="passwordContainer">
                        <input className="signinPassword" id="signinPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <div className="signInButtonContainer">
                        <button className="signinButton" onClick={()=>{ credentials();sendInfo()}}>Create</button>
                    </div>
                    <div className = "resultContainer">
                    <p className="result">{res == "Account created successfully" ?  navigate("/account"): res}</p>
                </div>
                </div>

                
                </div>



            </div>
    );
}

export default NewAccount;
