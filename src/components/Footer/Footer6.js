import React from "react";
import Link from "next/link";

import logoW from "../../assets/image/home-6/svg/Brnadofast Logo-01.svg";
import imgP1 from "../../assets/image/home-6/png/payment-1.png";
import imgP2 from "../../assets/image/home-6/png/payment-2.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-default-6 pt-13 pt-lg-23 pb-7 position-relative ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="row pb-lg-18">
            <div className="col-lg-4 col-md-5 col-md-3 col-xs-8">
              <div className="pr-xl-20 mb-11 mb-lg-0">
                {/* <div className="brand-logo mb-8"> */}
                  <Link href="/#">
                    <a className={`${className}`} {...rest}>
                      <img
                        src={logoW}
                        alt="Brandofast Logo"
                        width={200}
                        height={100}
                        className="light-version-logo m-2 p-2"
                      />
                    </a>
                  </Link>
                {/* </div> */}
                <p className="font-size-4 mb-0 heading-default-color opacity-7" style={{ lineHeight: 2, fontSize: "0.9rem" }}>
                  Your brand is your baby, and <br className="d-none d-md-block" />
                  we’re the feeding formula. <br className="d-none d-md-block" />
                  Link with Brandofast and mitigate <br className="d-none d-md-block" />
                  all your branding problems in a snap!
                </p>
                <div className="mt-12">
                  <Link href="/#">
                    <a className="btn btn-pumpkin btn-sm rounded-5 h-60 text-white font-size-5" style={{
                      backgroundColor: "#FF0025"
                    }}>
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-xl-4 col-lg-3 col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-5 opacity-4 mb-10">Company</h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Resources
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Pricing
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Privacy Policy
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Terms &amp; Conditions
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-xl-4 col-lg-3 col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-5 opacity-4 mb-10">Extra</h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Products
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Solutions
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Exclusivity
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Refund Policy
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-xl-4 col-lg-5 col-md-4 col-xs-8">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-5 opacity-4 mb-10">
                      Follow us on social media
                    </h4>
                    <ul className="footer-social-link d-flex align-items-center justify-content-between list-unstyled flex-wrap mb-10">
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            Facebook
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            .
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            Twitter
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            .
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            Instagram
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="border-top border-default-color-4 pt-10">
                    <div className="mb-3">
                      <img className="w-100" src={imgP1} alt="" />
                    </div>
                    <div className="mb-3">
                      <img className="w-100" src={imgP2} alt="" />
                    </div>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
