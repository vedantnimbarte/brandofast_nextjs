import React from "react";

import DashBoardImage from "../../assets/image/home-3/png/desktop-dashboard.png";
import YellowShape from "../../assets/image/home-3/png/yellow-shape.png";
import GreenShape from "../../assets/image/home-3/png/green-shape.png";

const Hero = ({className,...rest}) => {
    return (
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div
                className="text-center mb-11 mb-lg-24"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <h1 className="font-size-11 mb-7">
                  More than your regular email inbox
                </h1>
                <p className="font-size-7 px-lg-5 mb-0">
                  We’ve helped over 25,000 individuals and companies to grow
                  their business successfully.
                </p>
                <div className="btn-group d-inline-block mt-10">
                  <a className="btn btn-blue-3 btn-2 rounded-5" href={"/"}>
                    Start 14 Days Free Trial
                  </a>
                  <p className="d-block mt-6 font-size-3 mb-0 text-bali-gray letter-spacing-reset">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image Group */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-xs-11">
              <div className="l3-hero-image-group w-100">
                {/* Image One */}
                <div
                  className="img-1 shadow-13"
                  data-aos="fade-up"
                  data-aos-delay={500}
                  data-aos-once="true" data-aos-duration={1000}
                >
                  <img src={DashBoardImage} alt="" />
                  {/* Image Two */}
                  <div className="img-2">
                    <img
                      src={YellowShape}
                      alt=""
                      data-aos="fade-right"
                      data-aos-delay={700}
                      data-aos-once="true" data-aos-duration={1000}
                    />
                  </div>
                  {/* Image Three */}
                  <div className="img-3">
                    <img
                      src={GreenShape}
                      alt=""
                      data-aos="fade-left"
                      data-aos-delay={900}
                      data-aos-once="true" data-aos-duration={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Hero Image Group */}
        </div>
      </div>
    );
}


export default Hero;