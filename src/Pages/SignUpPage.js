import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = () => {
  // useEffect(() => {
  //   const SaveUser = localStorage.getItem("users");
  //   if (SaveUser) {
  //     setUser(localStorage.getItem("users"));
  //   }
  // }, []);

  const naviGate = useNavigate();
  //   const [users, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();

    const SaveUser = JSON.parse(localStorage.getItem("users"));
    const newUser = { password: password, email: email };
    const updatedUser = SaveUser ? [...SaveUser, newUser] : [newUser];

    console.log("++++++++++++++++++++", updatedUser);
    if (password === "") {
      toast.error("Password Requred");
    } else if (email === "") {
      toast.error("Email Requred");
    } else {
      localStorage.setItem("users", JSON.stringify(updatedUser));
        setPassword("");
        setEmail("");
        toast.success("Register Successfully");
        naviGate("/");
    }
  };

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
              onChange={(e) => setEmail(e.target.value)}
              className="form-control text-success"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-grou">
            <label className="text-success">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control "
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success mt-5 mb-3 form-control"
            onClick={handelSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
