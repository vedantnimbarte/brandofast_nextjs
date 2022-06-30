import React from "react";
import FreatureCard2 from "../../components/FreatureCard2";
import imgE from "../../assets/image/inner-page/png/explore.png";

const items = [
  {
    icon: imgE,
    title: "Work from anywhere",
    content:
      "Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!",
  },
  {
    icon: imgE,
    title: "Flexible hours",
    content:
      "Need to work around school drop-offs and pick-ups? Just not a morning person? No worries.",
  },
  {
    icon: imgE,
    title: "Work and travel",
    content:
      "You can work and travel around the world for up to three months every year!",
  },
  {
    icon: imgE,
    title: "Paid parental leave",
    content:
      "Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!",
  },
  {
    icon: imgE,
    title: "Yearly bonuses",
    content:
      "Need to work around school drop-offs and pick-ups? Just not a morning person? No worries.",
  },
  {
    icon: imgE,
    title: "Smart salary",
    content:
      "You can work and travel around the world for up to three months every year!",
  },
];

const Features = () => {
  return (
    <div className="pb-9 pb-md-13 pb-lg-15">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-7 col-xs-8">
            <div
              className="text-center mb-7 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2 className="font-size-10 letter-spacing-n83">
                Why you’d love to work with us
              </h2>
            </div>
          </div>
        </div>
        {/* End Section title */}
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-7 mb-lg-15"
              data-aos="fade-up"
              data-aos-duration={900}
              key={index}
            >
              <FreatureCard2 options={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
