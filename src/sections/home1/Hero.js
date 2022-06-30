import React from "react";
import Select from "../../components/Select";
import Link from "next/link";
import imgA from "../../assets/image/home-1/png/arrow-down-big.png";
import backgroundImage from "../../assets/image/home-1/jpg/hero-bg-1.jpg";

const defaultOptions = [
  { value: "NY", label: "New York" },
  { value: "SI", label: "Singapore" },
  { value: "LN", label: "London" },
  { value: "DH", label: "Dhaka" },
];

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="pt-15 pt-lg-20">
        <div
          className="bg-img-1 bg-images pt-18 pt-lg-25 pt-xl-33 mx-lg-13 mx-xl-15 bg-gradient-2"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-8">
                <div className="dark-mode-texts">
                  <h1 className="font-size-12 mb-8">
                    Join the most popular tech companies.
                  </h1>
                  <p className="font-size-7 mb-0 text-white">
                    We’ve helped over 2,500 job seekers to get into{" "}
                    <br className="d-none d-md-block" /> the most popular tech
                    teams.
                  </p>
                  <Link href={"/#"}>
                    <a className="pt-11">
                      <img src={imgA} alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="mt-13 mt-lg-18 mt-xl-23 w-100 shadow-1">
                  <form
                    action="/"
                    className="search-form-one"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div className="filter-search-form-2 bg-white rounded-0 shadow-7 d-lg-flex justify-content-between align-items-center pl-lg-6">
                      <div className="filter-inputs d-xs-flex w-100">
                        <div className="form-group mb-0 focus-reset w-100 w-lg-50 text-bali-gray position-relative d-flex align-items-center">
                          <input
                            className="form-control focus-reset pl-13 pr-10 pr-lg-0 border-0 w-100 font-size-5 text-bali-gray py-10 py-xs-5 py-lg-13 py-lg-0"
                            type="text"
                            id="keyword"
                            placeholder="Try “Software Developer”"
                          />
                          <span className="form-icon font-size-5 absolute-top-left">
                            <i className="icon icon-zoom-2 text-bali-gray font-weight-bold"></i>
                          </span>
                        </div>
                        {/* <!-- .select-city starts --> */}
                        <div className="form-group border-top-dotted mb-0 w-100 w-lg-50 position-relative pt-5 pb-6 pt-lg-9 pb-lg-10 py-lg-0 d-flex align-items-center">
                          <Select
                            options={defaultOptions}
                            className="h-100 arrow-3 focus-reset w-100 text-dark-cloud hero-search-select font-size-5 pl-7"
                            border={false}
                            css={`
                              border-left: 2px dotted #e2e4e8;
                            `}
                          />

                          <span className="form-icon font-size-5 absolute-top-left">
                            <i className="icon icon-pin-3 text-bali-gray font-weight-bold"></i>
                          </span>
                        </div>
                        {/* <!-- ./select-city ends --> */}
                      </div>
                      <div className="button-block">
                        <button className="btn btn-primary line-height-reset btn-hero-btn rounded-0 w-100 w-lg-inherit font-weight-medium">
                          Search Job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
