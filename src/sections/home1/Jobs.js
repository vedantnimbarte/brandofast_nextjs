import React from "react";
import JobCard1 from "../../components/JobCard1";

import img1 from "../../assets/image/home-1/png/cravers.png";
import img2 from "../../assets/image/home-1/png/dropdrop.png";
import img3 from "../../assets/image/home-1/png/help-180.png";
import img4 from "../../assets/image/home-1/png/cravers-2.png";
import img5 from "../../assets/image/home-1/png/cravers-3.png";
import img6 from "../../assets/image/home-1/png/cravers.png";

const items = [
  {
    location: "South Haven, USA",
    color: "dark-green",
    jobType: "Full-time",
    heading: "Senior UX Designer at Cravers Tech.",
    image: img1,
    companyName: "Cravers Tech",
    postTime: "19 hours ago",
  },
  {
    location: "Paucekchester, UK",
    color: "buttercup",
    jobType: "Part-time",
    heading: "Marketing Manager at DropDrop Inc.",
    image: img2,
    companyName: "DropDrop Inc.",
    postTime: "2 days ago",
  },
  {
    location: "Noemieport, Norway",
    color: "buttercup",
    jobType: "Part-time",
    heading: "Junior Call Support Assistant at Help180.",
    image: img3,
    companyName: "Help180",
    postTime: "4 days ago",
  },
  {
    location: "Mooreville, Canada",
    color: "buttercup",
    jobType: "Part-time",
    heading: "Project Manager at Shapers.",
    image: img4,
    companyName: "Shapers",
    postTime: "1 week ago",
  },
  {
    location: "Anywhere",
    color: "blue-2",
    jobType: "Remote",
    heading: "Senior UX Designer at Cravers Tech.",
    image: img5,
    companyName: "Expracto",
    postTime: "1 week ago",
  },
  {
    location: "Vonstad, Spain",
    color: "dark-green",
    jobType: "Full Time",
    heading: "Marketing Director at Cravers Tech.",
    image: img6,
    companyName: "Cravers Tech",
    postTime: "2 weeks ago",
  },
];

const Jobs = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="mb-13 mb-lg-17">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div
                  className="mb-10 mb-md-0 text-center text-md-left"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-once="true" data-aos-duration={1000}
                >
                  <h2 className="font-size-11 font-weight-medium pr-md-10 pr-xl-0 mb-0">
                    Find a job that you love
                  </h2>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-md-6">
                <div
                  className="text-center text-md-right"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-once="true" data-aos-duration={1000}
                >
                  <a className="btn btn-primary" href="/#">
                    See All 2359 Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          {/* <!-- Job Card --> */}
          <div className="row justify-content-center">
            {items.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 col-xs-10"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-once="true" data-aos-duration={1000}
                key={index}
              >
                <JobCard1 options={item} />
              </div>
            ))}
          </div>
          {/* <!-- End Job Card --> */}
        </div>
      </div>
    </>
  );
};

export default Jobs;
