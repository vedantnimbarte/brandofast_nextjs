import React from "react";

// import img1 from "../../assets/image/home-4/company-logo/dark-logo-1.png";
// import imgL1 from "../../assets/image/home-4/company-logo/light-logo-1.png";
// import img2 from "../../assets/image/home-4/company-logo/dark-logo-2.png";
// import imgL2 from "../../assets/image/home-4/company-logo/light-logo-2.png";
// import img3 from "../../assets/image/home-4/company-logo/dark-logo-3.png";
// import imgL3 from "../../assets/image/home-4/company-logo/light-logo-3.png";
// import img4 from "../../assets/image/home-4/company-logo/dark-logo-4.png";
// import imgL4 from "../../assets/image/home-4/company-logo/light-logo-4.png";
// import img5 from "../../assets/image/home-4/company-logo/dark-logo-5.png";
// import imgL5 from "../../assets/image/home-4/company-logo/light-logo-5.png";
// import img6 from "../../assets/image/home-4/company-logo/dark-logo-6.png";
// import imgL6 from "../../assets/image/home-4/company-logo/light-logo-6.png";

import brand1 from "../../assets/image/home-1/company-logo/company-logo-1.png";
import brand2 from "../../assets/image/home-1/company-logo/company-logo-2.png";
import brand3 from "../../assets/image/home-1/company-logo/company-logo-3.png";
import brand4 from "../../assets/image/home-1/company-logo/company-logo-4.png";
import brand5 from "../../assets/image/home-1/company-logo/company-logo-5.png";

const SingleBrand = ({image}) => {
  return (
    <>
      {/* Single Brand */}
      <div className="single-brand-logo mx-5 my-6">
        <img src={image} alt="" data-aos="fade-in" data-aos-once="true" data-aos-duration={1000} />
      </div>
      {/* Single Brand */}
    </>
  );
}

const Company = ({ className, ...rest }) => {
    const images = [
      brand1,
      brand2,
      brand3,
      brand4,
      brand5
    ];
  return (
    <>
      {/* Company Section */}
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-lg-8 text-center text-lg-center">
                <h5 className="font-size-6 font-weight-normal text-bali-gray">
                  Popular tech companies who are seeking talents in our website
                </h5>
              </div>
            </div>
          </div>
          {/* Brand Logos */}
          <div className="brand-logo-small d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap">
            {images.map((brand, index) => (
              <SingleBrand image={brand} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* End Company Section */}
    </>
  );
};

export default Company;
