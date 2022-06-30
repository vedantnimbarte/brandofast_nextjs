import React from "react";

const FeatureCard = ({ image, title, text }) => {
  return (
    <div className="d-flex bg-gray-3 rounded-10 pt-7 pl-7 pr-5 pb-7">
      <div className="mb-8 mr-8 bg-white circle-55">
        <img src={image} alt="" />
      </div>
      <div className="">
        <h4 className="font-size-7 mb-0 text-dark-cloud">{title}</h4>
        <p className="font-size-5 line-height-28 text-stone mr-xl-7 mb-0">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
