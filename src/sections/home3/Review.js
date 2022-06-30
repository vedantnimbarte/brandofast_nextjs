import React from "react";
import Card from "../../components/ReviewCard";

import sectionShape from "../../assets/image/home-3/png/section-overlay-1.png";

import reviewImageOne from "../../assets/image/home-3/png/review-img-1.png";
import reviewImageTwo from "../../assets/image/home-3/png/review-img-2.png";
import reviewImageThree from "../../assets/image/home-3/png/review-img-3.png";
import reviewImageFour from "../../assets/image/home-3/png/review-img-4.png";
import reviewImageFive from "../../assets/image/home-3/png/review-img-5.png";
import reviewImageSix from "../../assets/image/home-3/png/review-img-6.png";

const Review = ({ className, ...rest }) => {
  const ReviewData = [
    {
      image: reviewImageOne,
      name: "Aaron Almaraz",
      title: "CEO & Founder at Gearat",
    },
    {
      image: reviewImageTwo,
      name: "Phet Putrie",
      title: "Freelancer",
    },
    {
      image: reviewImageThree,
      name: "Lara Madrigal",
      title: "Marketing Specialist",
    },
    {
      image: reviewImageFour,
      name: "Marleah Eagleston",
      title: "Founder at Spicenet",
    },
    {
      image: reviewImageFive,
      name: "Prescott MacCaffery",
      title: "Writer",
    },
    {
      image: reviewImageSix,
      name: "Waiapi Karaka",
      title: "Designer, Freelancer",
    },
  ];

  return (
    <div className={`position-relative ${className}`} {...rest}>
      <div
        className="absolute-top-right"
        data-aos="fade-left"
        data-aos-delay={500}
      >
        <img src={sectionShape} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div
              className="text-center mb-8 mb-lg-19"
              data-aos="zoom-in"
              data-aos-delay={500}
            >
              <h2 className="font-size-10 mb-6">10,000+ people love us</h2>
              <p className="font-size-6 mb-0">
                These companies release their own versions of the operating
                systems with minor changes, and yet always.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay={800}
        >
          {ReviewData.map(({ image, name, title }, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-xs-10" key={index}>
                <Card image={image} name={name} title={title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
