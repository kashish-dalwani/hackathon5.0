import React, {useState} from 'react';
import bgimg from '../assests/logbg.png';
import headimg from '../assests/logo.png';
import './Register.css';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import { useNavigate } from "react-router-dom";



function Register() {
  const Navigate = useNavigate();
    function gotoLogin(){
        Navigate("/login")
      }
  const bgStyle = {
    position: 'relative',
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
}
const [password, setPassword] = useState("");
const [confpassword, setConfpassword] = useState("");
    const [type, setType] = useState('password');
    const [type1, setType1] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [icon1, setIcon1] = useState(eyeOff);

    const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
 const handleToggle1 = () => {
  if (type1==='password'){
     setIcon1(eye);
     setType1('text')
  } else {
     setIcon1(eyeOff)
     setType1('password')
  }
}
  return (
    <div>
      <div style={bgStyle}></div>
      <div className='reghead'>
      <img src={headimg} alt="logo" className="logoimg"></img>
      <p className="projname">Scholar's Hub</p>
      </div>
      <div className='regbody'>
      <h1>Create a new Account</h1>
      <p>Already Registered?<a style={{marginLeft: "10px"}} href='/login'>Login</a></p>
      <label className='namereg'>Name:</label><br></br>
      <input type='text' className='namebox'></input>
      <label className='emailreg'>Email:</label><br></br>
      <input type='email' className='emailbox'></input>
      <label className='passreg'>Password:</label><br></br>
      <input type={type} name='password' className='passbox' value={password} onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"></input>
                  <span className="flex justify-around items-center" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={25} style={{marginLeft: "10px"}}/></span>
      <label className='confreg'>Confirm Password:</label><br></br>
      <input type={type1} name='confpassword' className='confbox' value={confpassword} onChange={(e) => setConfpassword(e.target.value)}
                  autoComplete="current-password"></input>
                  <span className="flex justify-around items-center" onClick={handleToggle1}>
                  <Icon className="absolute mr-10" icon={icon1} size={25} style={{marginLeft: "10px"}}/></span>
      <label className='dobreg'>Date of Birth:</label><br></br>
      <input type='date' className='dobbox'></input><br></br>
      <button onClick={gotoLogin}>Register</button>
      </div>
      
    </div>
  )
}

export default Register