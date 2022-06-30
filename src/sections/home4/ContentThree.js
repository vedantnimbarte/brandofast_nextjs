import React from "react";
import Link from "next/link";
import imageOne from "../../assets/image/home-4/png/l4-card-1.png";
import imageTwo from "../../assets/image/home-4/png/l4-card-2.png";
import imageThree from "../../assets/image/home-4/png/l4-card-3.png";

const ContentTwo = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-8 col-xs-11">
            {/* content img start */}
            <div className="l4-content-img-group">
              <div className="img-1">
                <img
                  className="w-100"
                  src={imageOne}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration={600}
                  data-aos-delay={300}
                  data-aos-once="true" data-aos-duration={1000}
                />
              </div>
              <div className="img-2">
                <img
                  className="w-100"
                  src={imageTwo}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration={600}
                  data-aos-delay={600}
                  data-aos-once="true" data-aos-duration={1000}
                />
              </div>
              <div className="img-3">
                <img
                  className="w-100"
                  src={imageThree}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-delay={900}
                  data-aos-once="true" data-aos-duration={1000}
                />
              </div>
            </div>
          </div>
          {/* End Right Image */}
          <div className="col-xl-5 offset-lg-1 col-lg-6 col-md-8 mt-n13 mt-md-n8 mt-lg-n0">
            <div
              className="pt-xl-32 pt-lg-0 pt-27 mt-lg-0 dark-mode-texts"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <h6 className="font-size-3 text-dodger-blue-1 text-uppercase mb-9 letter-spacing-normal">
                New feature
              </h6>
              <h2 className="font-size-10 mb-8 letter-spacing-n83 pr-xs-22 pr-sm-18 pr-md-0">
                The best experience offered by Finity
              </h2>
              <p className="font-size-7 mb-0">
                Minimize time consuming distractions, level up your team’s
                productivity by letting finity handle your comm. Our focus is
                always on finding the best people to work with.
              </p>
              <div className="mt-12">
                <Link href={"/#"}>
                  <a className="btn btn-sunset btn-xl h-55 rounded-5 font-weight-normal">
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

export default ContentTwo;
