import React from "react";

const FeatureCard = ({ options }) => {
  return (
    <div className="d-xs-flex">
      <div className="square-83 d-flex rounded-10 border mt-2">
        <img src={options.icon} alt="" />
      </div>
      <div className="mt-5 mt-xs-0 pl-xs-6">
        <h3 className="font-size-7 mb-1">{options.title}</h3>
        <p className="font-size-5 line-height-28 mb-0 pr-sm-10 pr-md-0 pr-xs-17 pr-lg-8 pr-xl-5">
          {options.content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
