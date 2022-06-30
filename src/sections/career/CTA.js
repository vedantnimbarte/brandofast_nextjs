import React, { useContext } from "react";
import Link from "next/link";

import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/inner-page/png/video-bg.png";

const CTA = () => {
  const gContext = useContext(GlobalContext);

  return (
    <div className="pt-14 pt-md-19 pt-lg-27 pb-15 pb-md-18 pb-lg-25 mb-lg-1">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-sm-11"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url(${imgC});
              `}
            >
              <a
                href="/#"
                className="video-btn sonar bg-blue-3-op5 text-white circle-98 font-size-8"
                onClick={(e) => {
                  e.preventDefault();
                  gContext.toggleVideoModal();
                }}
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-11">
            <div className="pt-9 pt-lg-0 pr-xs-10 pr-sm-5 pr-md-25 pr-lg-0 pl-xl-16">
              <h2
                className="font-size-10 mb-8 letter-spacing-n83"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                Working with us
              </h2>
              <p
                className="font-size-6 mb-0 pr-xs-15 pr-sm-10 pr-xl-15"
                data-aos="fade-up"
                data-aos-duration={900}
              >
                These companies release their own versions of the operating
                systems with minor changes, and yet always with the same bottom
                line.{" "}
              </p>
              <div
                className="mt-11"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <Link href="/#">
                  <a className="btn btn-blue-3 btn-2 font-weight-medium rounded-5">
                    See Job Openings
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

export default CTA;
