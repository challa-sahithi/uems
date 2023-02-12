import React from 'react';
import './login.css';

 function Login(props) {
  return (
    <>        
    <h2>{props.title}</h2><br/>    
     <div className="login">    
     <form id="login" method="get" action="">    
         <label><b>User Name     
         </b>    
         </label>    
         <input type="text" name="Uname" id="Uname" placeholder="Username"/>    
         <br/><br/>    
         <label><b>Password     
         </b>    
         </label>    
         <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
         <br/><br/>    
         <input type="button" name="log" id="log" value="Log In Here"/>       
         <br/><br/>    
         <input type="checkbox" id="check"/>    
         <span>Remember me</span>    
         <br/><br/>    
          <a href="#">Forgot Password?</a>    
     </form>     
     </div>           
        </>           
  )
}
export default Login;
