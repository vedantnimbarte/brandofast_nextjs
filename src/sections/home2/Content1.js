import React from "react";
import Link from "next/link";

import imgD from "../../assets/image/home-2/png/dashboard.png";
import imgC1 from "../../assets/image/home-2/png/card-img-1.png";
import imgDBG from "../../assets/image/home-1/png/dot-bg.png";
import imgCS from "../../assets/image/home-2/png/content-shape.png";

const Content1 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="text-center mb-13 mb-lg-22 pr-lg-10 pr-xl-0">
                <h2 className="font-size-11 mb-0">
                  Control everything in a single place.
                </h2>
              </div>
            </div>
          </div>
          {/* Section Title */}
          <div className="row justify-content-center">
            {/* Image Section */}
            <div className="col-lg-9 col-md-10 ">
              <div
                className="l2-content-image-group-1 w-100"
                data-aos="zoom-in"
                data-aos-delay={300}
                data-aos-once="true" data-aos-duration={1000}
              >
                {/* Dashboard Img */}
                <img className="w-100 w-lg-auto shadow-9" src={imgD} alt="" />
                {/* content-card-img-1 Img */}
                <div className="img-2">
                  <img src={imgC1} alt="" />
                </div>
                {/* End content-card-img-1 Img */}
                {/* img-group-content */}
                <div className="img-group-content bg-white absolute-top-left shadow-4 max-w-193 text-left">
                  <div className="seciton-body">
                    <div className="mb-7">
                      <h5 className="font-size-6 font-weight-medium mb-0 line-height-reset text-dark-cloud">
                        Meeting with John
                      </h5>
                      <p className="font-size-3 text-stone">
                        11:15am, Sep 10, Sunday
                      </p>
                    </div>
                    <h6 className="font-size-3 text-stone">Agenda:</h6>
                    <p className="font-size-3 text-dark-cloud">
                      How to get more customers for your ecommerce business
                    </p>
                  </div>
                  <div className="d-flex align-items-center w-100">
                    <Link href={"/#"}>
                      <a className="btn-buttercup w-50 text-white">
                        <i className="fa fa-calendar font-size-3 mr-1" />{" "}
                        Reschedule
                      </a>
                    </Link>
                    <Link href={"/#"}>
                      <a className="btn-red w-50">
                        <i className="fa fa-times font-size-3 mr-1" /> Cancel
                      </a>
                    </Link>
                  </div>
                </div>
                {/* End Img-group-content */}
                <div className="img-3">
                  <img src={imgDBG} alt="" />
                </div>
                {/* End Dashboard Img */}
              </div>
            </div>
          </div>
        </div>
        <div className="full-width-shape w-100">
          <img className="w-100" src={imgCS} alt="" />
        </div>
      </div>
    </>
  );
};

export default Content1;
