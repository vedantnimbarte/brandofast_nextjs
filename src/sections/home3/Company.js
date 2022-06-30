import React from "react";

import img1 from "../../assets/image/home-4/company-logo/dark-logo-1.png";
import imgL1 from "../../assets/image/home-4/company-logo/light-logo-1.png";
import img2 from "../../assets/image/home-4/company-logo/dark-logo-2.png";
import imgL2 from "../../assets/image/home-4/company-logo/light-logo-2.png";
import img3 from "../../assets/image/home-4/company-logo/dark-logo-3.png";
import imgL3 from "../../assets/image/home-4/company-logo/light-logo-3.png";
import img4 from "../../assets/image/home-4/company-logo/dark-logo-4.png";
import imgL4 from "../../assets/image/home-4/company-logo/light-logo-4.png";
import img5 from "../../assets/image/home-4/company-logo/dark-logo-5.png";
import imgL5 from "../../assets/image/home-4/company-logo/light-logo-5.png";
// import img6 from "../../assets/image/home-4/company-logo/dark-logo-6.png";
// import imgL6 from "../../assets/image/home-4/company-logo/light-logo-6.png";


const SingleBrand = ({className,imageLight,imageDark,...rest}) => {
  return (
    <div
      className={`single-brand-logo mx-5 my-6${
        className ? " " + className : ""
      }`}
    >
      <img
        className="light-version-logo  default-logo opacity-5"
        src={imageLight}
        alt=""
        {...rest}
      />
      <img className="dark-version-logo " src={imageDark} alt="" {...rest} />
    </div>
  );
}
const Company = ({className,...rest}) => {
  const images = [
    {
      "imageDark": img1,
      "imageLight": imgL1,
    },
    {
      "imageDark": img2,
      "imageLight": imgL2,
      "delay": 300,
      "duration": 300,
    },
    {
      "imageDark": img3,
      "imageLight": imgL3,
      "delay": 300,
      "duration": 600,
    },
    {
      "imageDark": img4,
      "imageLight": imgL4,
      "delay": 500,
      "duration": 900,
    },
    {
      "imageDark": img5,
      "imageLight": imgL5,
      "delay": 900,
      "duration": 1200,
    },
  ];
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="brand-logo-small d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap">
          {images.map(({imageDark,imageLight,delay,duration}, index) => {
            
              if (delay && duration) {
                return (
                  <SingleBrand
                    imageDark={imageLight}
                    imageLight={imageDark}
                    data-aos="fade-left"
                    data-aos-once="true" data-aos-duration={1000}
                    data-aos-delay={delay}
                    data-aos-duration={duration}
                    key={index}
                  />
                );
              } else if (delay) {
                return (
                  <SingleBrand
                    imageDark={imageLight}
                    imageLight={imageDark}
                    data-aos="fade-in"
                    data-aos-once="true" data-aos-duration={1000}
                    data-aos-delay={delay}
                    key={index}
                  />
                );
              } else if (duration) {
                return (
                  <SingleBrand
                    imageDark={imageLight}
                    imageLight={imageDark}
                    data-aos="fade-in"
                    data-aos-once="true" data-aos-duration={1000}
                    data-aos-duration={duration}
                    key={index}
                  />
                );
              }
              return (
                <SingleBrand
                  imageDark={imageLight}
                  imageLight={imageDark}
                  data-aos="fade-in"
                  data-aos-once="true" data-aos-duration={1000}
                  key={index}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Company;