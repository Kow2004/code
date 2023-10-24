import "../Login/login.css";
const Login=()=>{
    return(
          
        <div className="Login">
           
        <div className="Login-form">
         <form>
         <h1 className="login">Login</h1>  
          <label>Email</label>
          <input type="text"
                 className="email"
                 required
          />
          <label>Password</label>
          <input type="password"
                 className="Password"
                 required
          />
         
          <button className="loginbutton">Login</button>
         </form>
        </div> 

     </div>
    
    );
}

export default Login;