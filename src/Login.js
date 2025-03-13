import React from "react";
import "./Login.css";
import logo from './Untitled-1.png'
import { Button } from "@material-ui/core";
import { auth, provider } from "./fireabse";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (

    <div className='login'>
      <div className="logo">
        <img src={logo} alt="website-logo" />
               <h1>YourArt</h1>
      </div>   
      <button type='submit' onClick={ signIn}>Sign In</button>
    </div>
  );
}

export default Login;
