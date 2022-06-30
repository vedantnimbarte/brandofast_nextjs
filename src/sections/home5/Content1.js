import React from "react";

import imgC from "../../assets/image/home-5/png/l5-content-1-img.png";

const Content1 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* Section title */}
        <div className="row align-items-center justify-content-between">
          <div
            className="col-xl-6 col-lg-5 col-md-7 col-xs-8"
            data-aos="flip-right"
            data-aos-delay={500}
          >
            <div className="l4-image-group mt-lg-n18 mt-xl-n20 mb-8 mb-lg-0 ml-lg-n15 mr-xl-19">
              <img className="w-100" src={imgC} alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-8 pt-lg-23 pb-lg-18"
            data-aos="fade-right"
            data-aos-delay={500}
          >
            <h3 className="font-size-11 mb-0 mb-10 pr-xs-18 pr-md-0">
              For everyday, just Speak-to-Chat
            </h3>
            <p className="font-size-7 mb-0 pr-xs-15 pr-md-0 pl-xl-2 mt-7 mt-lg-0 pr-lg-18">
              Speak-to-Chat automatically stops the music and lets in ambient
              sound so you can conduct a conversation – handy if you want to
              keep your headphones on, or your hands are full
            </p>
          </div>
        </div>
        {/* End Section title */}
        {/* Services */}
        <div className="pt-lg-9">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-8">
              <div
                className="pt-10 pt-lg-18"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="circle-60 bg-sunset text-white font-size-7">
                  <i className="fa fa-link" />
                </div>
                <div className="mt-9">
                  <h4 className="font-size-8 mb-6">Modern &amp; Exquisite</h4>
                  <p className="font-size-5 mb-0 pr-xl-8">
                    Adjust ambient sound with the Finity Headphones Connect app
                    to cancel noise while still allowing through essential
                    sounds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-8">
              <div
                className="pt-10 pt-lg-18"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="circle-60 bg-bluewood text-white font-size-7">
                  <i className="fa fa-hourglass-half" />
                </div>
                <div className="mt-9">
                  <h4 className="font-size-8 mb-6">Noise cancellation</h4>
                  <p className="font-size-5 mb-0 pr-xl-8">
                    Adjust ambient sound with the Finity Headphones Connect app
                    to cancel noise while still allowing through essential
                    sounds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-8">
              <div
                className="pt-10 pt-lg-18"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="circle-60 bg-buttercup text-white font-size-7">
                  <i className="fa fa-level-up-alt" />
                </div>
                <div className="mt-9">
                  <h4 className="font-size-8 mb-6">High quality audio</h4>
                  <p className="font-size-5 mb-0 pr-xl-8">
                    Adjust ambient sound with the Finity Headphones Connect app
                    to cancel noise while still allowing through essential
                    sounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Services */}
      </div>
    </div>
  );
};

export default Content1;
