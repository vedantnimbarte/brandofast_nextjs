import React from "react";

import TeamMemberCard from "../../components/TeamMemberCard";
import img1 from "../../assets/image/inner-page/png/team-image-1.png";
import img2 from "../../assets/image/inner-page/png/team-image-2.png";
import img3 from "../../assets/image/inner-page/png/team-image-3.png";
import img4 from "../../assets/image/inner-page/png/team-image-4.png";
import img5 from "../../assets/image/inner-page/png/team-image-5.png";
import img6 from "../../assets/image/inner-page/png/team-image-6.png";
import img7 from "../../assets/image/inner-page/png/team-image-7.png";
import img8 from "../../assets/image/inner-page/png/team-image-8.png";
import img9 from "../../assets/image/inner-page/png/team-image-9.png";

const items = [
  {
    image: img1,
    name: "Don Hopkins",
    title: "Founder",
  },
  {
    image: img2,
    name: "Carolyn Porter",
    title: "Manager",
  },
  {
    image: img3,
    name: "Mason Pierce",
    title: "Account",
  },
  {
    image: img4,
    name: "Mabel James",
    title: "Senior Designer",
  },
  {
    image: img5,
    name: "Eva Butler",
    title: "Designer",
  },
  {
    image: img6,
    name: "Augusta Chambers",
    title: "Customer Support",
  },
  {
    image: img7,
    name: "Vernon Bates",
    title: "Senior Engineer",
  },
  {
    image: img8,
    name: "Chad Keller",
    title: "Mobile Engineer",
  },
  {
    image: img9,
    name: "Dennis Perez",
    title: "Content Writer",
  },
];

const Team = () => {
  return (
    <div className="pb-15 pb-md-19 pb-lg-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-10">
            <div
              className="text-center mb-9 mb-lg-15"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 mb-0">Our team members</h2>
            </div>
          </div>
        </div>
        {/* Teammember card */}
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-xs-9"
              data-aos="zoom-in"
              data-aos-duration={800}
              key={index}
            >
              <TeamMemberCard options={item} />
            </div>
          ))}
        </div>
        {/* Teammember card */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center pt-7 pt-md-12 pt-lg-16">
              <h2
                className="font-size-9 mb-9"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                Interested in joining our team?
              </h2>
              <a
                className="btn btn-blue-3 btn-2 rounded-5"
                href="/#"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                See Job Openings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
