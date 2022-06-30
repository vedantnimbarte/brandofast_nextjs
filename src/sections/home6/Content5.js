import React from "react";

import img1 from "../../assets/image/home-6/png/First Page Icon Image And More-45.png";
import img2 from "../../assets/image/home-6/png/First Page Icon Image And More-46.png";
import img3 from "../../assets/image/home-6/png/First Page Icon Image And More-47.png";

import img4 from "../../assets/image/home-6/png/First Page Icon Image And More-48.png";
import img5 from "../../assets/image/home-6/png/First Page Icon Image And More-49.png";
import img6 from "../../assets/image/home-6/png/First Page Icon Image And More-50.png";

import imgC from "../../assets/image/home-6/png/First Page Icon Image And More-44.png";

const Content5 = ({ className, ...rest }) => {
    const contentWidgetData = [
        {
            icon: img1,
            title: "Do it Yourself",
            text: "Spend your time and money, just to do the work yourself.",
        },
        {
            icon: img2,
            title: "No Strategies",
            text: "Get no Insights into techniques, gotta use your own brain.",
        },
        {
            icon: img3,
            title: "Traditional Methods",
            text: "Add colors and use templates to still be unsatisfied with the end result.",
        },
    ];
    const lastWidgetData = [
        {
            icon: img4,
            title: "A.I. Powered Branding",
            text: "Optimized branding solutions based on your business.",
        },
        {
            icon: img5,
            title: "Evoke Emotions",
            text: "Emotional advertising targeted to imprint your brand image in the most effective way.",
        },
        {
            icon: img6,
            title: "Quick Results",
            text: "Take advantage of all our services and still get on-time delivery.",
        },
    ];
    return (
        <>
            <div className={className} {...rest}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        {/* Left */}
                        <div
                            className="col-xl-4 col-lg-4 col-md-4 col-xs-4"
                            data-aos="fade-right"
                            data-aos-delay={500}
                            data-aos-once="true" data-aos-duration={1000}
                        >
                            <h2 className="font-size-10">
                                Why People {""} <br className="d-none d-md-block" /> 
                                Keep Failing.</h2>
                            <ul className="list-unstyled mt-9 mt-lg-14">
                                {contentWidgetData.map(({ icon, title, text }, index) => {
                                    return (
                                        <li className="media align-items-center mb-12" key={index}>
                                            <div className="square-83 rounded-10 mr-9">
                                                <img src={icon} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                                            </div>
                                            <div className="content">
                                                <h5>{title}</h5>
                                                <p className="font-size-5 line-height-28 mb-0">
                                                    {text}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* Left End */}
                        {/* Right */}
                        <div
                            className="col-xl-4 col-lg-4 col-md-4 col-xs-4"
                            data-aos="fade-left"
                            data-aos-delay={500}
                            data-aos-once="true" data-aos-duration={1000}
                        >
                            <div className="l2-content-image-group-2 mb-10 mb-md-0 rounded-10">
                                <div className="img-1 position-relative text-right rounded-10">
                                    <img className="w-100" src={imgC} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* Right */}
                        {/* Left */}
                        <div
                            className="col-xl-4 col-lg-4 col-md-4 col-xs-4"
                            data-aos="fade-right"
                            data-aos-delay={500}
                            data-aos-once="true" data-aos-duration={1000}
                        >
                            <h2 className="font-size-10">
                                How We’ve
                                Changed
                                The Game.</h2>
                            <ul className="list-unstyled mt-9 mt-lg-14">
                                {lastWidgetData.map(({ icon, title, text }, index) => {
                                    return (
                                        <li className="media align-items-center mb-12" key={index}>
                                            <div className="square-83 rounded-10 mr-9">
                                                <img src={icon} alt="" style={{ maxWidth: "100%", height: "auto" }}/>
                                            </div>
                                            <div className="content">
                                                <h5>{title}</h5>
                                                <p className="font-size-5 line-height-28 mb-0">
                                                    {text}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* Left End */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content5;
