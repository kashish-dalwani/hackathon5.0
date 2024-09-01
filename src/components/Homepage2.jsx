import React from "react";
import headimg from '../assests/logo.png';
import bodyimg from '../assests/mon1.jpeg';
import './Homepage2.css';
import { useNavigate } from "react-router-dom";

function Homepage2() {
  const Navigate = useNavigate();
  function gotoLogin(){
    Navigate("/login")
  }
  return (
    <div>
      <div className="headdivhp">
        <img src={headimg} alt="logo" className="logoimg"></img>
        <p className="projname">Scholar's Hub</p>
      </div>
      <div className="bodydivhp">
        <img src={bodyimg} alt="monument" className="monimg"></img>
        <div className="bodytxt">
        <h3 className="wel">Welcome To:</h3>
        <h1 className="titl">Paperless Scholarship Distribution System</h1>
        <h3 className="pm">For the Prime Minister's Special Scholarship Scheme (PMSSS)</h3>
        </div>
      <div className="acq">
        
        <label className="haveacc">Already have an account?</label>
        <button className="login" onClick={gotoLogin}>LogIn</button>
        <label className="orelse">Or else...</label>
        <button className="reg">Register</button>
      </div>
      </div>
      <div className="footdivhp">
        <p className="watermark">© 2035 by Scholar’s Hub. Powered and secured by Gov.in</p>
      </div>
    </div>
  )
}

export default Homepage2