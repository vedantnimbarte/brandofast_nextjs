import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/home-2/png/meeting-2.png";
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";
import imgLC from "../../assets/image/home-2/png/left-circlehalf-shape.png";

const Content3 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9 col-xs-11">
              <div
                className="section-title"
                data-aos="fade-left"
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <h2 className="font-size-11 mb-10 mb-lg-20">
                  Meet with clients anytime, anywhere.
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {/* Right */}
            <div
              className="col-xl-6 col-lg-6 col-md-5 col-xs-8"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <div className="content-image-group-3 mb-17 mb-lg-0 mr-xl-16">
                <div className="img-1">
                  <img className="w-100" src={imgM} alt="" />
                  <div className="img-2">
                    <img className="w-100" src={imgDP} alt="" />
                  </div>
                  <div className="img-3 rounded-10">
                    <img className="w-100 opacity-7" src={imgLC} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            {/* Left */}
            <div
              className="col-lg-6 col-md-7 col-xs-10"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <div className="mr-lg-10 mr-xl-25">
                <p className="heading-default-color font-size-6 mb-10">
                  Computer users and programmers have become so accustomed to
                  using Windows, even for the changing capabilities and the
                  appearances of the graphical interface of the versions,
                  therefore it has remained Microsoft’s product.
                </p>
                <p className="heading-default-color font-size-6 mb-11">
                  These companies release their own versions of the operating
                  systems with minor changes, and yet always with the same
                  bottom line.{" "}
                </p>
                <div className="btn-group mb-12">
                  <Link href={"/#"}>
                    <a className="btn btn-dodger-blue-2 rounded-5">
                      Get Started for Free
                    </a>
                  </Link>
                </div>
                <div className="">
                  <p className="font-size-3 line-height-20 mb-7 mb-5 mr-xs-17 mr-md-11 mr-lg-17">
                    “The following article covers a topic that has recently
                    moved to center stage–at least it seems that way. If you’ve
                    been thinking you need to know more about unconditional
                    love, here’s your opportunity.”
                  </p>
                  <h6 className="font-size-3 font-weight-medium">
                    John Doe, Founder of Matrix
                  </h6>
                </div>
              </div>
            </div>
            {/* Left End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
