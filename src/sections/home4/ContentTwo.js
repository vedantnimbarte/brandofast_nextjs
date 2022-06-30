import React from "react";
import Link from "next/link";
import imageOne from "../../assets/image/home-4/png/content-2-img.png";

const ContentTwo = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 order-2 order-lg-1">
            <div
              className="mt-13 mt-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <h6 className="font-size-3 text-dodger-blue-1 text-uppercase mb-9 letter-spacing-normal">
                Product of the day
              </h6>
              <h2 className="font-size-10 mb-8 letter-spacing-n83">
                The best experience offered by Finity Social
              </h2>
              <p className="font-size-7 mb-0">
                Minimize time consuming distractions, level up your team’s
                productivity by using finity social. Our focus is always on
                finding the best people to work with.
              </p>
              <div className="mt-12">
                <Link href={"/#"}>
                  <a className="btn btn-sunset btn-xl h-55 rounded-5">
                    Start 14 Days trial
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-8 col-xs-11 order-1 order-lg-2">
            <div
              className="l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <img className="w-75 w-md-100" src={imageOne} alt="" />
              <div className="image-card w-fit-content bg-white rounded-15 d-flex align-items-center shadow-10 p-8">
                <div className="mr-6 square-59 bg-dodger-blue-1-op1 rounded-10 text-dodger-blue-1 font-size-7">
                  <i className="fas fa-bell" />
                </div>
                <div className="text-left">
                  <h4 className="font-size-6 text-dark-cloud mb-0 line-height-26">
                    New Feature
                  </h4>
                  <p className="font-size-5 text-stone mb-0">
                    You’ve received a new notification
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Image */}
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
