import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Masonry from "../sections/about/Masonry";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import Stats from "../sections/about/Stats";

const PricingPage = () => {
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
        <Hero />
        <Masonry />
        <Content />
        <Team />
        <Stats />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
