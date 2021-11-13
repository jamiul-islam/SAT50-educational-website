import React from "react";
import AllCourses from "../AllCourses/AllCourses";
import Footer from "../Footer/Footer";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllCourses></AllCourses>
      <Footer></Footer>
    </div>
  );
};

export default Home;
