import React from "react";

import imgM from "../../assets/image/home-6/svg/First Page Icon Image And More-28.svg";

const Content2 = ({ className, ...rest }) => {
  return (
    // <div className={className} {...rest}>
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
              A fast, easy & automated {""} <br className="d-none d-md-block" />
              branding experience
            </h2>
            <p
              className="font-size-5 mb-0"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              Brandofast was created to take away your frustrations {""} <br className="d-none d-md-block" />
              and empower you from start to finish through our latest {""} <br className="d-none d-md-block" />
              automated branding processes. Brandofast brings {""} <br className="d-none d-md-block" />
              simplicity and efficiency together with the ultimate goal {""} <br className="d-none d-md-block" />
              of helping users create their corporate identities in the {""} <br className="d-none d-md-block" />
              fastest possible time.
            </p>
          </div>
        </div>
        {/* Content Image Section */}
        <div className="col-xl-6 offset-xl-1 col-xs-6 order-1 order-lg-2">
          <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25" style={{
            maxHeight: "100%",
            width: "80%"
          }}>
            <img
              className="w-100"
              src={imgM}
              alt=""
              data-aos="fade-right"
              data-aos-delay={500}
            />
          </div>
        </div>
      </div>
    </div>
    // {/* </div> */}
  );
};

export default Content2;
