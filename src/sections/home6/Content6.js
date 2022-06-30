import React from "react";

import imgH from "../../assets/image/home-6/png/First Page Icon Image And More-43.png";

import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import imgHeart from "../../assets/image/home-2/png/heart-icon-group.png";
import imgStars from "../../assets/image/home-2/png/star-group.png";

const Content6 = ({ className, ...rest }) => {
    return (
        <>
            <div className={className} {...rest}>
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <!-- Hero Content --> */}
                        <div
                            className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1"
                            data-aos="fade-right"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                        >
                            <div className="pr-lg-10 pr-xl-0 pt-0 pt-lg-0 pb-13 pb-lg-0">
                                <h2 className="font-size-10 mb-8">
                                    Learn Why {""} <br className="d-none d-md-block" />
                                    We Are The Best.
                                </h2>
                                <p className="font-size-7 mb-0 heading-default-color">
                                    We’ve helped over 10,000 different{" "}
                                    <br className="d-none d-md-block" />
                                    businesses speed up their branding
                                    <br className="d-none d-md-block" />
                                    processes.
                                </p>

                            </div>
                        </div>
                        {/* <!-- End Hero Content --> */}
                        {/* <!-- l2-hero-image-group --> */}
                        <div
                            className="col-xl-7 col-lg-6 col-md-7 order-1 order-lg-2"
                            data-aos="fade-left"
                            data-aos-delay="800"
                            data-aos-duration="1000"
                        >
                            <div className="img-1">
                                <img src={imgH} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                        </div>
                        {/* <!-- End l2-hero-image-group --> */}
                    </div>
                    <div className="row justify-content-center justify-content-lg-start">
                        {/* Left */}
                        <div className="col-xl-5 col-lg-6 col-md-9">
                            <div className="row">
                                {/* Single Counter */}
                                <div className="col-xs-6">
                                    <div
                                        className="mb-11 mb-lg-0"
                                        data-aos="fade-left"
                                        data-aos-once="true" data-aos-duration={1000}
                                        data-duration={1000}
                                    >
                                        <h2 className="font-size-10 mb-6">
                                            <LazyLoad>
                                                <span className="counter">
                                                    <CountUp duration={4} end={10} />K
                                                </span>
                                            </LazyLoad>
                                        </h2>
                                        <div className="mt-5">
                                            <img className="mb-7" src={imgHeart} alt="" />
                                            <h5 className="font-size-5 font-weight-normal mb-1">
                                                Happy Customers
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Counter */}
                                {/* Single Counter */}
                                <div className="col-xs-6">
                                    <div
                                        className="mb-11 mb-lg-0"
                                        data-aos="fade-left"
                                        data-aos-once="true" data-aos-duration={1000}
                                        data-duration={1000}
                                    >
                                        <h2 className="font-size-10 mb-6">
                                            <LazyLoad>
                                                <CountUp duration={4} end={4} className="counter" />.
                                                <CountUp duration={3} end={7} className="counter" />
                                            </LazyLoad>
                                        </h2>
                                        <div className="mt-5">
                                            <img className="mb-7" src={imgStars} alt="" />
                                            <h5 className="font-size-5 font-weight-normal mb-1">
                                                User Rating
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Counter */}
                            </div>
                        </div>
                        {/* Left End */}
                        {/* Right Start */}
                        <div className="col-lg-6 offset-xl-1">
                            <div className="row">
                                <div className="col-lg-12 col-md-7 col-xs-9">
                                    <div
                                        className="section-title"
                                        data-aos="flip-up"
                                        data-aos-once="true" data-aos-duration={1000}
                                        data-duration={1000}
                                    >
                                        <h2 className="font-size-8 pr-xl-22 mb-7 mb-lg-11 pr-lg-0">
                                            Trusted by major global brands {""} <br className="d-none d-md-block" />
                                            for advertising and branding!
                                        </h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Right End */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Content6;
