import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import imgHeart from "../../assets/image/home-2/png/heart-icon-group.png";
import imgStars from "../../assets/image/home-2/png/star-group.png";
import imgL1 from "../../assets/image/home-2/png/company-logo/company-logo-1.png";
import imgL2 from "../../assets/image/home-2/png/company-logo/company-logo-2.png";
import imgL3 from "../../assets/image/home-2/png/company-logo/company-logo-3.png";



const Counter = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            {/* Left */}
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div className="row">
                {/* Single Counter */}
                <div className="col-xs-6">
                  <div
                    className="mb-11 mb-lg-0"
                    data-aos="fade-left"
                    data-aos-once="true" data-aos-duration={1000}
                    data-duration={1000}
                  >
                    <h2 className="font-size-12 mb-6">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={4} end={10} />K
                        </span>
                      </LazyLoad>
                    </h2>
                    <div className="mt-5">
                      <img className="mb-7" src={imgHeart} alt="" />
                      <h5 className="font-size-5 font-weight-normal mb-1">
                        Active Downloads
                      </h5>
                      <p className="font-size-5 text-dodger-blue-2 mb-0">
                        On Websites
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Counter */}
                {/* Single Counter */}
                <div className="col-xs-6">
                  <div
                    className="mb-11 mb-lg-0"
                    data-aos="fade-left"
                    data-aos-once="true" data-aos-duration={1000}
                    data-duration={1000}
                  >
                    <h2 className="font-size-12 mb-6">
                      <LazyLoad>
                        <CountUp duration={4} end={4} className="counter" />.
                        <CountUp duration={3} end={7} className="counter" />
                      </LazyLoad>
                    </h2>
                    <div className="mt-5">
                      <img className="mb-7" src={imgStars} alt="" />
                      <h5 className="font-size-5 font-weight-normal mb-1">
                        1,938 Rating
                      </h5>
                      <p className="font-size-5 text-dodger-blue-2 mb-0">
                        WordPress Community
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Counter */}
              </div>
            </div>
            {/* Left End */}
            {/* Right Start */}
            <div className="col-lg-6 offset-xl-1">
              <div className="row">
                <div className="col-lg-12 col-md-7 col-xs-9">
                  <div
                    className="section-title"
                    data-aos="flip-up"
                    data-aos-once="true" data-aos-duration={1000}
                    data-duration={1000}
                  >
                    <h2 className="font-size-9 pr-xl-22 mb-7 mb-lg-11 pr-lg-0">
                      Trusted by 25,000+ happy Marketers and WordPress users
                      since 2018.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h6 className="font-size-6 font-weight-normal text-stone mb-5 mb-lg-9">
                    Also featured in
                  </h6>
                  <div className="row align-items-center justify-content-lg-between">
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo mx-5 my-6"
                      data-aos="fade-in"
                      data-aos-duration={400}
                      data-aos-once="true" data-aos-duration={1000}
                      data-duration={1000}
                    >
                      <img src={imgL1} alt="" />
                    </div>
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo mx-5 my-6"
                      data-aos="fade-in"
                      data-aos-duration={600}
                      data-aos-delay={300}
                      data-aos-once="true" data-aos-duration={1000}
                      data-duration={1000}
                    >
                      <img src={imgL2} alt="" />
                    </div>
                    {/* Single Brand */}
                    <div
                      className="single-brand-logo mx-5 my-6"
                      data-aos="fade-in"
                      data-aos-duration={800}
                      data-aos-delay={500}
                      data-aos-once="true" data-aos-duration={1000}
                      data-duration={1000}
                    >
                      <img src={imgL3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
