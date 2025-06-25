import { useState } from "react";
import Header from "./Header";
const Login = () => {
const [IsSignInForm,setIsSignInForm]=useState(true);
     const ToggleSignInForm= ()=>{
     setIsSignInForm(!IsSignInForm);
    };

  return (
    <div  >
      <Header /> 
            <div className="absolute ">
             <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg" alt="background" />
            </div>
            <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
              <h1 className="text-3xl font-bold text-center py-4">
                {IsSignInForm ? "Sign in" : "Sign up"}</h1>
              {!IsSignInForm && ( <input className="p-4 my-4 w-full border-white bg-black" type="email" placeholder="Full Name" required />)}
              <input className="p-4 my-4 w-full border-white bg-black" type="email" placeholder="Email" required />
              <input className="p-4 my-4 w-full  border-white bg-black" type="password" placeholder="Password" required /> 
              <button className="p-2 my-6 bg-red-700 w-full" type="submit"> {IsSignInForm ? "Sign in" : "Sign up"}</button>
                <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>{IsSignInForm ?  "New to Netflix? Sign up Now" : "Already registered? Sign in Now."}</p>
            </form>
    
    
    </div>
  );
};

export default Login;
