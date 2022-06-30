import React from "react";

const ReviewCard = ({ image, title, name }) => {
  return (
    <div className="bg-white border rounded-10 mb-9 pl-7 pt-6 pb-2 pr-7">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center mb-5">
          <div className="media align-items-center">
            <div className="mr-5 circle-41">
              <img src={image} alt="" />
            </div>
            <div className="">
              <h4 className="font-size-6 font-weight-medium mb-0 text-dark-cloud">
                {name}
              </h4>
              <p className="font-size-3 mb-0 text-stone">{title}</p>
            </div>
          </div>
        </div>
        <span className="text-scooter mt-n6">
          <i className="fab fa-twitter" />
        </span>
      </div>
      <p className="font-size-5 line-height-28 text-stone">
        Time is the most precious thing you have when bootstrapping. You can't
        take time to ponder on design…
      </p>
    </div>
  );
};

export default ReviewCard;
