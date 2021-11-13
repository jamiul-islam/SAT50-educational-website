import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-bg">
      <MenuBar></MenuBar>
      <h1
        style={{ fontSize: "5em", padding: "10%" }}
        className=" mb-5 text-white mt-5"
      >
        OOPS 🤭 <span className="text-danger">404</span> !!!
      </h1>
      <Footer></Footer>
    </div>
  );
};

export default Error;
