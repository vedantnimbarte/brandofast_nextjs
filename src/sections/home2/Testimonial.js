import React, { useRef } from "react";
import Slider from "react-slick";

import TestimonialCard1 from "../../components/TestimonialCard1";
import imgT1 from "../../assets/image/home-2/png/testimonial-img-1.png";
import imgT2 from "../../assets/image/home-2/png/testimonial-img-2.png";
import imgT3 from "../../assets/image/home-2/png/testimonial-img-3.png";
import imgT4 from "../../assets/image/home-2/png/testimonial-img-4.png";

const items = [
  {
    image: imgT1,
    content:
      "I owe these guys my life. Already used their landing page templates for my latest two projects.",
    userlink: "- @thepatwalls",
  },
  {
    image: imgT2,
    content:
      "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…",
    userlink: "- @thepatwalls",
  },
  {
    image: imgT3,
    content:
      "I owe these guys my life. Already used their landing page templates for my latest two projects. ",
    userlink: "- @thepatwalls",
  },
  {
    image: imgT4,
    content:
      "I owe these guys my life. Already used their landing page templates for my latest two projects.",
    userlink: "- @thepatwalls",
  },
  {
    image: imgT3,
    content:
      "I owe these guys my life. Already used their landing page templates for my latest two projects.",
    userlink: "- @thepatwalls",
  },
];

const Testimonial = ({ className, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="mb-8 mb-lg-5">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-9">
                <div
                  className="mb-8 mb-lg-16 mb-md-0 text-center text-md-left"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <span className="bg-dodger-blue-2-op1 circle-84 font-size-9 mb-5 mb-lg-11 mx-auto mx-md-0">
                    <i className="fa fa-heart text-dodger-blue-2"></i>
                  </span>
                  <h2 className="font-size-11 mb-0">
                    1,000+ customers are loving Instappoint.
                  </h2>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-3"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="testimonial-one-button text-center text-md-right mt-3 mt-md-18">
                  <button
                    type="button"
                    className="slick-prev"
                    onClick={() => {
                      elSlider.current.slickPrev();
                    }}
                  >
                    <i className="icon icon-minimal-left"></i>
                  </button>
                  <button
                    type="button"
                    className="slick-next"
                    onClick={() => {
                      elSlider.current.slickNext();
                    }}
                  >
                    <i className="icon icon-minimal-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          {/* <!-- category slider --> */}
          <div className="row">
            <div className="col-12">
              <div className="testimonial-one">
                <Slider
                  ref={elSlider}
                  {...slickSettings}
                  css={`
                    .slick-dots {
                      display: flex !important;
                    }
                  `}
                >
                  {items.map((item, index) => (
                    <div className="single-category focus-reset" key={index}>
                      <TestimonialCard1 options={item} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* <!-- End category slider --> */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
