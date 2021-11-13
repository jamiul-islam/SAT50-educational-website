import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const About = () => {
  return (
    <div style={{ backgroundColor: "rgb(92, 92, 92)" }}>
      <MenuBar></MenuBar>
      <div>
        <div className="container mt-5">
          <div className="border-top pt-5 pb-5 row d-flex details-teams align-items-start justify-content-center text-white">
            <div className="col-md-6 border-end">
              <img
                src="https://scontent.frjh1-1.fna.fbcdn.net/v/t1.6435-9/69353638_1114368048773366_6962459320474664960_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-qoMgLYCn6Cjnt1j0X0-idAkWB1soOiV0CRYHWyg6JXcJvLKryJBtFdE7upWdUOA7mzkLNswddHJxySoAYIYV&_nc_ohc=BYMKuMYfTpsAX_Iwx1c&tn=tDIq03GPUM0WYBAL&_nc_ht=scontent.frjh1-1.fna&oh=3c0b9540d9956fe15652480c7bafc27a&oe=617F0B51"
                alt=""
                className="w-75 img-thumbnail m-2"
              />
            </div>
            <div className="col-md-6 text-start">
              <h2 className="">JAMIUL ISLAM</h2>
              <p className="lead">
                Student | Programmer | Writer | Content Creator | Mentor at
                Bright Brain
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
