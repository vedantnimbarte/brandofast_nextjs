import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home3/Hero";
import Company from "../sections/home3/Company";
import Feature from "../sections/home3/Feature";
import ContentOne from "../sections/home3/ContentOne";
import ContentTwo from "../sections/home3/ContentTwo";
import Review from "../sections/home3/Review";
import Pricing from "../sections/home3/Pricing";

const Home3 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <button className="btn btn btn-blue-3 header-btn rounded-5">
                Get Started for Free
              </button>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <Hero className="bg-default-3 pt-25 pt-lg-29" />
        <Company className="pt-12 pb-9" />
        <Feature className="pt-4 pt-lg-18 pb-15 pb-lg-25 border-bottom border-default-color-3" />
        <ContentOne className="pt-27 pt-lg-35 pb-lg-34 " />
        <ContentTwo className="pb-13 pb-md-16 pb-lg-28" />
        <Review className="bg-default-3 pt-13 pt-lg-25 pb-9 pb-lg-25" />
        <Pricing className="pt-13 pt-lg-25 pb-8 pb-lg-22 " />
      </PageWrapper>
    </>
  );
};
export default Home3;
