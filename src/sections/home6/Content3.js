import React from "react";
import Link from "next/link";

import imgS from "../../assets/image/home-6/png/content-3-mobile.png";
import imgM from "../../assets/image/home-6/svg/First Page Icon Image And More-20.svg";

const Content3 = ({ className, ...rest }) => {
  return (
   
      <div className="container" style={{
          marginBottom: "5%"
      }}>
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          <div className="col-xl-6 col-lg-5 col-xs-6">
            <div className="mb-10 mb-lg-0 mt-lg-16 mr-20">
              <img
                className="w-100"
                src={imgM}
                alt=""
                data-aos="fade-right"
                data-aos-delay={500}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-10 col-xs-10">
            <div className="pt-5 pb-7 pr-sm-5 pr-md-9 pr-lg-0">
              <h2
                className="font-size-9 mb-9 pr-sm-10 pr-md-17 pr-lg-15 pr-xl-0 mt-lg-31"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Consistent Flow of {""} <br className="d-none d-md-block" />  Donors and Volunteers?
              </h2>
              <p
                className="font-size-5 mb-0 pr-md-20 pr-xl-22"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                NGOs like Goonj and the Give India Foundation are {""} <br className="d-none d-md-block" /> 
                heavily committed to advertising their exact mission  {""} <br className="d-none d-md-block" />  
                and know exactly what their volunteers and donors {""} <br className="d-none d-md-block" />
                want to feel when they get involved with a mission.
              </p>
            
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Content3;
