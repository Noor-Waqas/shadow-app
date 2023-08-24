import React from "react";
import Header from "../Components/Header";
import Modal from "react-modal";

const UersList = () => {
  const postData = JSON.parse(localStorage.getItem("post"));
  // console.log("++++++++++++++++++", postData);
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const deleteHandle = () => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Post?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        postData((pre) => {
          return pre.filter((post) => post.id !== post.id);
        });
      },
    });
  };
  return (
    <div>
      <Header />
      <div className="container content">
        <div>
          <h3 className="text-center bg-success text-light p-2 mt-5">
            Welcome To Shadow App
          </h3>
        </div>
        {postData?.map((item) => (
          <div className="border mt-4 p-4">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center ">
                  <img
                    src={
                      localStorage.getItem("img")
                        ? localStorage.getItem("img")
                        : profilePIcDefault
                    }
                    alt="profile_pic"
                    className="img-thumbnail"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="ms-4">
                  <h4>Name : {item?.name}</h4>
                  <h4>Email :{item?.email}</h4>
                  <h4>Gender :{item?.gender}</h4>
                  <p>
                    Accepted Terms And Conditions :{item?.checked}
                    {/* {localStorage.getItem("post") ? "YES" : "No"} */}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="btn btn-success btn-sm mt-4"
              onClick={deleteHandle}
            >
              Delete Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UersList;
