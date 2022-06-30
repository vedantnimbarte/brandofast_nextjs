import React from "react";
import Link from "next/link";

import PageWrapper from "../components/PageWrapper";

const ResetPass = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "pt-13 pt-lg-11",
          headerLogoClassName: "mx-auto text-center",
        }}
      >
        <div className="min-height-100vh d-flex align-items-center pt-15 pb-13 pt-lg-32 pb-lg-27 bg-default-3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">
                <div className="pt-9 pt-sm-13 pb-10 px-5 px-xs-14">
                  <div
                    className="mb-10 text-center"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-delay={500}
                  >
                    <h2 className="mb-1 font-size-10 letter-spacing-n83">
                      Forgot password?
                    </h2>
                    <p className="text-bali-gray font-size-7 mb-0">
                      Enter your details to recieve a reset link
                    </p>
                  </div>
                  <form
                    action="/"
                    data-aos="fade-up"
                    data-aos-duration={800}
                    data-aos-delay={500}
                  >
                    {/* Email */}
                    <div className="form-group mb-6 position-relative">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-white rounded-4 text-bali-gray pl-16 font-size-5"
                        placeholder="Email address"
                        id="email"
                      />
                      <label
                        className="absolute-center-left font-size-7 mt-1 ml-9"
                        htmlFor="email"
                      >
                        <i className="icon icon-email-84 mb-0 font-weight-bold" />
                      </label>
                    </div>
                    {/* Bottom */}
                    <div className="button">
                      <a href="/#" className="btn btn-blue-3  w-100 rounded-4">
                        Send Reset Link
                      </a>
                      <p
                        className="text-center font-size-5 mt-8 text-bali-gray"
                        data-aos="fade-up"
                        data-aos-duration={1100}
                        data-aos-delay={500}
                      >
                        Remember password?{" "}
                        <Link href="/signin">
                          <a className="text-blue-3">Sign in</a>
                        </Link>
                      </p>
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
export default ResetPass;
