import React from "react";

const Pricing = () => {
  return (
    <div className="pb-5 pb-md-11 pb-lg-19">
      <div className="container">
        <div className="row justify-content-center">
          {/* Single Table */}
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={300}
              data-aos-once="true" data-aos-duration={1000}
            >
              <p className="text-dodger-blue-1 font-size-5 mb-9">Basic</p>
              <h2 className="font-size-11 mb-1">$0</h2>
              <span className="font-size-5 mb-2">free forever</span>
              <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                <li className="mb-7">Drag &amp; Drop Builder</li>
                <li className="mb-7">100s of Templates Ready</li>
                <li className="mb-7">Blog Tools</li>
                <li className="mb-7 text-stone">
                  <del>eCommerce Store</del>
                </li>
              </ul>
              <div className="pt-7">
                <a className="btn btn-blue-3 btn-2 rounded-5" href="/#">
                  Start 14 days free trial
                </a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
          {/* Single Table */}
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-once="true" data-aos-duration={1000}
            >
              <p className="text-dodger-blue-1 font-size-5 mb-9">Standard</p>
              <h2 className="font-size-11 mb-1">$19</h2>
              <span className="font-size-5 mb-2">first 14 days free</span>
              <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                <li className="mb-7">Drag &amp; Drop Builder</li>
                <li className="mb-7">100s of Templates Ready</li>
                <li className="mb-7">Blog Tools</li>
                <li className="mb-7">eCommerce Store</li>
              </ul>
              <div className="pt-7">
                <a className="btn btn-blue-3 btn-2 rounded-5" href="/#">
                  Start 14 days free trial
                </a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
          {/* Single Table */}
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-once="true" data-aos-duration={1000}
            >
              <p className="text-dodger-blue-1 font-size-5 mb-9">Premium</p>
              <h2 className="font-size-11 mb-1">$49</h2>
              <span className="font-size-5 mb-2">first 14 days free</span>
              <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                <li className="mb-7">Drag &amp; Drop Builder</li>
                <li className="mb-7">100s of Templates Ready</li>
                <li className="mb-7">Blog Tools</li>
                <li className="mb-7">eCommerce Store</li>
              </ul>
              <div className="pt-7">
                <a className="btn btn-blue-3 btn-2 rounded-5" href="/#">
                  Start 14 days free trial
                </a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
