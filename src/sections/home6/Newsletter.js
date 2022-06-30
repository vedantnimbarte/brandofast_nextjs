import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/home-6/svg/First Page Icon Image And More-89.svg";

const Newsletter = ({ className, ...rest }) => {
  return (
      <div className="container"> 
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          <div className="col-xl-5 col-lg-5 col-xs-6">
            <div className="mb-10 mb-lg-0 mt-lg-16 mr-20">
              <img
                className="w-100"
                src={imgM}
                alt=""
                data-aos="fade-right"
                data-aos-delay={500}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-10 col-xs-10">
            <div className="pt-5 pb-7 pr-sm-5 pr-md-9 pr-lg-0">
              <h2
                className="font-size-9 mb-9 pr-sm-10 pr-md-17 pr-lg-15 pr-xl-0 mt-lg-31"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Get Instant alerts {""} <br className="d-none d-md-block" />
                on our discounts and offers!
              </h2>
              <p
                className="font-size-5 mb-0 pr-md-20 pr-xl-22"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                We receive lot of queries about our newest offers {""} <br className="d-none d-md-block" />
                and ongoing discounts. If you are someone who is curious {""} <br className="d-none d-md-block" />
                about these details subscribe to our emailing service and {""} <br className="d-none d-md-block" />
                you'll receive updates whenever something new pops up.
              </p>
              <div
                className="mt-8 mt-lg-16"
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <div className="shadow-3 bg-white rounded-0">
                  <form action="/">
                    <div className="subscribe-inline-form">
                      <div className="form-group">
                        <label htmlFor="mail">
                          <i className="icon icon-email-84 mb-0 text-bali-gray font-weight-bold" />
                        </label>
                        <input
                          id="mail"
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                      <button className="btn btn-primary">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Newsletter;
