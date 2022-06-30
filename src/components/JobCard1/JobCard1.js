import React from "react";
import Link from "next/link";
const FeatureCard = ({ options }) => {
  return (
    <Link href={"/career-details"}>
      <a className="bg-white shadow-2 px-10 pt-9 pb-10 mb-9 gr-hover-1">
        <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
          <p className="font-size-5 text-bali-gray mb-0 mr-5 mb-5 d-flex align-items-center">
            <i className="fa fa-map-marker-alt mr-1 text-bali-gray"></i>
            <span>{options.location}</span>
          </p>
          <div
            className={`bg-${options.color}-op1 text-${options.color} px-3 py-2 font-size-3 rounded-5 mb-5 min-w-76 text-center`}
          >
            {options.jobType}
          </div>
        </div>
        <h4 className="mb-13 mb-lg-25 font-size-8 text-dark-cloud font-weight-medium pr-md-10 pr-lg-0 pr-xl-13 line-height-34">
          {options.heading}
        </h4>
        <div className="media">
          <div className="mr-5">
            <img className="circle-34" src={options.image} alt="" />
          </div>
          <div className="user-info">
            <h5 className="font-size-6 font-weight-medium text-dark-cloud line-height-reset mb-1">
              {options.companyName}
            </h5>
            <p className="font-size-3 text-bali-gray mb-0">
              {options.postTime}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FeatureCard;
