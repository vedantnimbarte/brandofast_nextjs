import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/career/Hero";
import CTA from "../sections/career/CTA";
import Features from "../sections/career/Features";
import Jobs from "../sections/career/Jobs";

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
        <CTA />
        <Features />
        <Jobs />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
