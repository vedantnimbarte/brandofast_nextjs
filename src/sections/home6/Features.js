import React from "react";

import imgR from "../../assets/image/home-6/svg/First Page Icon Image And More-05.svg";

import img1 from "../../assets/image/home-6/png/First Page Icon Image And More-06.png";
import img2 from "../../assets/image/home-6/png/First Page Icon Image And More-07.png";
import img3 from "../../assets/image/home-6/png/First Page Icon Image And More-08.png";
import img4 from "../../assets/image/home-6/png/First Page Icon Image And More-09.png";

const Features = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-xl-6 col-lg-7 col-md-8 order-2 order-lg-1">
            <div
              className="mb-0 pr-xs-20 pr-md-0 mb-10 text-center text-lg-left"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <h2 className="font-size-9">
                Branding isn’t easy, {""} <br className="d-none d-md-block" /> and we know why.
              </h2>
            </div>
            <div className="">
              {/* Services */}
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-xs-6">
                  <div
                    className="pt-13 pt-lg-15"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="square-60 rounded-10 text-white font-size-7">
                      {/* <i className="fa fa-link" /> */}
                      <img
                        className="w-100"
                        src={img1}
                        alt=""
                        data-aos="fade-right"
                        data-aos-delay={500}
                        style={{
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                    <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8">
                      <h4 className="font-size-7 mb-5">Sky High Costs</h4>
                      <p className="font-size-4 mb-0">
                        Advertising agencies typically  {""} <br className="d-none d-md-block" />
                        charge a lot of money to {""} <br className="d-none d-md-block" />
                        businesses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-6">
                  <div
                    className="pt-13 pt-lg-15"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    <div className="square-60 rounded-10 text-white font-size-7">
                      {/* <i className="fa fa-level-up-alt" /> */}
                      <img
                        className="w-100"
                        src={img2}
                        alt=""
                        data-aos="fade-right"
                        data-aos-delay={500}
                        style={{
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                    <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8">
                      <h4 className="font-size-7 mb-5">Who To Trust</h4>
                      <p className="font-size-4">
                        Deciding between different {""} <br className="d-none d-md-block" />
                        companies and products can {""} <br className="d-none d-md-block" />
                        be tough and time-consuming. {""} <br className="d-none d-md-block" />
                        A one-stop shop is hard to find.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-6">
                  <div
                    className="pt-13 pt-lg-15"
                    data-aos="fade-up"
                    data-aos-delay={900}
                  >
                    <div className="square-60 rounded-10 text-white font-size-7">
                      <img
                        className="w-100"
                        src={img3}
                        alt=""
                        data-aos="fade-right"
                        data-aos-delay={500}
                        style={{
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                    <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8">
                      <h4 className="font-size-7 mb-5">Zero Creativity</h4>
                      <p className="font-size-4 mb-0">
                        It’s tough for companies to {""} <br className="d-none d-md-block" />
                        find new and creative {""} <br className="d-none d-md-block" />
                        solutions for their {""} <br className="d-none d-md-block" />
                        advertisement campaigns.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-6">
                  <div
                    className="pt-13 pt-lg-15"
                    data-aos="fade-up"
                    data-aos-delay={1200}
                  >
                    <div className="square-60 rounded-10 text-white font-size-7">
                      {/* <i className="fa fa-link" /> */}
                      <img
                        className="w-100"
                        src={img4}
                        alt=""
                        data-aos="fade-right"
                        data-aos-delay={500}
                        style={{
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                    <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8" style={{
                        paddingRight: "0px !important"
                      }}>
                      <h4 className="font-size-7 mb-5">Too Much Hassle</h4>
                      <p className="font-size-4 mb-0">
                        Even a good branding plan, will {""} <br className="d-none d-md-block" />
                        still kill a lot of your time by needing {""} <br className="d-none d-md-block" />
                        you to come up with the ideas and {""} <br className="d-none d-md-block" />
                        provide insights by giving information {""} <br className="d-none d-md-block" />
                        yourself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-8 order-1 order-lg-2">
            <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25" style={{
              maxHeight: "100%",
              width: "60%"
            }}>
              <img className="image-fit" src={imgR} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
