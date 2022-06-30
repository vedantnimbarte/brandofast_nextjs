import React from "react";
import Link from "next/link";

import imgC1 from "../../assets/image/home-5/png/l5-content-3-img-1.png";
import imgC2 from "../../assets/image/home-5/png/l5-content-3-img-2.png";
import imgC3 from "../../assets/image/home-5/png/l5-content-3-img-3.png";

const Content3 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-9 position-static">
            {/* content-2 start */}
            <div className="l5-content-gallery-img">
              {/* content img start */}
              <div className="d-xs-flex ml-lg-15 mx-xl-n3">
                <div className="d-flex flex-column px-3 px-sm-6 w-100 mr-xl-14">
                  {/* single image start */}
                  <img
                    src={imgC1}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    className="w-100 pb-6 pb-sm-9 rounded-bottom-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={imgC2}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    data-aos-delay={700}
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={imgC3}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    data-aos-delay={700}
                    className="w-100 rounded-top-10"
                  />
                  {/* single image end */}
                </div>
              </div>
              {/* abs-content end */}
            </div>
            {/* content-2 end */}
          </div>
          {/* End Right Image */}
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="dark-mode-texts mt-10 mt-lg-0 pr-xs-15 pr-sm-14 pr-md-13 pr-lg-0 pl-lg-15">
              <h6
                className="font-size-3 text-white text-uppercase mb-10 letter-spacing-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Popular choice
              </h6>
              <h2
                className="font-size-10 mb-8 letter-spacing-n83  pr-xs-25 pr-sm-15 pr-md-15 pr-lg-0"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                Wear all day in total light-weight comfort
              </h2>
              <p
                className="font-size-7 mb-0"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                Sophisticated styling with exceptional comfort. Super-soft,
                pressure-relieving earpads in foamed urethane evenly distribute
                pressure and increase ear/pad contact for a stable fit.
              </p>
              <div className="mt-12" data-aos="fade-up" data-aos-delay={900}>
                <Link href="/#">
                  <a className="btn btn-sunset btn-xl h-55 rounded-5">
                    Start 14 Days trial
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
