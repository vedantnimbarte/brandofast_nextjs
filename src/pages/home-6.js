import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home6/Hero";
import CTA from "../sections/home6/CTA";
import Features from "../sections/home6/Features";
import Content1 from "../sections/home6/Content1";
import Content2 from "../sections/home6/Content2";
import Content3 from "../sections/home6/Content3";
import Screenshots from "../sections/home6/Screenshots";
import Testimonial from "../sections/home6/Testimonial";
import Newsletter from "../sections/home6/Newsletter";
import Promo from "../sections/home6/Promo";

import Blog from "../sections/home6/Blog";
import Content4 from "../sections/home6/Content4";
import Feature from "../sections/home6/Feature";
import Content5 from "../sections/home6/Content5";
import Content6 from "../sections/home6/Content6";

import Buy1 from "../sections/home6/Buy1";

const Home6 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <button className="btn btn btn-pumpkin btn-sm-2 rounded-5 h-50 font-size-5" style={{
                backgroundColor:"#FF0025"
              }}>
                {/* <i className="fa fa-lock mr-9 font-size-5 " />  */}
                Sign Up
              </button>
            </>
          ),
          footerStyle: "style6",
        }}
      >
        <Hero className="position-relative pt-25 pt-md-31 pt-lg-35 pb-14 pb-md-19 pb-lg-33 position-relative overflow-hidden" />
        {/* <CTA className="bg-purple-heart py-10" /> */}
        <Features className="pt-15 pt-md-18 pt-lg-26 pb-15 pb-md-18 pb-lg-26 bg-default-6" />
        <Content1 className="pt-23 pt-md-25 pt-lg-26 pb-9 pb-md-14 pb-lg-31 overflow-hidden position-relative" />
        <Content2 className="bg-default-6 pt-14 pt-md-19 pt-lg-31 pb-9 pb-md-14 pb-lg-31 overflow-hidden position-relative" />
        <Content3 className="pt-22 pt-md-25 pt-lg-31 pb-11 pb-md-14 pb-lg-26 overflow-hidden position-relative" />
        <Screenshots className="bg-purple-heart pt-13 pb-13 pt-md-17 pb-md-19 pt-lg-25 pb-lg-26" />
        <Content4 className="bg-default-6 pt-14 pt-md-19 pt-lg-31 pb-9 pb-md-14 pb-lg-31 overflow-hidden position-relative" />
        <Feature />
        <Content6 className="pb-0 pb-lg-31" />
        <Content5 className="pb-0 pb-lg-31" />
        {/* <Testimonial className="pt-13 pt-md-18 pt-lg-24 pb-13 pb-md-19 pb-lg-28 position-relative" /> */}
        {/* <Promo className="bg-default-6" /> */}
        <Testimonial />
        <Newsletter className="pt-22 pt-md-25 pt-lg-31 pb-11 pb-md-14 pb-lg-26" />
        <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" />
      </PageWrapper>
    </>
  );
};
export default Home6;
