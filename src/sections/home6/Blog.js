import React from "react";
import Link from "next/link";

import imgB1 from "../../assets/image/home-6/svg/First Page Icon Image And More-91.svg";
import imgB2 from "../../assets/image/home-6/svg/First Page Icon Image And More-92.svg";
import imgB3 from "../../assets/image/home-6/svg/First Page Icon Image And More-93.svg";
import imgB4 from "../../assets/image/home-6/svg/First Page Icon Image And More-94.svg";

const Blog = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="mb-10 mb-lg-17">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              <div className="col-xl-5 col-lg-6 col-xs-10">
                {/* <!-- Section Title --> */}
                <div
                  className="text-center text-lg-left"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <h2 className="font-size-9 font-weight-medium pr-md-6 pr-lg-9 pr-xl-0 mb-0">
                    Deeper Insights into {" "}
                    <br className="d-none d-md-block" />
                    the World of Branding!
                  </h2>
                </div>
                {/* <!-- End Section Title --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="col-lg-6 col-md-10">
              {/* <!-- Single Blog --> */}
              <Link href={"/#"}>
                <a>
                  <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                    <div className="mr-10">
                      <img className="square-116" src={imgB1} alt="" />
                    </div>
                    <div className="mt-8 mt-xs-0">
                      <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                        The Branding of Your Dreams
                      </h4>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>3 days ago
                        </span>
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>6 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/* <!-- End Single Blog --> */}
              {/* <!-- Single Blog --> */}
              <Link href={"/#"}>
                <a>
                  <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                    <div className="mr-10">
                      <img className="square-116" src={imgB2} alt="" />
                    </div>
                    <div className="mt-8 mt-xs-0">
                      <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                        Branding, anywhere, anytime!
                      </h4>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>2 days ago
                        </span>
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>6 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/* <!-- End Single Blog --> */}
            </div>
            <div className="col-lg-6 col-md-10 mt-lg-n23">
              {/* <!-- Single Blog --> */}
              <Link href={"/#"}>
                <a>
                  <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                    <div className="mr-10">
                      <img className="square-116" src={imgB3} alt="" />
                    </div>
                    <div className="mt-8 mt-xs-0">
                      <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                        Branding For Everyone
                      </h4>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>3 days ago
                        </span>
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>6 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/* <!-- End Single Blog --> */}
              {/* <!-- Single Blog --> */}
              <Link href={"/#"}>
                <a>
                  <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                    <div className="mr-10">
                      <img className="square-116" src={imgB4} alt="" />
                    </div>
                    <div className="mt-8 mt-xs-0">
                      <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                        Miles Ahead of The Competition
                      </h4>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>2 days ago
                        </span>
                        <span className="text-bali-gray font-size-3 pr-9">
                          <i className="fa fa-clock mr-2"></i>6 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
