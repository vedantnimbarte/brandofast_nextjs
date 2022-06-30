import React from "react";

const JobCard2 = ({ options }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center mb-5 mr-5">
          <i className="icon icon-pin-3 mr-2 text-bali-gray position-relative" />
          <span className="text-bali-gray font-size-5">{options.location}</span>
        </div>
        <span
          className={`badge bg-${options.badgeColor}-op1 d-inline-block text-${options.badgeColor} py-4 px-2 min-w-76 d-block line-height-reset mb-5 rounded-5 font-size-3 font-weight-normal`}
        >
          {options.badgeText}
        </span>
      </div>
      <h5 className="pt-6 text-dark-cloud font-size-7 font-weight-medium line-height-reset mb-5">
        {options.title}
      </h5>
    </div>
  );
};

export default JobCard2;
