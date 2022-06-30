import React, { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../assets/image/home-1/png/analytics.png";
import img2 from "../../assets/image/home-1/png/business-agent.png";
import img3 from "../../assets/image/home-1/png/code.png";
import img4 from "../../assets/image/home-1/png/headphones-2.png";
import img5 from "../../assets/image/home-1/png/coins.png";
import img6 from "../../assets/image/home-1/png/drop.png";

const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const items = [
  {
    title: "Marketing",
    image: img1,
    jobs: 472,
  },
  {
    title: "Human Resource",
    image: img2,
    jobs: 172,
  },
  {
    title: "Developer",
    image: img3,
    jobs: 272,
  },
  {
    title: "Customer Support",
    image: img4,
    jobs: 2172,
  },
  {
    title: "Finance",
    image: img5,
    jobs: 422,
  },
  {
    title: "Design",
    image: img6,
    jobs: 222,
  },
];

const Categories = ({ className, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    centerPadding: "28%",
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "25%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1595,
        settings: {
          centerPadding: "15%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1488,
        settings: {
          centerPadding: "10%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          centerPadding: "16%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "12%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "5%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 890,
        settings: {
          centerPadding: "18%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          centerPadding: "15%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          centerPadding: "30%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "28%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          centerPadding: "26%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: "24%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: "22%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "18%",
          slidesToShow: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
          autoplay: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <Container>
          <Row className="row align-items-center justify-content-between mb-12 mb-lg-19">
            <Col sm="12" md="6" lg="6" xl="5">
              <div
                className="mb-8 mb-md-3 text-center text-md-left"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h2 className="font-size-11 font-weight-medium mb-0">
                  Explore <br className="d-none d-md-block"></br> by category
                </h2>
              </div>
            </Col>
            <Col md="4">
              <div className="l1-category-slider text-center text-md-right">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickPrev();
                  }}
                >
                  <i className="icon icon-small-left"></i>
                </button>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickNext();
                  }}
                >
                  <i className="icon icon-small-right"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          className="category-one"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <SliderStyled ref={elSlider} {...slickSettings} className="h1-category-slider">
            {items.map(({ link = "/#", title, image, jobs }, index) => (
              <Link key={index} href={link}>
                <a
                  className="single-category mx-xs-9 mx-lg-7 focus-reset slick-slide"
                  tabIndex="-1"
                >
                  <div className="bg-white shadow-2 pl-10 pr-5 pt-19 pb-6 min-w-255 min-h-222 gr-hover-1 mb-15 mb-lg-25">
                    <div className="mb-8">
                      <img src={image} alt="" />
                    </div>
                    <h4 className="font-size-7 font-weight-medium text-dark-cloud mb-1">
                      {title}
                    </h4>
                    <p className="font-size-3 text-bali-gray mb-0 letter-spacing-reset">
                      {jobs} Jobs
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </SliderStyled>
        </div>
      </div>
    </>
  );
};

export default Categories;
