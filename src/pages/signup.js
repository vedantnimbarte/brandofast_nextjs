import React from "react";
import Link from "next/link";

import PageWrapper from "../components/PageWrapper";

const SignUp = () => {
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
              <div className="col-xl-6 col-lg-7 col-md-8 col-xs-10">
                <div className="pt-9 pt-sm-13 pb-10 px-6 px-sm-1 px-md-7 px-lg-15 px-xl-16">
                  <div
                    className="mb-10 text-center"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-delay={500}
                  >
                    <h2 className="mb-1 font-size-10 letter-spacing-n83">
                      Create account
                    </h2>
                    <p className="text-bali-gray font-size-7 mb-0">
                      No credit card required
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
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-18 font-size-5"
                        placeholder="Email Address"
                        id="email"
                      />
                      <label
                        className="absolute-center-left font-size-7 mt-1 ml-9"
                        htmlFor="email"
                      >
                        <i className="icon icon-email-84 mb-0 font-weight-bold" />
                      </label>
                    </div>
                    {/* Company Name */}
                    <div className="form-group mb-6 position-relative">
                      <input
                        type="text"
                        name="address"
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-18 font-size-5"
                        placeholder="Company name"
                        id="company"
                      />
                      <label
                        className="absolute-center-left font-size-7 mt-1 ml-9"
                        htmlFor="company"
                      >
                        <i className="icon icon-home-minimal mb-0 font-weight-bold" />
                      </label>
                    </div>
                    {/* Password */}
                    <div className="form-group position-relative mb-4">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-18 font-size-5"
                        placeholder="Password"
                        id="password"
                      />
                      <label
                        className="absolute-center-left font-size-7 mt-1 ml-9"
                        htmlFor="email"
                      >
                        <i className="icon icon-lock mb-0 font-weight-bold" />
                      </label>
                    </div>
                    <div className="form-group mt-8 mb-7">
                      <label
                        htmlFor="terms-check"
                        className="check-input-control d-flex align-items-center"
                      >
                        <input
                          className="d-none"
                          type="checkbox"
                          id="terms-check"
                        />
                        <span className="checkbox mr-5" />
                        <span className="mb-0 font-size-5 text-bali-gray">
                          I agree to the{" "}
                          <Link href="/signup">
                            <a className="text-blue-3 ">
                              Terms &amp; Conditions
                            </a>
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="button">
                      <a href="/#" className="btn btn-blue-3  w-100 rounded-4">
                        Sign up
                      </a>
                      <p
                        className="text-center font-size-5 mt-8 text-bali-gray"
                        data-aos="fade-up"
                        data-aos-duration={1100}
                        data-aos-delay={500}
                      >
                        Already have an account?{" "}
                        <Link href="/signin">
                          <a className="text-blue-3 ">Sign in</a>
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
export default SignUp;
