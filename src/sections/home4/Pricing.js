import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const Pricing = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="text-center mb-8 mb-lg-21 dark-mode-texts"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <h2 className="font-size-10 mb-8 letter-spacing-n83">
                Plans and Pricing
              </h2>
            </div>
          </div>
        </div>
        {/* section title */}
        {/* Pricing Table */}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row justify-content-center">
            <div
              className="col-xl-2 col-md-7 col-xs-10"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <Nav
                variant="pills"
                className="nav align-content-center justify-content-center justify-sm-content-between justify-content-xl-start mb-8 mb-lg-0"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    className="nav-link btn btn-outline-white btn-xl h-55 mb-8 mx-1 mx-xl-0"
                  >
                    Individual
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    className="nav-link btn btn-outline-white btn-xl h-55 mb-8 mx-1 mx-xl-0"
                  >
                    Commercial
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-xl-10 col-lg-9">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="row justify-content-center">
                    {/* Single table */}
                    <div className="col-xl-5 col-md-6 col-sm-8 col-xs-10">
                      <div
                        className="bg-white rounded-10 pl-9 pl-xs-12 pr-10 pr-xs-15 pt-7 pt-xs-12 pb-9 pb-xs-13 mb-13 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={500}
                        data-aos-once="true" data-aos-duration={1000}
                      >
                        <div className="mb-9">
                          <h4 className="font-size-7 text-dark-cloud">
                            Starter
                          </h4>
                          <p className="font-size-5 mb-0 text-stone">
                            Go beyond email and customise your workflow.
                          </p>
                        </div>
                        <h3 className="font-size-10 mb-9 text-dark-cloud letter-spacing-n83">
                          $21<span className="font-size-5">/month</span>
                        </h3>
                        <ul className="list-unstyled font-size-5 text-dark-cloud">
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />
                            Non-commercial sites
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            Personal Branding
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            All device synchronization
                          </li>
                        </ul>
                        <div className="mt-11">
                          <a
                            className="btn btn-outline-dark-cloud gr-hover-bg-dodger-blue-1 rounded-5 text-black btn-xl h-55"
                            href="/#"
                          >
                            Start Instantly
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single table */}
                    {/* Single table */}
                    <div className="col-xl-5 col-md-6 col-sm-8 col-xs-10">
                      <div
                        className="bg-white rounded-10 pl-9 pl-xs-12 pr-10 pr-xs-15 pt-7 pt-xs-12 pb-9 pb-xs-13 mb-13 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={800}
                        data-aos-once="true" data-aos-duration={1000}
                      >
                        <div className="mb-9">
                          <h4 className="font-size-7 text-dark-cloud">
                            Premium
                          </h4>
                          <p className="font-size-5 mb-0 text-stone">
                            Go beyond email and customise your workflow.
                          </p>
                        </div>
                        <h3 className="font-size-10 mb-9 text-dark-cloud letter-spacing-n83">
                          $51<span className="font-size-5">/month</span>
                        </h3>
                        <ul className="list-unstyled font-size-5 text-dark-cloud">
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />
                            Commercial sites
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            Corporate Branding
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            All device synchronization
                          </li>
                        </ul>
                        <div className="mt-11">
                          <a
                            className="btn btn-outline-dark-cloud gr-hover-bg-dodger-blue-1 rounded-5 text-black btn-xl h-55"
                            href="/#"
                          >
                            Start Instantly
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single table */}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="row justify-content-center">
                    {/* Single table */}
                    <div className="col-xl-5 col-md-6 col-sm-8 col-xs-10">
                      <div
                        className="bg-white rounded-10 pl-9 pl-xs-12 pr-10 pr-xs-15 pt-7 pt-xs-12 pb-9 pb-xs-13 mb-13 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={500}
                        data-aos-once="true" data-aos-duration={1000}
                      >
                        <div className="mb-9">
                          <h4 className="font-size-7 text-dark-cloud">
                            Starter
                          </h4>
                          <p className="font-size-5 mb-0 text-stone">
                            Go beyond email and customise your workflow.
                          </p>
                        </div>
                        <h3 className="font-size-10 mb-9 text-dark-cloud letter-spacing-n83">
                          $121<span className="font-size-5">/month</span>
                        </h3>
                        <ul className="list-unstyled font-size-5 text-dark-cloud">
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />
                            Non-commercial sites
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            Personal Branding
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            All device synchronization
                          </li>
                        </ul>
                        <div className="mt-11">
                          <a
                            className="btn btn-outline-dark-cloud gr-hover-bg-dodger-blue-1 rounded-5 text-black btn-xl h-55"
                            href="/#"
                          >
                            Start Instantly
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single table */}
                    {/* Single table */}
                    <div className="col-xl-5 col-md-6 col-sm-8 col-xs-10">
                      <div
                        className="bg-white rounded-10 pl-9 pl-xs-12 pr-10 pr-xs-15 pt-7 pt-xs-12 pb-9 pb-xs-13 mb-13 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={800}
                        data-aos-once="true" data-aos-duration={1000}
                      >
                        <div className="mb-9">
                          <h4 className="font-size-7 text-dark-cloud">
                            Premium
                          </h4>
                          <p className="font-size-5 mb-0 text-stone">
                            Go beyond email and customise your workflow.
                          </p>
                        </div>
                        <h3 className="font-size-10 mb-9 text-dark-cloud letter-spacing-n83">
                          $151<span className="font-size-5">/month</span>
                        </h3>
                        <ul className="list-unstyled font-size-5 text-dark-cloud">
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />
                            Commercial sites
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            Corporate Branding
                          </li>
                          <li className="mb-6">
                            <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                            All device synchronization
                          </li>
                        </ul>
                        <div className="mt-11">
                          <a
                            className="btn btn-outline-dark-cloud gr-hover-bg-dodger-blue-1 rounded-5 text-black btn-xl h-55"
                            href="/#"
                          >
                            Start Instantly
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single table */}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
        {/* End Pricing Table */}
      </div>
    </div>
  );
};

export default Pricing;
