import React from "react";
import imgC from "../../assets/image/inner-page/jpg/career-banner-img.jpg";

const Hero = () => {
  return (
    <div className="pt-23 pt-md-25 pt-lg-30">
      <div className="container">
        {/* Section Padding */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div
              className="text-center mb-11 mb-lg-24"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={500}
            >
              <h2 className="font-size-11 mb-5">Career</h2>
              <p className="font-size-7 mb-0">
                Our focus is always on finding the best people to work with. Our
                bar is high, but you look ready to take on the challenge.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Padding */}
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="rounded-8"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={500}
            >
              <img className="w-100" src={imgC} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
