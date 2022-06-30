import React from "react";

import imgM from "../../assets/image/home-6/svg/First Page Icon Image And More-10.svg";
import imgG from "../../assets/image/home-6/png/green-dot-pattern.png";

const Content1 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {/* Image Section */}
          <div className="col-xl-5 col-xs-6">
            <div className="mb-10 mb-lg-0 mt-lg-16 mr-20">
              <img
                className="w-100"
                src={imgM}
                alt=""
                data-aos="fade-right"
                data-aos-delay={500}
                style={{
                  maxHeight: "100%",
                  width: "auto"
                }}
              />
            </div>
          </div>
          {/* Content Section */}
          <div className="col-lg-6 col-md-8 col-xs-10">
            <div className="pt-7 pb-7 pl-sm-5 pl-md-9 pl-lg-0 pl-xl-16 mt-lg-31">
              <h2
                className="font-size-9 mb-9 pr-xs-23 pr-sm-8 pr-md-18 pr-lg-18"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Why Top Brands {""} <br className="d-none d-md-block" />
                Took Over.
              </h2>
              <p
                className="font-size-5 mb-0 pr-xl-13"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                The iconic logo of McDonald’s and the {""} <br className="d-none d-md-block" />
                “30 Minutes or Free” strategy of Dominos is {""} <br className="d-none d-md-block" />
                what made these restaurants the global brand {""} <br className="d-none d-md-block" />
                they are today. These are examples of branding {""} <br className="d-none d-md-block" />
                techniques that have all paved the way for how {""} <br className="d-none d-md-block" />
                advertising works today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
