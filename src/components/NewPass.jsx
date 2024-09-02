import React,{useState} from 'react';
import './NewPass.css';
import headimg from '../assests/logo.png';
import bgimg from '../assests/logbg.png';
import {useNavigate} from "react-router-dom";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';


function NewPass() {
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
        <div className='newpasshead'>
        <img src={headimg} alt="logo" className="logoimg"></img>
        <p className="projname">Scholar's Hub</p>
        </div>
        <div className='newpassbody1'>
            <div className='cont'>
        <label className='newpass'>New Password:</label><br></br>
      <input type={type} name='password' className='newpassbox' value={password} onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"></input>
                  <span className="flex justify-around items-center" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={25} style={{marginLeft: "10px"}}/></span>
                  <div className='cont2'>
      <label className='confnew' >Confirm Password:</label><br></br>
      <input type={type1} name='confpassword' className='newconfbox' value={confpassword} onChange={(e) => setConfpassword(e.target.value)}
                  autoComplete="current-password"></input>
                  <span className="flex justify-around items-center" onClick={handleToggle1}>
                  <Icon className="absolute mr-10" icon={icon1} size={25} style={{marginLeft: "10px"}}/></span>
                  </div>
                  </div>
                  <button onClick={gotoLogin}>Submit</button>


        </div>
    </div>
  )
}

export default NewPass