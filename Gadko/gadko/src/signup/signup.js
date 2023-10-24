
const Signup=()=>{
    return(
         <div className="Signup">
           
           <div className="Signup-form">
            <form>
            <h1>Signup</h1>
            <label>Name</label>
            
             <input type="text"
                    className="Name"
                    required
             />   
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
             <label>Confirm Password</label>
             <input type="password"
                     className="cpassword"
                     required
             />
             <button className="signupbutton">Sign up</button>
             <h3>Already have an account?<span>Login</span></h3>
            </form>
           </div> 

        </div>
       
        
    );
}

export default Signup;