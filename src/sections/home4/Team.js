import React from "react";

import memberImage1 from "../../assets/image/home-4/png/team-1.png";
import memberImage2 from "../../assets/image/home-4/png/team-2.png";
import memberImage3 from "../../assets/image/home-4/png/team-3.png";
import memberImage4 from "../../assets/image/home-4/png/team-4.png";
import memberImage5 from "../../assets/image/home-4/png/team-5.png";
import memberImage6 from "../../assets/image/home-4/png/team-6.png";

const TeamCard = ({ image, name, position, ...rest }) => {
  return (
    <>
      {/* Single Team */}
      <div className="text-center mb-10 mb-lg-15">
        <div className="mb-8 rounded-10">
          <img className="w-100 w-md-auto" src={image} alt="" />
        </div>
        <div className="content">
          <h4 className="font-size-7 mb-1">{name}</h4>
          <p className="font-size-5 font-weight-normal mb-0">{position}</p>
        </div>
      </div>
      {/* Single Team */}
    </>
  );
};
const Team = ({ className, ...rest }) => {
  const TeamData = [
    {
      image: memberImage1,
      name: "Juan Morrison",
      position: "Social Media Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage2,
      name: "Juan Morrison",
      position: "Social Media Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage3,
      name: "Juan Morrison",
      position: "Social Media Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage4,
      name: "Juan Morrison",
      position: "Social Media Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage5,
      name: "Juan Morrison",
      position: "Social Media Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage6,
      name: "Juan Morrison",
      position: "Social Media Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
  ];
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center mb-12 mb-lg-19">
              <h2 className="font-size-10 mb-8 letter-spacing-n83">
                Team Behind Our Success
              </h2>
            </div>
          </div>
        </div>
        {/* section title */}
        <div className="row justify-content-center">
          {TeamData.map(({ image, name, position }, index) => {
            return (
              <div className="col-lg-4 col-sm-6 col-xs-8" key={index}>
                <TeamCard image={image} name={name} position={position} />
              </div>
            );
          })}
        </div>
        <div
          className="mt-lg-8 text-center"
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-once="true" data-aos-duration={1000}
        >
          <a
            className="btn btn-outline-dark-cloud darkmode-btn btn-xl h-55 rounded-5"
            href="/#"
          >
            Join our team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;

// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={500}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-2.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Raymond Baker</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Content writer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={800}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-3.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Amy sanderson</h4>
//       <p className="font-size-5 font-weight-normal mb-0">UX Designer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={300}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-4.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Ryan kingsley</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Software engineer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={500}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-5.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Jane Austen</h4>
//       <p className="font-size-5 font-weight-normal mb-0">HR &amp; Support</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={800}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-6.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Trevor Flemming</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Founder &amp; CEO</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
