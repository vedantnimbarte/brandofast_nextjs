import React from "react";
import Link from "next/link";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-dark-cloud pt-15 pt-lg-26 pb-9 ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="pb-5 pb-lg-22">
            <div className="row justify-content-lg-between">
              {/* Brand Logo */}
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7">
                <div className="brand-logo mb-10 mb-lg-0 dark-mode-texts pr-lg-10 pr-xl-0 pt-lg-3">
                  <Link href="/#">
                    <a>
                      <img
                        className="mx-auto mx-0 light-version-logo default-logo"
                        src={imgLB}
                        alt=""
                      />
                      <img
                        src={imgLW}
                        alt=""
                        className="dark-version-logo mx-auto mx-0"
                      />
                    </a>
                  </Link>
                  <p className="font-size-5 mb-0 mt-8 mt-lg-10">
                    Sophisticated styling with exceptional comfort. Super-soft,
                    pressure-relieving earpads.
                  </p>
                </div>
              </div>
              {/* End Brand Logo */}
              <div className="col-xl-8 col-md-7 offset-lg-1">
                <div className="row">
                  {/* Single Widgets */}
                  <div className="col-sm-4 col-xs-6">
                    <div className="mb-10 mb-lg-0">
                      <h4 className="font-size-5 font-weight-normal mb-8 text-bali-gray">
                        Demos
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              Saas
                            </a>
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              Web application
                            </a>
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              Mobile app
                            </a>
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              Plugin
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                  {/* Single Widgets */}
                  <div className="col-sm-4 col-xs-6">
                    <div className="mb-10 mb-lg-0">
                      <h4 className="font-size-5 font-weight-normal mb-8 text-bali-gray">
                        Pages
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              About us
                            </a>
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              Career
                            </a>
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              Faq
                            </a>
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link href="/#">
                            <a className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1">
                              Terms &amp; Condition
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                  {/* Single Widgets */}
                  <div className="col-sm-4 col-xs-8">
                    <div className="mb-10 mb-lg-0 mr-xl-12">
                      <h4 className="font-size-5 font-weight-normal mb-8 text-bali-gray">
                        Support
                      </h4>
                      <div className="mt-7">
                        <Link
                          href="/#"
                          className="font-size-5 d-block text-white mb-0"
                          href="mailto:support@finity.com"
                        >
                          support@finity.com
                        </Link>
                        <Link
                          href="/#"
                          className="font-size-5 d-block text-white mb-0"
                          href="tel:+1-301-340-3946"
                        >
                          +1-301-340-3946
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                </div>
              </div>
            </div>
          </div>
          <div className="border-top border-default-color dark-mode-texts d-flex align-items-center justify-content-center justify-content-sm-between flex-column flex-sm-row flex-wrap pt-11">
            <div className="mb-10 mb-sm-0">
              <div className="shadow-3 rounded-4">
                <form action="/">
                  <div className="newsletter-3">
                    <div className="form-group">
                      <label className="mb-0" htmlFor="mail">
                        <i className="icon icon-email-84 mb-0" />
                      </label>
                      <input
                        id="mail"
                        type="email"
                        className="form-control"
                        placeholder="Place your email"
                      />
                    </div>
                    <button className="btn btn-dodger-blue-2 rounded-5">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <ul className="d-flex align-items-center list-unstyled mb-0">
                <li>
                  <Link href="/#">
                    <a className="pl-5 text-white gr-hover-text-dodger-blue-1 font-size-5 px-3">
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a className="pl-5 text-white gr-hover-text-dodger-blue-1 font-size-5 px-3">
                      <i className="fab fa-google" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a className="pl-5 text-white gr-hover-text-dodger-blue-1 font-size-5 px-3">
                      <i className="fab fa-linkedin" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
