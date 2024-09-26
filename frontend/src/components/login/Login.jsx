import { useState } from "react";
import "./login.css";
import { assets } from "../../assets/assets";

const Login = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState("Sign up");

  return (
    <div className='login'>
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currentState !== "Login"
          ?<input type="text" placeholder="Your Name" required/>
          :""
          }
          <input type="email" placeholder="Your Email" required/>
          <input type="password" placeholder="Your Password" required/>
          <button>{currentState === "Sign up"?"Create Accont":"Login"}</button>

          <div className="login-condition">
            <input type="checkbox" required/>
            <p>By continuing? i agree to the terms of use & privacy policy.</p>
          </div>
          {
            currentState === "Sign up"
            ?<p>Already have an account? <span onClick={()=>{setCurrentState("Login")}}>Login here</span></p>
            :<p>Create a new account? <span onClick={()=>{setCurrentState("Sign up")}}>Click here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login
