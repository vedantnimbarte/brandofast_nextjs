import React from "react";

import PageWrapper from "../components/PageWrapper";

const CareerDetails = () => {
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
        <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11">
                {/* job-details-content */}
                <div className="text-center pb-0">
                  {/* job-top-header */}
                  <div className="mb-7 d-inline-flex align-items-center flex-wrap">
                    <span className="d-block d-inline-flex align-items-center mr-sm-6 text-bali-gray">
                      <i className="icon icon-pin-3 mr-1 text-bali-gray position-relative" />
                      South Haven, USA
                    </span>
                    <p className="bg-dark-green-op1 font-size-3 font-weight-medium badge mb-0 py-2 px-4 ml-8">
                      <span className="text-dark-green">Full-time</span>
                    </p>
                  </div>
                  <h2 className="font-size-11 font-weight-bold text-center mb-lg-15 mb-0">
                    Senior Software Engineer
                  </h2>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">
                  <p className="font-size-5 heading-default-color mb-9">
                    Headquartered in Melbourne, Australia, Envato is a
                    completely online company with an ecosystem of sites and
                    services to help people get creative. We’ve consistently
                    been named as one of the Best Places to Work in Australia,
                    since 2015, in the BRW Awards, and we’ve also been awarded
                    the title of Australia's Coolest Company for Women and
                    Diversity by JobAdvisor.
                  </p>
                  <p className="font-size-5 heading-default-color mb-9">
                    Envato was found in 2006 and, since then, we’ve helped a
                    community of creative sellers earn more than $500 Million.
                    Millions of people around the world choose our marketplace,
                    studio and courses to buy files, hire freelancers, or learn
                    the skills needed to build websites, videos, apps, graphics
                    and more. Find out more at Envato Market, Envato Elements,
                    Envato Sites, Envato Studio and Tuts+.
                  </p>
                  <p className="font-size-5 heading-default-color mb-9">
                    You might be surprised to know that not only do we run some
                    of the biggest websites in the world; we’re also growing
                    really fast! We have close to 600 staff and contractors
                    worldwide, adding more than 100 people to the business, year
                    on year, since 2017.
                  </p>
                  <div className="article-block mt-11 mt-lg-15">
                    <h5 className="font-size-7 mb-6">What you’ll be doing</h5>
                    <p className="font-size-5 heading-default-color mb-9">
                      A Senior Data Engineer provides technical and delivery
                      leadership for a team of developers working on data
                      integration and processing projects. This role will work
                      with stakeholders and other developers to design and
                      implement technical data solutions for the business in a
                      way that balances quality, cost, time and maintainability.
                    </p>
                  </div>
                  {/* article-block */}
                  <div className="mt-11 mt-lg-16">
                    {/* block-title */}
                    <h5 className="font-size-7 mb-6">
                      Skills &amp; Qualifications
                    </h5>
                    {/* term-list */}
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Business Intelligence solutions
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Cloud computing platforms (AWS)
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Relevant server-side programming languages (C# .NET)
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        SQL and NoSQL database solutions (AWS Redshift and AWS
                        DynamoDB)
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Big data processing frameworks and concepts
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        DevOps practices
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Serverless Architecture
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        *NIX operating systems
                      </li>
                      <li className="position-relative font-size-5 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Demonstrates ability to communicate effectively with the
                        rest of the team
                      </li>
                    </ul>
                  </div>
                  {/* article-block */}
                  <div className="mt-11 mt-md-16">
                    <h5 className="font-size-7 mb-7">How to apply</h5>
                    <p className="font-size-5 heading-default-color">
                      A Senior Data Engineer provides technical and delivery
                      leadership for a team of developers working on data
                      integration and processing projects. This role will work
                      with stakeholders and other developers to design and
                      implement technical data solutions for the business in a
                      way that balances quality, cost, time and maintainability.
                    </p>
                  </div>
                  <div className="apply-btn pt-7 pt-md-13">
                    <a className="btn btn-blue-3 btn-2 rounded-5" href="/#">
                      Apply for this job
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default CareerDetails;
