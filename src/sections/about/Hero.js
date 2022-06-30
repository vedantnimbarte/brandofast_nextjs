import React from "react";

const Hero = () => {
  return (
    <div className="pt-24 pt-md-26 pt-lg-30 ">
      <div className="container">
        {/* Section Padding */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div
              className="text-center mb-11 mb-lg-24"
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={500}
            >
              <h2 className="font-size-11 mb-5">About us</h2>
              <p className="font-size-7 mb-0">
                Our focus is always on finding the best people to work with. Our
                bar is high, but you look ready to take on the challenge.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Padding */}
      </div>
    </div>
  );
};

export default Hero;
