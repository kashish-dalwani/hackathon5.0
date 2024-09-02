import React from 'react';
import headimg from '../assests/logo.png';
import bgimg from '../assests/logbg.png';
import './Forget.css';
import {useNavigate} from "react-router-dom";

function Forget() {
  const Navigate = useNavigate();
  function gotoNewpass(){
    Navigate("/newpassword")
  }

    const bgStyle = {
        position: 'relative',
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }
  return (
    <div>
        <div style={bgStyle}></div>
        <div className='forgethead'>
        <img src={headimg} alt="logo" className="logoimg"></img>
        <p className="projname">Scholar's Hub</p>
        </div>
        <div className='forgetbody'><br></br><br></br><br></br>
        <label className='recovforg'>Recovery Email:</label>
        <input type='email' className='emailbox'></input><br></br><br></br>
        <button>Send Code</button><br></br><br></br><br></br>
        <label className='codeforg'>Recovery Code:</label>
        <input type='number' className='codebox'></input><br></br><br></br>
        <button onClick={gotoNewpass}>Submit</button>
        </div>
    </div>
  )
}

export default Forget