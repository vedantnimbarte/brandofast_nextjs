import React, { useRef } from "react";
import Card from "../../components/FreatureCard";
import Slider from "react-slick";
import icon from "../../assets/image/svg/node.svg";
import icon2 from "../../assets/image/svg/node.svg";
import icon3 from "../../assets/image/svg/chat-45.svg";
import icon4 from "../../assets/image/svg/chat-45-2.svg";
import icon5 from "../../assets/image/svg/node.svg";

const Feature = ({ className, ...rest }) => {
  const elSlider = useRef();
  const sliderSettings = {
    autoplay: true,
    centerMode: true,
    centerPadding: "17%",
    slidesToShow: 3,
    arrows: false,
    touchMove: true,
    infinite: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          centerPadding: "10px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "80px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          centerPadding: "10%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  const featureCards = [
    {
      image: icon,
      title: "Find Leads",
      text:
        "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    },
    {
      image: icon2,
      title: "Team Collaboration",
      text:
        "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    },
    {
      image: icon3,
      title: "Instant Chat",
      text:
        "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    },
    {
      image: icon4,
      title: "Media Manager",
      text:
        "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    },
    {
      image: icon5,
      title: "Dedicated Storage",
      text:
        "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    },
  ];

  return (
    <div className={className} {...rest}>
      {/* feature section */}
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div
              className="text-center mb-8 mb-lg-14"
              data-aos="zoom-in"
              data-aos-delay={500}
            >
              <h2 className="font-size-10 mb-6 letter-spacing-n83">
                Solution made for you
              </h2>
              <p className="font-size-6 mb-0">
                These companies release their own versions of the operating
                systems with minor changes, and yet always.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Title */}
      </div>
      {/* feature slider */}
      <div className="row">
        <div className="col-12" data-aos="zoom-in" data-aos-delay={800}>
          {/* <div className="">
            </div> */}
          <Slider
            ref={elSlider}
            {...sliderSettings}
            className="l3-feature-slider d-flex"
          >
            {featureCards.map(({ image, title, text }, index) => {
              return (
                <Card image={image} title={title} text={text} key={index} />
              );
            })}
          </Slider>
        </div>
      </div>
      {/* End feature slider */}
      <div className="row justify-content-center">
        <div className="col-12">
          <div
            className="mt-10 mt-lg-12 text-center"
            data-aos="zoom-in"
            data-aos-delay={1000}
          >
            <a
              className="video-btn btn btn-blue-3 btn-2 rounded-5"
              href="https://www.youtube.com/watch?v=LWZ7iytIA6k"
            >
              <i className="fa fa-play-circle mr-5" /> See Finity in Action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
