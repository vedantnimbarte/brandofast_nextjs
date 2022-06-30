import React from "react";

// import imgM from "../../assets/image/home-6/svg/First Page Icon Image And More-20.svg";

import imgA from "../../assets/image/home-6/png/First Page Icon Image And More-11.png";
import imgB from "../../assets/image/home-6/png/First Page Icon Image And More-12.png";
import imgC from "../../assets/image/home-6/png/First Page Icon Image And More-13.png";
import imgD from "../../assets/image/home-6/png/First Page Icon Image And More-14.png";
import imgE from "../../assets/image/home-6/png/First Page Icon Image And More-15.png";
import imgF from "../../assets/image/home-6/png/First Page Icon Image And More-16.png";
import imgG from "../../assets/image/home-6/png/First Page Icon Image And More-17.png";
import imgH from "../../assets/image/home-6/png/First Page Icon Image And More-18.png";
import imgI from "../../assets/image/home-6/png/First Page Icon Image And More-19.png";

const Content2 = ({ className, ...rest }) => {
  return (
    
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {/* Content Section */}
          <div className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
            <div className="pt-7 pb-7 pr-sm-5 pr-md-9 pr-lg-0 mt-lg-30">
              <h2
                className="font-size-9 mb-9 pr-sm-18 pr-md-10 pr-lg-5 pr-xl-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                How Personal Branding {""} <br className="d-none d-md-block" />
                Propals a Brand Image
              </h2>
              <p
                className="font-size-5 mb-0"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Elon musk sells cars, runs a space company, and {""} <br className="d-none d-md-block" />
                controls the stock market, just by being himself. {""} <br className="d-none d-md-block" />
                Likewise, Bill Nye's enthusiasm for science is as, {""} <br className="d-none d-md-block" />
                important to his personal brand as his skils as an {""} <br className="d-none d-md-block" />
                entertainer. They have mote impact on the market {""} <br className="d-none d-md-block" />
                because of themselves, and their achievements {""} <br className="d-none d-md-block" />
                come second.
              </p>
            </div>
          </div>
          {/* Content Image Section */}

          <div className="offset-xl-1 col-xs-1 order-1">
            <div className="row">
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgA}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgD}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgG}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
          <div className="offset-xl-1 col-xs-1 order-1">
            <div className="row">
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgB}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgE}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgH}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
          <div className="offset-xl-1 col-xs-1 order-1">
            <div className="row">
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgC}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgF}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
              <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
                <img
                  className="w-100"
                  src={imgI}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Content2;
