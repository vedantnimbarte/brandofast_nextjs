import React from "react";
import Link from "next/link";
import imageOne from "../../assets/image/home-4/png/l4-hero-desktops-img.png";
import imageTwo from "../../assets/image/home-4/png/l4-hero-phone-img.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row position-static">
          <div className="col-xl-4 col-lg-4 col-md-10 position-static">
            <div className="l4-hero-image-group pt-lg-3">
              <div className="hero-images">
                <div className="img-1">
                  <img
                    className="w-100 w-lg-auto shadow-14 opacity-8"
                    src={imageOne}
                    alt=""
                    data-aos="fade-left"
                    data-aos-duration={600}
                    data-aos-once="true" data-aos-duration={1000}
                  />
                </div>
                <div className="img-2">
                  <img
                    className="w-100 w-lg-auto shadow-14 rounded-top-15"
                    src={imageTwo}
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration={500}
                    data-aos-once="true" data-aos-duration={1000}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12">
            <div
              className="dark-mode-texts mt-8 mt-lg-0 pt-lg-16 ml-xl-25 ml-lg-10"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-once="true" data-aos-duration={1000}
            >
              <h1 className="font-size-13 mb-9 line-height-84 pr-xs-15 pr-lg-0">
                Bring more sales on your page.
              </h1>
              <p className="font-size-8 mb-0 pr-md-10 pr-xl-18">
                Typewolf is an independent typography resource created by
                Jeremiah Shoaf. The site gets over 350,000 unique visitors a
                month.
              </p>
              <div className="btn-group pt-10 pt-lg-12">
                <Link href={"/#"}>
                  <a className="btn btn-white btn-3 h-60 rounded-5">
                    Start 14 Days trial
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
