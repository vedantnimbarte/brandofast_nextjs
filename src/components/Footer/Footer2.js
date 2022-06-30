import React from "react";
import Link from "next/link";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`pt-13 pt-lg-25 pb-13 pb-lg-25 ${className}`} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      Community
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            For Talents
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            For Companies
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            Facebook Group
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">FAQ</a>
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
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            Meet the Team
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            Our Story
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
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
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            Free Resume Builder
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            Free Graphics
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color">
                            Career Blog
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="mb-7">
                <h4 className="font-size-6 font-weight-medium mb-8">
                  Subscribe to Our Newsletter
                </h4>
                <p className="font-size-5 line-height-28">
                  Time is the most precious thing you have when bootstrapping.
                  You can't take time.
                </p>
              </div>
              <div className="mb-0 mr-xl-9">
                <div className="shadow-3 bg-white rounded-4">
                  <form action="/">
                    <div className="subscribe-inline-form-2">
                      <div className="form-group">
                        <label htmlFor="mail">
                          <i className="icon icon-email-84 mb-0" />
                        </label>
                        <input
                          id="mail"
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                      <button className="btn btn-dodger-blue-2 rounded-5">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
