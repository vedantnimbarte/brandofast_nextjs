import React from "react";

import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <button className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5">
                Start 14 Days Free Trial
              </button>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <div className="min-height-100vh d-flex align-items-center pt-23 pt-md-26 pt-lg-30 pb-8 pb-md-12 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="mb-10 mb-lg-18 text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                >
                  <h2 className="font-size-11 mb-7">Contact us</h2>
                  <p className="font-size-7 mb-0">
                    Send us a message and we will reply you within 48 hours.
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12">
                {/* contact details */}
                <div
                  className="top-contact-info bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10"
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="border-md-right border-cornflower-blue">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Call us
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color"
                          href="/#"
                        >
                          +1-394-429-3985
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="pl-1 pr-3">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Email us
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color"
                          href="/#"
                        >
                          support@finity.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* contact details */}
                <div className="pt-12 pb-10 max-w-536 mx-auto">
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                    data-aos-once="true"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Company Name */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="John Doe"
                        id="company"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Email Address"
                        id="email"
                        required
                      />
                    </div>
                    {/* Company Name */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="subject"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Subject"
                        id="subject"
                        required
                      />
                    </div>
                    {/* Company Name */}
                    <div className="form-group mb-7 position-relative">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 pt-7 font-size-5 border-default-color"
                        defaultValue={""}
                        required
                      />
                    </div>
                    <div className="button">
                      <button
                        type="submit"
                        href="/#"
                        className="btn btn-blue-3 h-55 w-100 rounded-4"
                      >
                        Send
                      </button>
                    </div>
                  </form>
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
