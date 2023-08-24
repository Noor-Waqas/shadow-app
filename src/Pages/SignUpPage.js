import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = () => {
    useEffect(() => {
        const SaveUser = localStorage.getItem("users");
        if (SaveUser) {
          setUser(JSON.parse(SaveUser));
        }
      }, []);
    
    const naviGate=useNavigate()
    const [users,setUser]=useState({
        email: '',
        password: '',
      })
    // const [password,setPassword]=useState();
    // const [email,setEmail]=useState();

const handleInputChange=(item)=>{
    const { name, value } = item.target;
    setUser((prevData) => ({ ...prevData, [name]: value }))

}

    const SignUpPageHandel =()=>{
        localStorage.setItem('users', JSON.stringify(setUser));
        toast.success("Register Successfully");
            naviGate("/")





            
        // const newUser = { password,email};
        // const updatedUser = [...users, newUser];
        // if (password === "") {
        //     toast.error("Password Requred");
        //   } else if (email === "") {
        //     toast.error("Email Requred");
        //   }
        //   else {
        //     localStorage.setItem("users", JSON.stringify(updatedUser));
        //     setPassword("");
        //     setEmail("") 
        //     toast.success("Register Successfully");
        //     naviGate("/")
        // }
       


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
               name="email"
              className="form-control text-success"
              aria-describedby="emailHelp"
              placeholder="Enter email"
             onChange={handleInputChange}
            />
          </div>
          <div className="form-grou">
            <label className="text-success">Password</label>
            <input
              type="password"
              className="form-control "
              placeholder="Password"
              name="password"
              onChange={handleInputChange}

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
}

export default SignUpPage
