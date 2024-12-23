import React from "react";
import './App.css'

const App = () => {
  return (
    <div className="parent">
      <div className = "left">
        <h1>Welcome to our community</h1>
        <p>
          Clarity gives you the blocks and components you need to create a truly
          professional website
        </p> 
        <p>
          "We love Landingfolio! Our designers were using it for their projects,
          so we already knew what kind of design they want."
        </p>
        <p>Devon Lane (Co-Founder, Design.co)</p>
      </div>
      <div className = "right">
        <h1>Join Clarity</h1>
        <p>
          Clarity gives you the blocks and components you need to create a truly
          professional website
        </p>
        <p>Full Name</p>
        {/* <input>Full Name</input> */}
        <p>Email Address</p>
        {/* <input>Email Address</input> */}
        <p>Password</p>
        {/* <input>Password</input> */}
        <button>Remember Me</button>
        <span>Forgot Password</span>
        <button>Sign Up</button>
        <span>Don't have an account ? Create free account</span>
      </div>
    </div>
  );
};

export default App;
