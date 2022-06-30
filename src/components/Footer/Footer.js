import React from "react";
// import Footer1 from "./Footer1";
// import Footer2 from "./Footer2";
// import Footer3 from "./Footer3";
// import Footer4 from "./Footer4";
// import Footer5 from "./Footer5";
import Footer6 from "./Footer6";

const Footer = ({ className = "", style, ...rest }) => {
  let FooterEl = Footer6;

  // if (style === "style2") {
  //   FooterEl = Footer2;
  // }
  // if (style === "style3") {
  //   FooterEl = Footer3;
  // }
  // if (style === "style4") {
  //   FooterEl = Footer4;
  // }
  // if (style === "style5") {
  //   FooterEl = Footer5;
  // }
  // if (style === "style6") {
  //   FooterEl = Footer6;
  // }

  return (
    <>
      <FooterEl className={className} {...rest} />
    </>
  );
};

export default Footer;
