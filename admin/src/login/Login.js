
import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { EyeButtonIcon, OpenEyeIcon } from "../assets/Svg"
import axios from 'axios';




function Login() {
  const [show, setShow] = useState(false)
  
    const [data, setData] = useState({
        username: "",
        password: ""
    
      });
      const onChange = e => {
        setData((previous) => {
          let initial = { ...previous };
          initial[`${e.target.name}`] = e.target.value;
          return initial;
    
        });
        console.log(data)
      };
      
    const navigate=useNavigate()
    const Submit=()=>{
    
      const credentials=data;
      axios.post("http://localhost:3000/login", credentials)
      .then((response) => {
        
        console.log(response)
        if (response.status === 200) {
          navigate('/'); // Navigate to the home page
        }
      })
      .catch((error) => {
       
        console.log(error)
      });
    }

  return (
    <>
    <form className='main-div container'>SIGN IN
     
      <div className="mb-3 sign-in-container ">
        <label htmlFor="exampleInputEmail1" className="form-label" placeholder="">Username</label>
        <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp"name="username" placeholder='username' onChange={onChange} value={data.username}/>
        <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
      </div>
      <div className="mb-3 sign-in-container">
        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
        <input type={show ? "text" : "password"} className="form-control" id="exampleInputPassword1" name="password" placeholder="*******" onChange={onChange} value={data.password} />
        <span onClick={() => setShow(!show)} className='eye-btn-container'>{show ? <OpenEyeIcon /> : <EyeButtonIcon />}</span>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={(e)=>Submit(e)}>Submit</button>
    
    </form>
      
    </>
  )
}

export default Login
