import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";

import brand from "../../assets/image/home-6/png/First Page Icon Image And More-51.png";
import brandLight from "../../assets/image/home-6/png/First Page Icon Image And More-51.png";
import brand2 from "../../assets/image/home-6/png/First Page Icon Image And More-52.png";
import brandLight2 from "../../assets/image/home-6/png/First Page Icon Image And More-52.png";
import brand3 from "../../assets/image/home-6/png/First Page Icon Image And More-53.png";
import brandLight3 from "../../assets/image/home-6/png/First Page Icon Image And More-53.png";
import brand4 from "../../assets/image/home-6/png/First Page Icon Image And More-54.png";
import brandLight4 from "../../assets/image/home-6/png/First Page Icon Image And More-54.png";
import brand5 from "../../assets/image/home-6/png/First Page Icon Image And More-55.png";
import brandLight5 from "../../assets/image/home-6/png/First Page Icon Image And More-55.png";
import brand6 from "../../assets/image/home-6/png/First Page Icon Image And More-56.png";
import brandLight6 from "../../assets/image/home-6/png/First Page Icon Image And More-56.png";


import userImage1 from "../../assets/image/home-6/png/Zaneta Crenshaw.png";
import userImage2 from "../../assets/image/home-6/png/Merrie Verrier.png";
import userImage3 from "../../assets/image/home-6/png/Arlette G.png";
import userImage4 from "../../assets/image/home-6/png/Jamie Hughes.png";
import userImage5 from "../../assets/image/home-6/png/Cole Garbrandt.png";
import userImage6 from "../../assets/image/home-6/png/Synthia Hank.png";


import imgM from "../../assets/image/home-6/png/First Page Icon Image And More-58.png";
import imgM2 from "../../assets/image/home-6/png/First Page Icon Image And More-61.png";
import imgM3 from "../../assets/image/home-6/png/First Page Icon Image And More-64.png";
import imgM4 from "../../assets/image/home-6/png/First Page Icon Image And More-67.png";

const sliderNavigationData = [
  {
    darkLogo: brand,
    lightLogo: brandLight,
  },
  {
    darkLogo: brand2,
    lightLogo: brandLight2,
  },
  {
    darkLogo: brand3,
    lightLogo: brandLight3,
  },
  {
    darkLogo: brand4,
    lightLogo: brandLight4,
  },
  {
    darkLogo: brand5,
    lightLogo: brandLight5,
  },
  {
    darkLogo: brand6,
    lightLogo: brandLight6,
  },
];

const mainSliderData = [
  {
    text:
      "“Brandofast impressed me on multiple levels. Their strategies and way of thinking are simply unbelievable! I would like to personally thank you for your outstanding product.”",
    image: userImage1,
    name: "Zaneta Crenshaw",
    position: "Team Manager",
  },
  {
    text:
      "“It really saves me time and effort. Brandofast is exactly what our business has been lacking. You've saved our business! I love Brandofast.”",
    image: userImage2,
    name: "Merrie Verrier",
    position: "Team Manager",
  },
  {
    text:
      "“I love Brandofast. Thank you so much for your help. We have no regrets! I couldn't have asked for more than this.”",
    image: userImage3,
    name: "Arlette G.",
    position: "Team Manager",
  },
  {
    text:
      "“Can’t believe how easily they handle intense projects! Thanks for always delivering on time!”",
    image: userImage4,
    name: "Jamie Hughes",
    position: "Team Manager",
  },
  {
    text:
      "“Great with their services. Would recommend it to everyone for branding! My Website has skyrocketed thanks to you guys <3!”",
    image: userImage5,
    name: "Cole Garbrandt",
    position: "Team Manager",
  },
  {
    text:
      "“Brandofast is worth a fortune for our company. I still can’t believe we managed to find you guys. Thanks for all the support over the years!”",
    image: userImage6,
    name: "Synthia Hank",
    position: "Team Manager",
  }
];


class Testimonial extends Component {

  constructor(props) {
    super()
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav2: this.slider3,
    });
  }

  render() {

    return (
      <div className="bg-default-4 pt-10 pt-lg-22 pb-11 pb-lg-23 border-top border-default-color" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Brand Logos */}
              <Slider
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={6}
                dots={false}
                arrows={false}
                focusOnSelect={true}
                centerPadding={"60px"}
                swipe={false}
                responsive={[{
                  breakpoint: 1180,
                  settings: {
                    slidesToShow: 6
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 6
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 530,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 2
                  }
                }
                ]}
                className="l4-tab-slider border-bottom d-flex"
              >
                {sliderNavigationData.map(({ darkLogo, lightLogo }, index) => {
                  return (
                    <div
                      className="single-tab d-flex flex-column justify-content-center"
                      key={`${index.toString()}-n`}
                    >
                      <img
                        className="light-version-logo"
                        src={darkLogo}
                        alt=""
                      />
                    </div>
                  );
                })}
              </Slider>
              {/* End Brand Logos */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <Slider
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
                arrows={false}
                className="l4-review-slider mt-13 mt-lg-21 mx-xl-0 mx-lg-10 mx-md-8"
                fade={true}
              >
                {mainSliderData.map(({ text, image, name, position }, index) => {
                  return (
                    <React.Fragment key={`${index.toString()}-m`}>
                      {/* Single Review */}
                      <div className="single-review text-center focus-reset">
                        <p className="font-size-5 font-weight-bold heading-default-color" style={{
                          color: "black"
                        }}>
                          {text}
                        </p>
                        <div className="mt-13">
                          <div className="mb-8 circle-100 mx-auto overflow-hidden">
                            <img src={image} alt="" className="w-100" />
                          </div>
                          <h5 className="font-size-6 mb-0">{name}</h5>
                          <p className="font-size-5">{position}</p>
                        </div>
                      </div>
                      {/* End Single Review */}
                    </React.Fragment>
                  );
                })}

              </Slider>
            </div>
          </div>
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
              <div
                className="text-center mb-lg-5"
                data-aos="zoom-in"
                data-aos-duration={500}
              >
                <h2 className="font-size-10 letter-spacing-n83 mb-6" style={{
                  color: "black"
                }}>
                  Get what you want
                </h2>
                <p className="font-size-7 mb-0" style={{
                  color: "black"
                }}>
                  A range of industries and services to choose from. {""} <br className="d-none d-md-block" />
                  No matter what business, we got you covered!
                </p>
              </div>
            </div>
          </div>
          {/* End Section Title */}
          <div className="pt-13 pt-lg-16">
            <div className="row justify-content-center px-xl-0">
              {/* <Slider
                asNavFor={this.state.nav3}
                ref={(slider) => (this.slider3 = slider)}
                slidesToShow={4}
                dots={false}
                arrows={false}
                focusOnSelect={true}
                centerPadding={"0px"}
                swipe={false}
                className="l4-review-slider mt-13 mt-lg-21 mx-xl-0 mx-lg-10 mx-md-8"
                            
              > */}
                {/* single card */}
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8" style={{
                  display: "contents !important"
                }} >
                  <div
                    className="bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                    data-aos="zoom-in"
                    data-aos-duration={300}
                  >
                    <div className="mb-14">
                      <img className="w-100" src={imgM} alt="" />
                    </div>
                    <span className="badge rounded-40 px-5 py-2 line-height-reset 
                      min-w-63 font-size-5 d-inline-block mb-7" style={{
                        color: "white",
                        backgroundColor: "#2582F0"
                      }}>
                      $25
                    </span>
                    <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                      Brandofast {""} <br className="d-none d-md-block" />
                      Post Package
                    </h5>
                    <Link href="/#">
                      <a className="btn rounded-5 min-w-144 h-55"
                        style={{
                          color: "white",
                          backgroundColor: "blue"
                        }}
                      >
                        Buy now
                      </a>
                    </Link>
                  </div>
                </div>
                {/* end single card */}
                {/* single card */}
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
                  <div
                    className="bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                    data-aos="zoom-in"
                    data-aos-duration={600}
                  >
                    <div className="mb-14">
                      <img className="w-100" src={imgM2} alt="" />
                    </div>
                    <span className="badge rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7" style={{
                      color: "white",
                      backgroundColor: "red"
                    }}>
                      $25
                    </span>
                    <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                      Brandofast {""} <br className="d-none d-md-block" />
                      NGO Kit
                    </h5>
                    <Link href="/#">
                      <a className="btn rounded-5 min-w-144 h-55" style={{
                        color: "white",
                        backgroundColor: "red"
                      }}>
                        Buy now
                      </a>
                    </Link>
                  </div>
                </div>
                {/* end single card */}
                {/* single card */}
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
                  <div
                    className="bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                    data-aos="zoom-in"
                    data-aos-duration={900}
                  >
                    <div className="mb-14">
                      <img className="w-100" src={imgM3} alt="" />
                    </div>
                    <span className="badge rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7"
                      style={{
                        color: "white",
                        backgroundColor: "#00ff00"
                      }}>
                      $25
                    </span>
                    <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                      Brandofast {""} <br className="d-none d-md-block" />
                      Personal Branding
                    </h5>
                    <Link href="/#">
                      <a className="btn rounded-5 min-w-144 h-55" style={{
                        color: "white",
                        backgroundColor: "green"
                      }}>
                        Buy now
                      </a>
                    </Link>
                  </div>
                </div>
                {/* end single card */}
                {/* single card */}
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
                  <div
                    className="bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                    data-aos="zoom-in"
                    data-aos-duration={1200}
                  >
                    <div className="mb-14">
                      <img className="w-100" src={imgM4} alt="" />
                    </div>
                    <span className="badge rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7"
                      style={{
                        color: "white",
                        backgroundColor: "grey"
                      }}>
                      $25
                    </span>
                    <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                      Brandofast {""} <br className="d-none d-md-block" />
                      Content Creator
                    </h5>
                    <Link href="/#">
                      <a className="btn rounded-5 min-w-144 h-55" style={{
                        color: "white",
                        backgroundColor: "black"
                      }}>
                        Buy now
                      </a>
                    </Link>
                  </div>
                </div>
                {/* end single card */}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Testimonial;

