import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home4/Hero";
import ContentOne from "../sections/home4/ContentOne";
import ContentTwo from "../sections/home4/ContentTwo";
import ContentThree from "../sections/home4/ContentThree";
import Team from "../sections/home4/Team";
import Testimonial from "../sections/home4/Testimonial";
import Pricing from "../sections/home4/Pricing";

const Home3 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right dark-mode-texts",
          headerButton: (
            <>
              <button className="btn btn btn-white btn-medium rounded-5 font-size-3">
                Start 14 Days trial
              </button>
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <Hero className="bg-blue-1 position-relative pt-20 pt-sm-24 pt-lg-34 pb-9 pb-lg-32" />
        <ContentOne className="pt-13 pt-lg-28 pb-13 pb-lg-26" />
        <ContentTwo className="bg-default-4 pt-15 pt-lg-30 pb-15 pb-lg-26" />
        <ContentThree className="bg-dark-cloud pt-30 pt-lg-28 pb-15 pb-lg-30" />
        <Team className="pt-13 pt-lg-24 pb-15 pb-lg-25" />
        <Testimonial />
        <Pricing className="bg-sunset pt-14 pt-lg-24 pb-5 pb-lg-27" />
      </PageWrapper>
    </>
  );
};
export default Home3;
