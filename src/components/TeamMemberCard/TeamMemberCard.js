import React from "react";

const FeatureCard = ({ options }) => {
  return (
    <div className="bg-white border rounded-10 mb-9 px-5 pl-xs-9 pr-xs-5 pl-lg-5 pr-lg-3 pl-xl-9 pr-xl-5 py-8">
      <div className="d-flex align-items-center">
        <div className="circle-88 mr-7">
          <img src={options.image} alt="" />
        </div>
        <div className="mb-0">
          <h4 className="font-size-7 line-height-reset mb-2 text-dark-cloud">
            {options.name}
          </h4>
          <p className="font-size-5 mb-0 text-bali-gray">{options.title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
