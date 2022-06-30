import React, { Component } from "react";
import Slider from "react-slick";

import brand from "../../assets/image/home-4/company-logo/dark-logo-1.png";
import brandLight from "../../assets/image/home-4/company-logo/dark-logo-1.png";
import brand2 from "../../assets/image/home-4/company-logo/dark-logo-2.png";
import brandLight2 from "../../assets/image/home-4/company-logo/dark-logo-2.png";
import brand3 from "../../assets/image/home-4/company-logo/dark-logo-3.png";
import brandLight3 from "../../assets/image/home-4/company-logo/dark-logo-3.png";
import brand4 from "../../assets/image/home-4/company-logo/dark-logo-4.png";
import brandLight4 from "../../assets/image/home-4/company-logo/dark-logo-4.png";
import brand5 from "../../assets/image/home-4/company-logo/dark-logo-5.png";
import brandLight5 from "../../assets/image/home-4/company-logo/dark-logo-5.png";


import userImage1 from "../../assets/image/home-4/png/review-meta-img.png";
import userImage2 from "../../assets/image/home-4/png/review-meta-img-2.png";
import userImage3 from "../../assets/image/home-4/png/review-meta-img-3.png";
import userImage4 from "../../assets/image/home-4/png/review-meta-img-4.png";
import userImage5 from "../../assets/image/home-4/png/review-meta-img-5.png";
import userImage6 from "../../assets/image/home-4/png/review-meta-img-6.png";
const sliderNavigationData = [
  {
    darkLogo: brand,
    lightLogo: brandLight,
  },
  {
    darkLogo: brand2,
    lightLogo: brandLight2,
  },
  {
    darkLogo: brand3,
    lightLogo: brandLight3,
  },
  {
    darkLogo: brand4,
    lightLogo: brandLight4,
  },
  {
    darkLogo: brand5,
    lightLogo: brandLight5,
  },
];

const mainSliderData = [
  {
    text:
      "“Professionals in their expertise! They know what they are doing and what other teams want. Great with their service Recommend.”",
    image: userImage1,
    name: "Sarah Plath",
    position: "HR Manager",
  },
  {
    text:
      "“Great with their service.Recommend. This really is the most incredible service that most website owners should consider using.”",
    image: userImage2,
    name: "Tanjim Brew",
    position: "HR Manager",
  },
  {
    text:
      "“We are going to do an overhaul of our terms later this year and we will use you guys for it.Professionals in their expertise!”",
    image: userImage3,
    name: "Akash Jack",
    position: "HR Manager",
  },
  {
    text:
      "“Yeah I definitely got what I need from TermFeed. I was reading through and I think it captures what I was looking for.I had been trying to write”",
    image: userImage4,
    name: "Lambi Raw",
    position: "HR Manager",
  },
  {
    text:
      "“I had been trying to write a Privacy Policy and Terms and Conditions for my website for quite a while.Yeah I definitely got what I need from TermFeed.”",
    image: userImage5,
    name: "Juka Mami",
    position: "HR Manager",
  },
  {
    text:"“The set of legal docs on offer, We are going to do an overhaul of our terms later this year for the most part are great and I found the experience a good one.”",
    image: userImage6,
    name: "Ekramul Bert",
    position: "HR Manager",
  },
];


 class Testimonial extends Component {
   constructor(props) {
       super()
     this.state = {
       nav1: null,
       nav2: null,
     };
   }

   componentDidMount() {
     this.setState({
       nav1: this.slider1,
       nav2: this.slider2,
     });
   }

   render() {
     return (
       <div className="bg-default-4 pt-10 pt-lg-22 pb-11 pb-lg-23 border-top border-default-color" >
         <div className="container">
           <div className="row">
             <div className="col-12">
               {/* Brand Logos */}
               <Slider
                 asNavFor={this.state.nav1}
                 ref={(slider) => (this.slider2 = slider)}
                 slidesToShow = {5}
                 dots= {false}
                 arrows ={false}
                 focusOnSelect = {true}
                 centerPadding = {"60px"}
                 swipe = {false}
                 responsive = {[{
                  breakpoint: 1180,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 530,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]}
                 className="l4-tab-slider border-bottom d-flex"
               >
                 {sliderNavigationData.map(({ darkLogo, lightLogo }, index) => {
                   return (
                     <div
                       className="single-tab d-flex flex-column justify-content-center"
                       key={`${index.toString()}-n`}
                     >
                       <img
                         className="light-version-logo"
                         src={darkLogo}
                         alt=""
                       />
                       <img
                         className="dark-version-logo default-logo"
                         src={lightLogo}
                         alt=""
                       />
                     </div>
                   );
                 })}
               </Slider>
               {/* End Brand Logos */}
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-xl-7 col-lg-9 col-md-11">
               <Slider
                 asNavFor={this.state.nav2}
                 ref={(slider) => (this.slider1 = slider)}
                 arrows={false}
                 className="l4-review-slider mt-13 mt-lg-21 mx-xl-0 mx-lg-10 mx-md-8"
                 fade={true}
               >
                 {mainSliderData.map(({text,image,name,position},index) => {
                     return (
                       <React.Fragment key={`${index.toString()}-m`}>
                         {/* Single Review */}
                         <div className="single-review text-center focus-reset">
                           <p className="font-size-9 font-weight-bold heading-default-color">
                             {text}
                           </p>
                           <div className="mt-13">
                             <div className="mb-8 circle-100 mx-auto overflow-hidden">
                               <img src={image} alt="" className="w-100"/>
                             </div>
                             <h5 className="font-size-6 mb-0">{name}</h5>
                             <p className="font-size-5">{position}</p>
                           </div>
                         </div>
                         {/* End Single Review */}
                       </React.Fragment>
                     );
                 })}
                 
               </Slider>
             </div>
           </div>
         </div>
       </div>
     );
   }
 }


export default Testimonial;