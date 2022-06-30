import React from "react";

import imgC from "../../assets/image/inner-page/png/about-content-img-1.png";
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";

const Content = () => {
  return (
    <div className="pb-11 pb-md-15 pb-lg-27">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-sm-9">
            <div
              className="text-center mb-13 mb-lg-16"
              data-aos="zoom-in"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 mb-0 letter-spacing-n83">
                Change the game through design
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Right */}
          <div className="col-xl-5 col-lg-5 col-md-5 col-xs-10">
            <div className="about-content-image-group-1 mb-8 mb-lg-0">
              <div className="img-1">
                <img
                  className="w-100 rounded-10"
                  src={imgC}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration={600}
                />
                <div className="img-2 z-index-n1 mt-n13">
                  <img
                    className="w-100"
                    src={imgDP}
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration={900}
                    data-aos-delay={300}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          {/* Left */}
          <div className="col-xl-6 col-lg-7 col-md-7 col-xs-10">
            <div
              className="mx-lg-14 mx-xl-14"
              data-aos="fade-left"
              data-aos-duration={600}
            >
              <p className="heading-default-color font-size-6 mb-4 mb-lg-9">
                Computer users and programmers have become so accustomed to
                using Windows, even for the changing capabilities and the
                appearances of the graphical interface of the versions,
                therefore it has remained Microsoft’s product.
              </p>
              <p className="heading-default-color font-size-6 mb-5 mb-lg-13">
                These companies release their own versions of the operating
                systems with minor changes, and yet always with the same bottom
                line.{" "}
              </p>
              <div className="">
                <p className="font-size-3 line-height-20 mb-7 mr-xs-17 mr-md-11 mr-lg-18 mr-xl-20">
                  “The following article covers a topic that has recently moved
                  to center stage–at least it seems that way. If you’ve been
                  thinking you need to know more about unconditional love,
                  here’s your opportunity.”
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
  );
};

export default Content;
