import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { courseContext } from "../../App";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const Courses = () => {
  const CourseData = useContext(courseContext);
  // console.log(CourseData);

  return (
    <div style={{ backgroundColor: "rgb(92, 92, 92)" }}>
      <MenuBar></MenuBar>
      <div className="row text-white">
        {CourseData?.map((course) => (
          <div className="col-md-6 g-4 shadow-sm">
            <div className="m-5">
              <div className="logo-image">
                <img className="w-25 img-thumbnail" src={course.image} alt="" />
                <h2 className="fs-5 mt-4">Website: {course.name}</h2>
                <p className="lead fs-5 pt-2">Moto: {course.its_title}</p>
                <p className="lead fs-5">Total Time: {course.time}</p>
                <p className="lead fs-5">Price: {course.price} USD</p>
                <small className="text-success">{course.access}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
