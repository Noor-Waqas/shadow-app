import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SignUpPage = () => {
    
    const naviGate=useNavigate()
    const [password,setPassword]=useState();
    const [email,setEmail]=useState();



    const SignUpPageHandel =()=>{
        // toast.success("Sign Up Save :");
        // naviGate("/");

    }
  return (
    <>
      <div className="container-feluid text-center h-35">
        <h1 className="bg-success text-white">Well Come To Shadow App</h1>
      </div>

      <div className="container border mt-5">
        <form>
          <div className="form-group mt-5">
            <h1 className=" text-success">Sign Up</h1>
            <label className="text-success">Email address</label>
            <input
              type="email"
              value={email}
              className="form-control text-success"
              aria-describedby="emailHelp"
              placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-grou">
            <label className="text-success">Password</label>
            <input
              type="password"
              className="form-control "
              placeholder="Password"
              value={password}
             onChange={(e) => setPassword(e.target.value)}

            />
          </div>

          <button
            type="submit"
            className="btn btn-success mt-5 mb-3 form-control"
            onClick={SignUpPageHandel}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
