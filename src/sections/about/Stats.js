import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Stats = () => {
  return (
    <div className="bg-default-3 pt-13 pt-md-18 pt-lg-23 pb-5 pb-md-9 pb-lg-23">
      <div className="container">
        <div className="row justify-content-center">
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={10} />
                  </span>
                </LazyLoad>
              </h2>

              <p className="heading-default-color mb-0 font-size-5">
                Team Members
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={45} />
                  </span>
                  K
                </LazyLoad>
              </h2>
              <p className="heading-default-color mb-0 font-size-5">
                Monthly Active Users
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={900}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={81} />
                  </span>
                  K
                </LazyLoad>
              </h2>
              <p className="heading-default-color mb-0 font-size-5">
                Solved Tickets
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-3 col-xs-6">
            <div
              className="mb-11 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <h2 className="font-size-12 mb-5">
                <LazyLoad>
                  $
                  <span className="counter">
                    <CountUp duration={3} end={93} />
                  </span>
                  K
                </LazyLoad>
              </h2>
              <p className="heading-default-color mb-0 font-size-5">
                Monthly Saved by The Users
              </p>
            </div>
          </div>
          {/* End Single Counter */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
