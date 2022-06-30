import React from "react";
import PageWrapper from "../components/PageWrapper";
import imageRight from "../assets/image/inner-page/jpg/comming-soon-img.png";

const Contact = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "pt-13 pt-lg-11 dark-mode-texts",
          headerFluid: false,
          headerSocial: true
        }}
      >
        <div className="min-height-100vh d-flex align-items-center bg-dark-cloud pt-24 pt-md-27 pt-lg-25">
          <div className="container">
            <div className="row no-gutters align-items-center justify-content-center">
              <div className="col-lg-6 col-md-9 col-xs-11 order-2 order-lg-1">
                <div className="pt-9 pt-sm-13 pb-10 pb-md-15 dark-mode-texts pr-md-11 pr-lg-0">
                  <div className="mb-11">
                    <h2
                      className="font-size-11 mb-8 pr-sm-10 pr-md-14 pr-lg-0 pr-xl-10"
                      data-aos="fade-up"
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      Somthing exciting is coming soon!
                    </h2>
                    <p
                      className="font-size-7 mb-0 pr-xl-15"
                      data-aos="fade-up"
                      data-aos-duration={700}
                      data-aos-once="true"
                    >
                      Our focus is always on finding the best people to work
                      with. Our bar is high, but you look ready to take on the
                      challenge.
                    </p>
                  </div>
                  <div
                    className="pr-lg-17 pr-xl-25"
                    data-aos="fade-up"
                    data-aos-duration={900}
                    data-aos-once="true"
                  >
                    <form action="/">
                      <div className="form-group mb-7">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-lg bg-white rounded-4 text-bali-gray pl-8 font-size-5"
                          placeholder="Email Address"
                          id="email"
                        />
                      </div>
                      <div className="max-w-435">
                        <a
                          href="#"
                          className="btn btn-blue-3 w-100 h-55 rounded-4"
                        >
                          Send
                        </a>
                        <p
                          className="font-size-5 mt-5 text-gray-chateau"
                          data-aos="fade-up"
                          data-aos-duration={1200}
                          data-aos-once="true"
                        >
                          We’ll only send our service related emails
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-9 col-xs-11 order-1 order-lg-2">
                <div
                  className="text-right"
                  data-aos="fade-left"
                  data-aos-duration={500}
                  data-aos-once="true"
                >
                  <img className="w-100 w-xl-auto" src={imageRight} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
