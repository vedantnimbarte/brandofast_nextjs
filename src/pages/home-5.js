import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home5/Hero";
import Content1 from "../sections/home5/Content1";
import Content2 from "../sections/home5/Content2";
import Content3 from "../sections/home5/Content3";
import Testimonial from "../sections/home5/Testimonial";
import MusicArea from "../sections/home5/MusicArea";

const Home5 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerFluid: false,
          headerButton: (
            <>
              <button className="btn btn btn-sunset btn-medium rounded-5 font-size-3">
                Start 14 Days trial
              </button>
            </>
          ),
          footerStyle: "style5",
        }}
      >
        <Hero className="position-relative pt-22 pt-lg-31 pb-13 pb-lg-25" />
        <Content1 className="bg-default-5 pt-13 pt-md-19 pt-lg-0 pb-14 pb-md-18 pb-lg-26 overflow-hidden" />
        <Content2 className="bg-pattens-blue pt-15 pt-md-19 pt-lg-30 pb-15 pb-md-19 pb-lg-32" />
        <Content3 className="bg-dark-cloud pt-15 pt-md-19 pt-lg-33 pt-xl-0 pb-15 pb-md-19 pb-lg-31 pb-xl-0 position-relative overflow-hidden" />
        <Testimonial />
        <MusicArea className="bg-default-5 pt-13 pt-md-18 pt-lg-24 pb-9 pb-md-13 pb-lg-28" />
      </PageWrapper>
    </>
  );
};
export default Home5;
