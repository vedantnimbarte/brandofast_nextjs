import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home2/Hero";
import Counter from "../sections/home2/Counter";
import Progress from "../sections/home2/Progress";
import Content1 from "../sections/home2/Content1";
import Content2 from "../sections/home2/Content2";
import Content3 from "../sections/home2/Content3";
import Testimonial from "../sections/home2/Testimonial";
import CTA from "../sections/home2/CTA";

const Home2 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-center",
          headerButton: (
            <>
              <button className="btn btn btn-dodger-blue-2 header-btn rounded-5">
                Get Started for Free
              </button>
            </>
          ),
          footerStyle: "style2",
        }}
      >
        <Hero className="pt-11 pt-lg-34 pb-8 pb-lg-33" />
        <Counter className="pt-lg-5 pb-8 pb-lg-27" />
        {/* <Progress className="pb-lg-21 border-top border-default-color-1" /> */}
        {/* <Content1 className="pb-10 pb-sm-5 pb-lg-14" /> */}
        {/* <Content2 className="pb-0 pb-lg-31" /> */}
        {/* <Content3 className="pb-12 pb-lg-25" /> */}
        {/* <Testimonial className="pt-lg-19 pb-12 pb-lg-17" /> */}
        {/* <CTA className="bg-images" /> */}
      </PageWrapper>
    </>
  );
};
export default Home2;
