import React from "react";
import Slider from "react-slick";

import imgMF from "../../assets/image/home-6/png/mobile-frame.png";
import imgS1 from "../../assets/image/home-6/svg/First Page Icon Image And More-22.svg";
import imgS2 from "../../assets/image/home-6/svg/First Page Icon Image And More-23.svg";
import imgS3 from "../../assets/image/home-6/svg/First Page Icon Image And More-24.svg";
import imgS4 from "../../assets/image/home-6/svg/First Page Icon Image And More-25.svg";
import imgS5 from "../../assets/image/home-6/svg/First Page Icon Image And More-26.svg";
// import imgS6 from "../../assets/image/home-6/png/screenshot-6.png";

const Testimonial = ({ className, ...rest }) => {
  const slickSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "130px",
    autoplay: false,
    autoplaySpeed: 3000,
    easing: "linear",
    speed: 500,
    appendDots: (dots) => (
      <>
        <div className="screenshots-dots">
          <div className="slick-dots">{dots}</div>
        </div>
      </>
    ),

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 4,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="text-center dark-mode-texts mb-8 mb-lg-18">
                <h2 className="font-size-10">Sectors That We Help</h2>
                <p
                  className="font-size-5 mb-0"
                  style={{
                    color: "white",
                  }}
                >
                  Our techniques have cemented us in the market and have helped{" "}
                  {""} <br className="d-none d-md-block" />
                  us create these amazing designs for multiple industries. {
                    ""
                  }{" "}
                  <br className="d-none d-md-block" />
                  Brandofast has branding solutions for any type of business or
                  brand.
                  {""} <br className="d-none d-md-block" />
                </p>
              </div>
            </div>
          </div>
          {/* End Section Title */}
        </div>
        <div className="screenshot-slider-wrapper mb-5">
          <Slider
            {...slickSettings}
            css={`
              .slick-dots {
                display: flex !important;
              }
              .screenshots-dots .slick-dots li.slick-active {
                background-color: #f7f9fc !important;
              }
              .screenshots-dots .slick-dots li button {
                background-color: #ccccff !important;
              }
            `}
            className="screenshot-slider"
          >
            <div
              className="single-slide focus-reset"
              style={{
                display: "inline-block",
              }}
            >
              <div
                className="screenshot-image"
                style={{
                  width: "400px",
                }}
              >
                <img src={imgS1} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div
                className="screenshot-image"
                style={{
                  width: "420px",
                }}
              >
                {/* style={{
                width: "404px",
                margin: "28px 0px 0px 28px"
              }} */}
                <img src={imgS2} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div
                className="screenshot-image"
                style={{
                  width: "430px",
                }}
              >
                <img src={imgS3} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div
                className="screenshot-image"
                style={{
                  width: "420px",
                }}
              >
                <img src={imgS4} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div
                className="screenshot-image"
                style={{
                  width: "420px",
                }}
              >
                <img src={imgS5} alt="" />
              </div>
            </div>
          </Slider>
          <div
            className="phone-bg-img"
            css={`
              @media (min-width: 690px) {
                transform: translate(-50%, -53%) !important;
              }
            `}
          >
            <img src={imgMF} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
