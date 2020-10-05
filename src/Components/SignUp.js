import React from 'react';
import {useHistory} from 'react-router-dom'

const SignUp=()=>{

    var name=null;
    var email=null;
    var Password=null;
    var ConfirmPassword=null;
    var history=useHistory();

    const onChangeHandlerName=(e)=>{
        name=e.target.value;
        console.log("name:"+name);
     }

    const onChangeHandlerEmail=(e)=>{
        email=e.target.value;
        console.log("email:"+email);
     }
 
     const onChangeHandlerPassword=(e)=>{
         Password=e.target.value;
         console.log("Password:"+Password);
 
      }


      const onChangeHandlerConfirmPassword=(e)=>{
        ConfirmPassword=e.target.value;
        console.log("ConfirmPassword:"+ConfirmPassword);

     }

        const onClickHandlerSignUp=()=>{
                history.push('/')            
        }


    return (
        <div id="signup">
            

           

                    <h2 id="">Signup</h2>
                    <p></p>
                    <label id=""> Full Name <p><input onChange={onChangeHandlerName}  type="text" id="" /> </p> </label>
                    <p></p>
                    <label id=""> EmailID <p><input onChange={onChangeHandlerEmail} type="email" id="" placeholder="" /> </p> </label>
                    <p></p>
                    <label id=""> Password <p><input onChange={onChangeHandlerPassword} type="text" id="" /> </p> </label>
                    <p></p>
                    <label id=""> Confirm Password <p><input  onChange={onChangeHandlerConfirmPassword} type="text" id="" /> </p> </label>
                    <p></p>
                    <button id="" onClick={onClickHandlerSignUp}> SIGNUP </button>



       </div>

    )
}


export default SignUp;