import React from "react";

import imgC from "../../assets/image/home-1/png/content-one-img.png";
import imgDot from "../../assets/image/home-1/png/dot-bg.png";
import imgE from "../../assets/image/svg/email.svg";
import imgD from "../../assets/image/home-1/png/dropdrop.png";

const Content = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Image Section */}
            <div className="col-xl-6 col-lg-5 col-md-7 col-xs-10">
              <div
                className="l1-content-image-group-1 mb-10 mb-lg-0"
                data-aos="fade-right"
                data-aos-duration={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <img className="w-100" src={imgC} alt="" />
                <div className="abs-img-1">
                  <img className="w-100" src={imgDot} alt="" />
                </div>
                {/* l1-content-card-1 Image Section */}
                <div
                  className="l1-content-card-1 bg-white shadow-3"
                  data-aos="zoom-in-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                  data-aos-once="true" data-aos-duration={1000}
                >
                  <div className="abs-card-icon">
                    <span className="bg-gradient-1 circle-73">
                      <img src={imgE} alt="" />
                    </span>
                  </div>
                  <div className="abs-content pl-10 pr-10 pt-9">
                    <div className="border-bottom-dotted mb-8">
                      <h5 className="font-size-8 font-weight-medium mb-0 text-dark-cloud">
                        New Job Alert!
                        <span role="img" aria-label="party">
                          🎉
                        </span>
                      </h5>
                      <p className="font-size-4 mb-7 text-bali-gray">
                        20 mins ago
                      </p>
                    </div>
                    <div className="media align-items-center mb-7">
                      <div className="mr-5 mt-n4">
                        <img className="circle-44" src={imgD} alt="" />
                      </div>
                      <div className="company-info">
                        <h6 className="font-size-6 font-weight-normal mb-0 text-dark-cloud lineo">
                          DropDrop is hiring
                        </h6>
                        <p className="font-size-6 font-weight-bold text-dark-cloud mb-0">
                          Marketing Manager!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Section */}
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
              <div
                className="ml-lg-10 ml-xl-12 mt-lg-n20 pr-lg-10 pr-xl-10"
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={300}
                data-aos-once="true" data-aos-duration={1000}
              >
                <h6 className="font-size-5 text-light-orange mb-5 mb-lg-9 font-weight-normal">
                  Join over 15,000+ tech people
                </h6>
                <h3 className="font-size-11 mb-5 mb-lg-8 font-weight-medium pr-sm-20 pr-md-16 pr-lg-0">
                  Get instant alert on your inbox
                </h3>
                <p className="font-size-6 mb-0">
                  We receive over 50 new job submission at our website.
                  Subscribe to our newsletter and get instant job alert on your
                  inbox to apply.{" "}
                </p>
                {/* newsletter */}
                <div
                  className="mt-8 mt-lg-16"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={500}
                  data-aos-once="true" data-aos-duration={1000}
                >
                  <div className="shadow-3 bg-white rounded-0">
                    <form action="/">
                      <div className="subscribe-inline-form">
                        <div className="form-group">
                          <label htmlFor="mail">
                            <i className="icon icon-email-84 mb-0 text-bali-gray font-weight-bold" />
                          </label>
                          <input
                            id="mail"
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                          />
                        </div>
                        <button className="btn btn-primary">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* End newsletter */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
