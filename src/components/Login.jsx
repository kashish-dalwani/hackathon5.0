import headimg from '../assests/logo.png';
import './Login.css';
import { useState } from 'react';
import bgimg from '../assests/logbg.png';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import { useNavigate } from "react-router-dom";


function Login() {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
    const bgStyle = {
        position: 'relative',
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    }
    const Navigate = useNavigate();
    function gotoRegister(){
        Navigate("/register")
      }

  return (
    <div>
        <div className='back' style={bgStyle}></div>
        <div className='headlog'>
        <img src={headimg} alt="logo" className="logoimg"></img>
        <p className="projname">Scholar's Hub</p>
        </div>
        <div className='det'>
            <h1>LOGIN</h1>
            <label className='emaillog'>Email:</label><br></br>
            <input type='email' className='emailbox'></input><br></br><br></br>
            <label className='passlog'>Password:</label><br></br>
            <input type={type} name='password' className='passbox' value={password} onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"></input>
                  <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={25} style={{marginLeft: "10px"}}/>
              </span>
            <button className='Logbtn'>LogIn</button><br></br><br></br><br></br>
            <div className='forgotlink'>
            <a href='/forgetpassword'>Forgot Password?</a>
            </div>
            <div className='reglog'>
                <p>Not a Member? <button style={{marginLeft: "40px"}} onClick={gotoRegister}>Register</button></p>
            </div>
        </div>

    </div>
  )
}

export default Login