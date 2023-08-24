import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const naviGate = useNavigate();
  // useEffect(() => {
  //   localStorage.setItem("email", "waqas@gmail.com");
  //   localStorage.setItem("password", "wq321");
  // }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.success("Both fields are required.");
    } else {
      // const usersdata = localStorage.getItem("users");
      const data = JSON.parse(localStorage.getItem("users"));
      const IsUser = data.find((item) => item.email == email);
      if (IsUser.email===email && IsUser.password===password) {
        toast.success("Login Success");
        naviGate("/profile");
      } else {
        toast.success("Invalid username or password.");
      }
    }
  };
  return (
    <>
      <div className="container-feluid text-center ">
        <h1 className="bg-success text-white">Well Come To Shadow App</h1>
      </div>
      <div className="form__container d-flex felx-column align-items-center justify-content-center border">
        <form>
          <div>
            <h2 className="form__heading">User Login </h2>
          </div>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address :
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password :
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/signup">Signup !</Link>
            </p>
          </div> */}
          <button
            type="submit"
            className="btn btn-success btn-lg m-2"
            onClick={handelSubmit}
          >
            Login
          </button>

          <button type="submit" className="btn btn-success btn-lg">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/signup"
            >
              Sign Up
            </Link>
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginPage;
