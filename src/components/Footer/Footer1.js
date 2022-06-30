import React from "react";
import Link from "next/link";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`bg-default-1 pb-13 pb-lg-10 ${className}`} {...rest}>
        <div className="container">
          <hr className="border-top border-default-color-2 m-0 p-0" />
          <div
            className="row pt-12 pt-lg-25 justify-content-center"
          >
            <div className="col-lg-4 col-md-5 col-md-3">
              <div className="pr-xl-20 mb-11 mb-lg-0">
                <div className="brand-logo mb-7 mb-lg-8">
                  <Link href="/#">
                    <a>
                      <img
                        className="mx-auto mx-0 light-version-logo default-logo"
                        src={imgLB}
                        alt=""
                      />
                      <img
                        className="dark-version-logo mx-auto mx-0"
                        src={imgLW}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <p className="font-size-5 line-height-28 mb-0">
                  Finity has a collection of latest 2,500 jobs to join next
                  companies.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 offset-lg-1">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Community
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            For Talents
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            For Companies
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            Facebook Group
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            FAQ
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      About us
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            Meet the Team
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            Our Story
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            Career
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Useful
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            For Talents
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            For Companies
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            Facebook Group
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-stone gr-hover-text-primary">
                            FAQ
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-3 pt-lg-22">
            <div className="col-md-6 text-center text-md-left">
              <div className="copyright mb-5">
                <p className="mb-0 font-size-3 text-stone">
                  © Finity 2019, All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="footer-right mb-5">
                <p className="mb-0 font-size-3 text-stone">
                  {" "}
                  Built with love by <Link href="/#">Grayic</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
