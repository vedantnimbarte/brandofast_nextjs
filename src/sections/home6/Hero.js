import React from "react";
import brandImg from "../../assets/image/svg/gif-maker.gif";
const Hero = ({ className, ...rest }) => {
  return (
    <>
      <style jsx>
        {`
          .image-fit {
            transform: scale(0);
            left: 41%;
            width: 45%;
            background: "#000";
          }
        `}
      </style>
      {/* <div className={className} {...rest}> */}
      <div
        className="container position-static"
        style={{
          marginTop: "3%",
        }}
      >
        <div className="row p-5 align-items-center justify-content-center position-static">
          {/* Hero Content */}
          <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1
                className="font-size-10 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84"
                style={{
                  color: "#010C48",
                }}
              >
                Give your brand a {""} <br className="d-none d-md-block" />
                facelift!
              </h1>

              <p
                className="font-size-5 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18"
                style={{
                  color: "#7B7F86",
                }}
              >
                Free Branding and say goodbye to traditional {""}{" "}
                <br className="d-none d-md-block" />
                advertising methods. Let Brandofast worry about {""}{" "}
                <br className="d-none d-md-block" />
                handling your brand image, while you save time {""}{" "}
                <br className="d-none d-md-block" />
                and spend less!
              </p>

              <div className="d-flex align-items-center py-6 mr-xl-15">
                <div className="mr-7">
                  <a
                    href="/#"
                    className="bg-sunset text-white circle-76 video-btn"
                    style={{
                      color: "#FC4707",
                    }}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   gContext.toggleVideoModal();
                    // }}
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="mt-0">
                  <h4 className="font-size-8 mb-0">Get started!</h4>
                  <p className="font-size-5 mb-0">
                    Have a look at Brandofast’s Features
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Hero Content */}

          {/* Hero Image */}
          <div className="col-lg-6 col-md-10 col-sm-11 position-static">
            <div className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25">
              <img
                src={brandImg}
                alt="Hero Icon"
                data-aos="fade-up"
                data-aos-delay={500}
              />
            </div>
          </div>
          {/* End Hero Image */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
