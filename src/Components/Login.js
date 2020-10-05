import React from 'react';
import {Link} from 'react-router-dom';

 const Login=()=>{
    
    var email=null;
    var Password=null;

    const onChangeHandlerEmail=(e)=>{
       email=e.target.value;
       console.log("email:"+email);
    }

    const onChangeHandlerPassword=(e)=>{
        Password=e.target.value;
        console.log("Password:"+Password);

     }


    return (
        <div id="login">
                    <h2 id="">Login</h2>
                    <p></p>
                    <label id=""> Email ID <p><input onChange={onChangeHandlerEmail} type="text" id="" placeholder="Email ID" /> </p> </label>
                    <p></p>
                    <label id=""> Password <p><input onChange={onChangeHandlerPassword} type="email" id="" placeholder="Password" /> </p> </label>
                    <p></p>
                    <button id=""> Login </button>
                    <p></p>
                    <label>New User?</label><Link exact strict to="/signUp">Create Account</Link>
        </div>
    )
}

export default Login