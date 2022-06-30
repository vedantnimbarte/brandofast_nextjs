import React from "react";

import PageWrapper from "../components/PageWrapper";

const Terms = () => {
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
        <div className="pt-23 pt-md-25 pt-lg-30 pb-9 pb-md-16 pb-lg-21">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-11">
                <div className="text-center">
                  <h2 className="font-size-11 mb-8">Terms &amp; Conditions</h2>
                  <p className="font-size-7 mb-0">
                    Our focus is always on finding the best people to work with.
                    Our bar is high, but you look ready to take on the
                    challenge.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 pr-lg-13 pr-xl-0">
                  <div className="pt-lg-17 pt-8">
                    <p className="font-size-5 heading-default-color mb-0">
                      By accessing and placing an order with UXTheme, you
                      confirm that you are in agreement with and bound by the
                      terms and conditions contained in the Terms Of Use
                      outlined below. These terms apply to the entire website
                      and any email or other type of communication between you
                      and UXTheme. Under no circumstances shall UXTheme team be
                      liable for any direct, indirect, special, incidental or
                      consequential damages, including, but not limited to, loss
                      of data or profit, arising out of the use, or the
                      inability to use, the materials on this site, even if
                      UXTheme team or an authorized representative has been
                      advised of the possibility of such damages. If your use of
                      materials from this site results in the need for
                      servicing, repair or correction of equipment or data, you
                      assume any costs thereof. UXTheme will not be responsible
                      for any outcome that may occur during the course of usage
                      of our resources.We reserve the rights to change prices
                      and revise the resources usage policy in any moment.
                    </p>
                    <div className="mt-9 mt-lg-11">
                      <h5 className="font-size-7 mb-7">License</h5>
                      <p className="font-size-5 heading-default-color">
                        By purchasing or downloading resource (“item” or “file”)
                        you are being granted a license to use these files for
                        specific uses under certain conditions. Ownership
                        remains with UXTheme, and you are required to abide by
                        the following licensing terms.
                      </p>
                    </div>
                    <div className="mt-9 mt-lg-13">
                      <h5 className="font-size-7 mb-7">
                        Embedded content from other websites
                      </h5>
                      <p className="font-size-5 heading-default-color mb-9">
                        Articles on this site may include embedded content (e.g.
                        videos, images, articles, etc.). Embedded content from
                        other websites behaves in the exact same way as if the
                        visitor has visited the other website.
                      </p>
                      <p className="font-size-5 heading-default-color">
                        {" "}
                        These websites may collect data about you, use cookies,
                        embed additional third-party tracking, and monitor your
                        interaction with that embedded content, including
                        tracking your interaction with the embedded content if
                        you have an account and are logged in to that website.
                      </p>
                    </div>
                    <div className="mt-9 mt-lg-13">
                      <h5 className="font-size-7 mb-7">Changes about terms</h5>
                      <p className="font-size-5 heading-default-color">
                        If we change our terms of use we will post those changes
                        on this page. Registered users will be sent an email
                        that outlines changes made to the terms of use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Terms;
