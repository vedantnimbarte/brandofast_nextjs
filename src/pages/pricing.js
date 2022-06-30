import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";

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
        <Pricing />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
