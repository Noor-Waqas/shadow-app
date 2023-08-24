import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  React.useEffect(() => {
    const savePost = localStorage.getItem("post");
    if (savePost) {
      setPost(JSON.parse(savePost));
    }
  }, []);
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  // const [img, setImg] = useState("");
  const [checked, setChecked] = useState(false);

  // converting imag is file
  const convertingIMG = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  // tahdel of images in local storage
  const hendelImg = (e) => {
    const file = e.target.files[0];
    convertingIMG(file).then((imgItem) => {
      localStorage["img"] = imgItem;
      console.debug("File Storage", imgItem);
    });
  };

  const handleSubmit = (e) => {
    console.log("========= ",post);
    e.preventDefault();
    // create multiple post
    const newPost = { name, email, password, gender, checked };

    const updatedPost = [...post, newPost];
    setPost(updatedPost);
    // console.log("========= ", post);

    if (name === "") {
      toast.error("Name Requred");
    } else if (email === "") {
      toast.error("Email Requred");
    } else if (password === "") {
      toast.error("Password Requred");
    } else {
      localStorage.setItem("post", JSON.stringify(updatedPost));
      setName("");
      setEmail("");
      setPassword("");
      setGender("");
      setChecked("");
      // localStorage.setItem("name", name);
      toast.success("User Save :");
    }
    console.log("data", post);
  };
  let ary = [];
  return (
    <>
      {/* {post.map((user, index) => (
        <li key={index}>
          Name: {user.name}, Email: {user.email}, password: {user.password},
          gender: {user.gender}, checked: {user.checked}
        </li>
      ))} */}

      <Header />
      <div className="container content mt-4">
        <h5> 📝 Create New Post</h5>

        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  defaultChecked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="Gender"
                  value="Male"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  value="Female"
                  defaultChecked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                checked={checked}
                onChange={(e) => setChecked(e.target.value)}
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-success form-control"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={profilePIcDefault}
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input
                onChange={hendelImg}
                name="file"
                className="form-control"
                type="file"
                id="formFile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
