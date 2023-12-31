import React from "react";
import { Link } from "react-router-dom";
import { CiTrophy } from "react-icons/ci";
import img from "../images/headerImg.jpg"
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-success">
        <div className="container">
          <a href="" className="navbar-brand p-2">
          {/* <CiTrophy/> */}
          <img src={img} alt="Girl in a jacket" width="50px" height="50px" style={{ borderRadius: "50%"}} />
           <strong> Shadow App</strong>
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#mynav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav ml-auto text-center">
              <li className=" nav-item ">
                <a href="" className="nav-link active ">
                  <Link className="nav-link " to="/profile">
                    Create Post
                  </Link>
                </a>
              </li>
              <li className=" nav-item">
                <a href="" className="nav-link ">
                  <Link className="nav-link " to="/users">
                    All Post
                  </Link>
                </a>
              </li>
              <button className="btn btn-outline-dark btn-sm m-2">
                <Link className="nav-link "  to="/">Logout</Link>
              </button>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
