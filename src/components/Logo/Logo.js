import React from "react";
import Link from "next/link";

// import logoB from "../../assets/image/svg/logo-main-white.svg";
import logoW from "../../assets/image/home-6/svg/Brnadofast Logo-01.svg";

const Logo = ({ className = "", ...rest }) => {
  return (
    <Link href="/#">
      <a className={`${className}`} {...rest}>
        {/* <!-- light version logo (logo must be black)--> */}
        <img
          src={logoW}
          alt="Brandofast Logo"
          width={200}
          height={100}
          className="light-version-logo m-2 p-2"
        />
        {/* <!-- Dark version logo (logo must be White)--> */}
        {/* <img src={logoW} alt="Brandofast Logo" className="dark-version-logo" /> */}
      </a>
    </Link>
  );
};

export default Logo;
