import React from "react";
import imageOne from "../../assets/image/home-4/png/banner-img.png";

const ContentOne = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* Section title */}
        <div className="row align-items-xl-center justify-content-between">
          <div
            className="col-xl-7 col-lg-6 col-md-10"
            data-aos="fade-right"
            data-aos-delay={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <h3 className="font-size-10 mb-0 letter-spacing-n83">
              Save time managing social media for your business
            </h3>
          </div>
          <div
            className="col-xl-5 col-lg-6 col-md-8"
            data-aos="fade-left"
            data-aos-delay={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <p className="font-size-7 mb-0 pr-xl-2 pr-lg-5 pr-md-10 pr-sm-20 mt-7 mt-lg-0">
              Minimize time consuming distractions, level up your team’s
              productivity by letting finity handle your comm.
            </p>
          </div>
        </div>
        {/* End Section title */}
        {/* Banner */}
        <div className="row">
          <div className="col-12">
            <div
              className="pt-10 pt-lg-17 rounded-10"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-once="true" data-aos-duration={1000}
            >
              <img
                className="w-100"
                src={imageOne}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* End Banner */}
        {/* Services */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <div className="square-60 bg-blue-3 shadow-dodger-blue-3 rounded-10 text-white font-size-7">
                <i className="fa fa-link" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Engage Teammates</h4>
                <p className="font-size-5 mb-0">
                  Typewolf is an independent typography resource created by
                  Jeremiah Shoaf. The site gets over 350,000 unique visitors a
                  month.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-once="true" data-aos-duration={1000}
            >
              <div className="square-60 bg-sunset shadow-sunset rounded-10 text-white font-size-7">
                <i className="fa fa-level-up-alt" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Level Up Productivity</h4>
                <p className="font-size-5 mb-0">
                  Typewolf is an independent typography resource created by
                  Jeremiah Shoaf. The site gets over 350,000 unique visitors a
                  month.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={900}
              data-aos-once="true" data-aos-duration={1000}
            >
              <div className="square-60 bg-dodger-blue-1 shadow-dodger-blue-1 rounded-10 text-white font-size-7">
                <i className="fa fa-hourglass-half" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Optimize Time</h4>
                <p className="font-size-5 mb-0">
                  Typewolf is an independent typography resource created by
                  Jeremiah Shoaf. The site gets over 350,000 unique visitors a
                  month.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Services */}
      </div>
    </div>
  );
};

export default ContentOne;
