import React, { useContext } from "react";

import GlobalContext from "../../context/GlobalContext";

const CTA = ({ className, ...rest }) => {
  const gContext = useContext(GlobalContext);

  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <a
                href="/#"
                className="video-btn text-white font-size-6 mb-0"
                onClick={(e) => {
                  e.preventDefault();
                  gContext.toggleVideoModal();
                }}
              >
                <span className="text-golden-yellow mr-3">
                  <i className="fa fa-play-circle" />
                </span>{" "}
                Finity takes only 5 mins to setup your mobile app from website.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
