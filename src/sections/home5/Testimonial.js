import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import imgB from "../../assets/image/home-5/png/testimonial-big-img.png";
import imgB2 from "../../assets/image/home-5/png/testimonial-big-img-2.png";
import imgB3 from "../../assets/image/home-5/png/testimonial-big-img-3.png";
import imgB4 from "../../assets/image/home-5/png/testimonial-big-img-4.png";
import imgU1 from "../../assets/image/home-5/png/user-img-1.png";
import imgU2 from "../../assets/image/home-5/png/user-img-2.png";
import imgU3 from "../../assets/image/home-5/png/user-img-3.png";
import imgU4 from "../../assets/image/home-5/png/user-img-4.png";

const SliderSmall = styled(Slider)`
  .slick-slide {
    width: auto !important;
  }
  .slick-slide.slick-current .single-img {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const sliderConfig1 = {
  slidesToShow: 1,
  arrows: false,
  fade:true
};

const sliderConfig2 = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerPadding: "20px",
  swipe: false,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="pt-4 pt-md-9 pt-lg-14 pb-15 pb-md-19 pb-lg-26 border-top border-default-color">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xl-7 col-lg-9 col-md-10"
            data-aos="zoom-in"
            data-aos-duration={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <Slider
              asNavFor={nav2}
              ref={(slider) => setNav1(slider)}
              className="l5-review-slider mt-13 mt-lg-21 mx-xl-0 mx-lg-10"
              {...sliderConfig1}
            >
              {/* Single Review */}
              <div className="single-review text-center focus-reset">
                <div className="mb-12 circle-265 mx-auto">
                  <img src={imgB} alt="" />
                </div>
                <p className="font-size-9 font-weight-bold heading-default-color">
                  So glad I waited for this model to be released. Finity did not
                  disappoint. These headphones are amazing!!
                </p>
                <div className="mt-11">
                  <h5 className="font-size-7 mb-0">Sylvia Plath</h5>
                  <p className="font-size-5">HR Manager</p>
                </div>
              </div>
              {/* End Single Review */}
              {/* Single Review */}
              <div className="single-review text-center focus-reset">
                <div className="mb-12 circle-265 mx-auto">
                  <img src={imgB2} alt="" />
                </div>
                <p className="font-size-9 font-weight-bold heading-default-color">
                  So glad I waited for this model to be released. Finity did not
                  disappoint. These headphones are amazing!!
                </p>
                <div className="mt-11">
                  <h5 className="font-size-7 mb-0">Sylvia Plath</h5>
                  <p className="font-size-5">HR Manager</p>
                </div>
              </div>
              {/* End Single Review */}
              {/* Single Review */}
              <div className="single-review text-center focus-reset">
                <div className="mb-12 circle-265 mx-auto">
                  <img src={imgB3} alt="" />
                </div>
                <p className="font-size-9 font-weight-bold heading-default-color">
                  So glad I waited for this model to be released. Finity did not
                  disappoint. These headphones are amazing!!
                </p>
                <div className="mt-11">
                  <h5 className="font-size-7 mb-0">Sylvia Plath</h5>
                  <p className="font-size-5">HR Manager</p>
                </div>
              </div>
              {/* End Single Review */}
              {/* Single Review */}
              <div className="single-review text-center focus-reset">
                <div className="mb-12 circle-265 mx-auto">
                  <img src={imgB4} alt="" />
                </div>
                <p className="font-size-9 font-weight-bold heading-default-color">
                  So glad I waited for this model to be released. Finity did not
                  disappoint. These headphones are amazing!!
                </p>
                <div className="mt-11">
                  <h5 className="font-size-7 mb-0">Sylvia Plath</h5>
                  <p className="font-size-5">HR Manager</p>
                </div>
              </div>
              {/* End Single Review */}

              {/* End Single Review */}
            </Slider>
          </div>
        </div>
        {/* l5-slider-dots */}
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-9"
            data-aos="zoom-in"
            data-aos-duration={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <SliderSmall
              asNavFor={nav1}
              ref={(slider) => setNav2(slider)}
              className="l5-slider-dots text-center mt-10 mx-xs-4 mx-md-0 mx-xl-6"
              {...sliderConfig2}
            >
              <div className="single-img circle-50 mx-3">
                <img src={imgU1} alt="" />
              </div>
              <div className="single-img circle-50 mx-3">
                <img src={imgU2} alt="" />
              </div>
              <div className="single-img circle-50 mx-3">
                <img src={imgU3} alt="" />
              </div>
              <div className="single-img circle-50 mx-3">
                <img src={imgU4} alt="" />
              </div>
            </SliderSmall>
          </div>
        </div>
        {/* End l5-slider-dots */}
      </div>
    </div>
  );
};

export default Testimonial;
