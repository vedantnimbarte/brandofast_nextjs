import React from "react";
import Link from "next/link";
import imgBg from "../assets/image/inner-page/jpg/sign-up-right-img.jpg";

import PageWrapper from "../components/PageWrapper";

const SignUpImage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "pt-13 pt-lg-11 px-14 px-xl-24",
          headerLogoClassName: "mx-auto mx-lg-0",
        }}
      >
        <div className="min-height-100vh d-flex align-items-center bg-default-3">
          <div className="container-fluid h-100">
            <div className="row no-gutters align-items-center justify-content-center h-100">
              <div className="col-xl-4 col-lg-6 col-md-10">
                <div className="pt-23 pt-md-17 pt-lg-18 pb-md-4 pb-lg-10 max-w-413 mx-auto">
                  <div
                    className="mb-10"
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
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                        placeholder="Email Address"
                        id="email"
                      />
                    </div>
                    {/* Company Name */}
                    <div className="form-group mb-6 position-relative">
                      <input
                        type="text"
                        name="address"
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                        placeholder="Company name"
                        id="company"
                      />
                    </div>
                    {/* Password */}
                    <div className="form-group position-relative mb-6">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5"
                        placeholder="Password"
                        id="password"
                      />
                    </div>
                    <div className="form-group my-8">
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
                          <Link href="/terms">
                            <a className="text-blue-3 ">
                              Terms &amp; Conditions
                            </a>
                          </Link>
                        </span>
                      </label>
                    </div>
                    <div className="button">
                      <a href="/#" className="btn btn-blue-3 w-100 rounded-4">
                        Sign up
                      </a>
                      <p
                        className="font-size-5 mt-8 text-bali-gray"
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
              {/* Right Image */}
              <div className="col-xl-8 col-lg-6 col-md-10 min-height-lg-100vh">
                <div
                  className="bg-images min-height-100vh d-none d-lg-block"
                  css={`
                    background-image: url(${imgBg});
                  `}
                />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default SignUpImage;
