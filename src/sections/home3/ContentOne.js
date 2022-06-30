import React from "react";

import imageOne from "../../assets/image/home-3/png/desktop-dashboard-full.png";
import imageTwo from "../../assets/image/home-3/png/image-gallery-card.png";
import imageThree from "../../assets/image/home-3/png/yellow-card.png";

import iconOne from "../../assets/image/svg/connect.svg";
import iconTwo from "../../assets/image/svg/chart-growth.svg";
import iconThree from "../../assets/image/svg/storage.svg";

const ContentOne = ({ className, ...rest }) => {
  const widgetArray = [
    {
      title: "Connect with new people",
      icon: iconOne,
    },
    {
      title: "Increase chance to engage",
      icon: iconTwo,
    },
    {
      title:
        "Unlimited storage <span className='ml-6 badge bg-golden-yellow text-uppercase font-size-3 px-3 rounded-5'>Pro</span>",
      icon: iconThree,
    },
  ];

  return (
    <div className={`position-relative ${className}`} {...rest}>
      <div className="container position-static">
        <div className="row position-static justify-content-center justify-content-lg-start">
          <div className="col-xl-5 col-lg-7 col-md-10 col-sm-10 order-2 order-lg-1">
            <div className="pr-md-20 pr-xl-5">
              {/* Section Title */}
              <div
                className="mb-5 mb-lg-13 pr-md-15 pr-lg-10 pr-xl-0"
                data-aos="fade-right"
                data-aos-delay={500}
              >
                <h2 className="font-size-10 mb-8">
                  Get all your emails in a single place
                </h2>
                <p className="font-size-6 mb-0">
                  These companies release their own versions of the operating
                  systems with minor changes, and yet always with the same
                  bottom line.{" "}
                </p>
              </div>
              {/* End Section Title */}
              <div className="list" data-aos="fade-right" data-aos-delay={800}>
                {widgetArray.map(({ title, icon }, index) => {
                  return (
                    <div className="d-flex align-items-center mb-6" key={index}>
                      <div className="circle-59 bg-gray-3 mr-6">
                        <img src={icon} alt="" />
                      </div>
                      <p
                        className="font-size-8 heading-default-color font-weight-medium mb-0"
                        dangerouslySetInnerHTML={{ __html: title }}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-xs-10 position-static order-1 order-lg-2">
            <div className="l3-content-image-group-4 position-lg-absolute mb-13 mb-lg-0">
              <div className="img-1 shadow-5">
                <img className="w-100 w-lg-auto" src={imageOne} alt="" />
                <div className="img-2 rounded-10">
                  <img className="w-100 w-lg-auto" src={imageTwo} alt="" />
                </div>
                <div className="img-3">
                  <img className="w-100 w-lg-auto" src={imageThree} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
