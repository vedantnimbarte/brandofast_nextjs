import React from "react";
import Link from "next/link";

import imgAS from "../../assets/image/home-6/png/app-store-img.png";
import imgPS from "../../assets/image/home-6/png/play-store-img.png";

const Promo = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="border-bottom pt-13 pt-md-18 pt-lg-21 pb-13 pb-md-17 pb-lg-22">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h3
                  className="font-size-9 mb-7"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  Download our mobile app.
                </h3>
                <p
                  className="font-size-6 mb-0 "
                  data-aos="fade-up"
                  data-aos-delay={800}
                >
                  Your app is your tool for better solution with your followers,
                  making it easier for them to keep up to date.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-xl-1 col-md-8 col-sm-10">
              <div className="text-center text-lg-left">
                <h5
                  className="font-size-6 text-oxford-blue opacity-7 font-weight-normal mb-7 ml-lg-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  Available on
                </h5>
                <div className="btn-group d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                  <Link href="/#">
                    <a>
                      <img
                        className="w-sm-100 w-xl-auto max-h-64 mb-3 mb-lg-0 mx-auto mx-sm-3"
                        src={imgAS}
                        alt=""
                        data-aos="fade-up"
                        data-aos-delay={500}
                      />
                    </a>
                  </Link>
                  <Link href="/#">
                    <a>
                      <img
                        className="w-sm-100 w-xl-auto max-h-64 mb-3 mb-lg-0 mx-auto mx-sm-3"
                        src={imgPS}
                        alt=""
                        data-aos="fade-up"
                        data-aos-delay={800}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
