import React from "react";
import bannerimg1 from "../Images/banner-img-home.webp.png";
import { Link } from "react-router-dom";
import "./Home.css";
import sec3profilepic1 from '../Images/div.AlternateCaseStudyHub_avatar__GRIBG.png'
import sec3profilepic2 from '../Images/div.AlternateCaseStudyHub_avatar__GRIBG (1).png'
import sec3logopic1 from '../Images/Group 187.svg'
import sec3logopic2 from '../Images/327176a3-aee1-43f4-b965-51e53dc42b83 1.svg'
import sec3productpic1 from '../Images/Group 1000008936.png'
import sec3productpic2 from '../Images/4ba042b0-b4ce-469b-9373-f4337777ef9f 3.png'
import goalcardpic1 from '../Images/Style_2_copy_3.svg'
import goalcardpic2 from '../Images/fi_5968594.svg'
import e7fpic1 from '../Images/Group 1000008782.png'
import e7fpic2 from '../Images/Group 1000008783.png'
import e7fpic3 from '../Images/Group 1000008784.png'
import boostpic1 from '../Images/Group 1000008878.png'


import logopic1 from '../Images/Group 1000009054.svg'
import logopic2 from '../Images/Group 1000009055.svg'
import logopic3 from '../Images/Group 1000009056.svg'
import logopic4 from '../Images/Group 1000009057.svg'
import logopic5 from '../Images/Group 1000009059.svg'
import logopic6 from '../Images/Group 1000009060.svg'
import logopic7 from '../Images/Vector (22).svg'
import logopic8 from '../Images/Group (33).svg'

import Marquee from "react-fast-marquee";
import reserachpic1 from '../Images/Group 1000008844.png'
import reserachpic2 from '../Images/Group 1000008848 (1).png'
import reserachpic3 from '../Images/Group 1000009061.png'

import Fade from "react-reveal/Fade";



function Home() {
  return (
    <div>

      <div className="container-fluid home-sec-div1">
        <div className="container abc h-100">
          <div className="row h-100">

            {/* ######### for mobile screen ########## */}


            <div className="col-lg-5 col-12 d-lg-none d-flex align-items-center h-100">
              <Fade right duration={1500} distance='10%'>
                <div className="">
                  <img
                    src={bannerimg1}
                    alt=""
                    className="img-fluid home-banner-profile-img11"
                  />
                </div>
              </Fade>
            </div>


            <div className="col-lg-7 col-12">
              <Fade left duration={1500} distance='10%'>
                <p className="home-banner-p121">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="17"
                    viewBox="0 0 32 17"
                    fill="none"
                  >
                    <path
                      d="M31.7392 8.66714L31.8508 9.40874L31.9019 7.93497L31.7392 8.66714ZM24.2711 0.721998L24.0683 0L22.6241 0.405995L22.8269 1.12799L24.2711 0.721998ZM22.2414 15.4568L21.9775 16.159L23.3817 16.6862L23.6455 15.984L22.2414 15.4568ZM31.7392 8.66714C31.9019 7.93497 31.9016 7.93492 31.9019 7.93497C31.9018 7.93495 31.9019 7.93498 31.9019 7.93497C31.8996 7.93442 31.895 7.93334 31.888 7.93162C31.8739 7.92817 31.8506 7.92231 31.8186 7.91375C31.7548 7.89662 31.6567 7.86874 31.5295 7.82785C31.275 7.74603 30.905 7.61251 30.4603 7.40965C29.5697 7.00348 28.3875 6.32303 27.231 5.22984L26.2004 6.32004C27.501 7.54949 28.8304 8.31515 29.8374 8.77441C30.3413 9.00428 30.7665 9.15831 31.07 9.25587C31.2218 9.30467 31.3434 9.33942 31.4295 9.36252C31.4726 9.37407 31.5068 9.38271 31.5315 9.38875C31.5438 9.39176 31.5538 9.39413 31.5613 9.39588C31.5651 9.39675 31.5682 9.39747 31.5707 9.39805C31.572 9.39833 31.5731 9.39858 31.574 9.39879C31.5745 9.3989 31.5749 9.399 31.5753 9.39908C31.5752 9.39906 31.5755 9.39913 31.5753 9.39908C31.5756 9.39914 31.5764 9.39932 31.7392 8.66714ZM27.231 5.22984C26.0746 4.13666 25.3296 2.99533 24.8749 2.12993C24.6478 1.69772 24.4941 1.33627 24.3984 1.08709C24.3506 0.962588 24.3174 0.866388 24.2968 0.803718C24.2865 0.772398 24.2794 0.749478 24.2751 0.735628C24.273 0.728708 24.2718 0.724298 24.2711 0.721998C24.2708 0.720848 24.2705 0.720038 24.2705 0.720078C24.2704 0.719758 24.2705 0.720098 24.2705 0.720078C24.2705 0.720038 24.2708 0.720848 24.2711 0.721998C24.2711 0.721938 24.2712 0.722108 24.2711 0.721998C24.2712 0.722208 24.2711 0.721998 23.549 0.924988C22.8269 1.12799 22.8268 1.12773 22.8269 1.12799C22.8269 1.12808 22.8271 1.12885 22.8272 1.12904C22.8273 1.12943 22.8274 1.12986 22.8275 1.13032C22.8278 1.13126 22.8281 1.13235 22.8285 1.13359C22.8292 1.13607 22.8301 1.13917 22.8312 1.14287C22.8333 1.15028 22.8362 1.1601 22.8399 1.17225C22.8473 1.19656 22.8578 1.23021 22.8717 1.27253C22.8995 1.35715 22.941 1.47654 22.9981 1.62526C23.1122 1.92253 23.2895 2.33807 23.547 2.82801C24.0613 3.80693 24.8997 5.09057 26.2004 6.32004L27.231 5.22984ZM22.9434 15.7204C23.6455 15.984 23.6455 15.9838 23.6455 15.984C23.6454 15.9841 23.6456 15.9839 23.6455 15.984C23.6463 15.9818 23.648 15.9778 23.6506 15.9712C23.6559 15.958 23.6648 15.9361 23.6776 15.9062C23.7031 15.8463 23.744 15.7544 23.8017 15.6357C23.9172 15.3982 24.0997 15.0545 24.3611 14.6461C24.8846 13.8284 25.7204 12.7583 26.9637 11.7613L26.0256 10.5913C24.6301 11.7103 23.6904 12.9122 23.0979 13.8376C22.8014 14.3008 22.5908 14.6963 22.4528 14.9802C22.3837 15.1222 22.3327 15.2366 22.298 15.3177C22.2807 15.3583 22.2674 15.3907 22.2581 15.4141C22.2534 15.4258 22.2497 15.4353 22.2469 15.4424C22.2455 15.446 22.2444 15.449 22.2434 15.4514C22.243 15.4526 22.2426 15.4536 22.2422 15.4546C22.2421 15.455 22.2419 15.4554 22.2418 15.4558C22.2417 15.456 22.2418 15.4557 22.2418 15.4558C22.2417 15.4561 22.2414 15.4568 22.9434 15.7204ZM26.9637 11.7613C28.2073 10.7641 29.4434 10.1729 30.3663 9.83169C30.8271 9.66129 31.2078 9.55409 31.4689 9.4901C31.5994 9.45814 31.6998 9.43705 31.7652 9.42432C31.7979 9.41796 31.8217 9.41368 31.8362 9.41119C31.8435 9.40995 31.8484 9.40913 31.8508 9.40874C31.852 9.40854 31.8527 9.40845 31.8527 9.40845C31.8525 9.40848 31.851 9.40871 31.8508 9.40874C31.8507 9.40876 31.8509 9.40873 31.8508 9.40874C31.8506 9.40877 31.8508 9.40874 31.7392 8.66714C31.6275 7.92555 31.6273 7.92559 31.627 7.92563C31.6269 7.92564 31.6272 7.9256 31.627 7.92563C31.6266 7.92569 31.6257 7.92584 31.6252 7.92591C31.6242 7.92605 31.6231 7.92622 31.6219 7.92642C31.6193 7.92681 31.6162 7.92731 31.6124 7.92792C31.6048 7.92915 31.5948 7.93081 31.5823 7.93296C31.5573 7.93726 31.5226 7.9435 31.4789 7.95202C31.3914 7.96906 31.2677 7.99521 31.1126 8.03318C30.8027 8.10906 30.367 8.23238 29.8466 8.42478C28.8069 8.80917 27.4207 9.47247 26.0256 10.5913L26.9637 11.7613Z"
                      fill="#fff"
                    />
                    <path
                      d="M0.744261 7.9349L0 8.02752L0.185221 9.51605L0.929481 9.42342L0.744261 7.9349ZM31.0241 9.35236L31.7688 9.44143L31.9469 7.95205L31.2022 7.86297L31.0241 9.35236ZM0.836871 8.67916C0.929481 9.42342 0.929481 9.42342 0.929481 9.42342C0.930161 9.42333 0.932051 9.42311 0.933551 9.42292C0.936551 9.42255 0.941191 9.42198 0.947451 9.42122C0.959961 9.41969 0.978961 9.41739 1.00427 9.41437C1.05491 9.40832 1.13082 9.39938 1.23078 9.38796C1.4307 9.36512 1.72676 9.33237 2.10901 9.29301C2.87356 9.21427 3.98262 9.10911 5.35663 9.0039C8.10544 8.79341 11.9107 8.58301 16.1369 8.58301V7.08301C11.863 7.08301 8.0183 7.29569 5.24211 7.50828C3.85362 7.6146 2.73143 7.72098 1.95535 7.8009C1.56729 7.84086 1.2657 7.87422 1.06054 7.89765C0.957961 7.90937 0.879481 7.91861 0.826351 7.92496C0.799791 7.92813 0.779561 7.93058 0.765831 7.93225C0.758961 7.93309 0.753721 7.93374 0.750121 7.93418C0.748321 7.9344 0.746931 7.93457 0.745951 7.93469C0.745461 7.93476 0.744551 7.93486 0.744261 7.9349C0.744121 7.93492 0.744331 7.93489 0.744261 7.9349C0.744151 7.93491 0.744261 7.9349 0.836871 8.67916ZM16.1369 8.58301C20.3648 8.58301 24.0904 8.7757 26.7585 8.96839C28.0922 9.06471 29.1609 9.16098 29.8952 9.23304C30.2622 9.26907 30.5457 9.29904 30.7367 9.31994C30.8323 9.33038 30.9047 9.33856 30.9529 9.34409C30.9771 9.34685 30.9952 9.34896 31.007 9.35035C31.013 9.35105 31.0174 9.35157 31.0202 9.3519C31.0217 9.35207 31.0235 9.35228 31.0241 9.35236C31.024 9.35234 31.0245 9.3524 31.0241 9.35236C31.0241 9.35236 31.0241 9.35236 31.1131 8.60767C31.2022 7.86297 31.2023 7.86299 31.2022 7.86297C31.2022 7.86296 31.2023 7.86299 31.2022 7.86297C31.2019 7.86294 31.2011 7.86284 31.2006 7.86278C31.1996 7.86267 31.1983 7.86251 31.1966 7.86231C31.1931 7.8619 31.1881 7.86131 31.1816 7.86054C31.1684 7.859 31.1491 7.85675 31.1237 7.85384C31.073 7.84803 30.998 7.83956 30.8998 7.82883C30.7035 7.80736 30.4145 7.77681 30.0417 7.74021C29.296 7.66702 28.2144 7.56963 26.8665 7.47229C24.1714 7.27765 20.4089 7.08301 16.1369 7.08301V8.58301Z"
                      fill="#fff"
                    />
                  </svg>{" "}
                  Performance Marketing For E-Commerce Brands
                </p>
                <h1 className="profile-text1" id="profile-text1">
                  <span className="profile-text1-span1">full service </span>
                  <span className="profile-text1-span2">E-Commerce agency </span>
                  creates more wins for your brand
                </h1>
                <p className="home-banner-para1">
                  {" "}
                  Growing a brand is hard. We make it a lot easier, more{" "}
                  <br className="d-md-block d-none" />
                  predictable, less stressful, and more fun.
                </p>
                <div className="home-btn-div1 d-flex align-items-center">
                  <Link to="/contact" className="view-all-btn1">
                    Request a call with E7F expert{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="17"
                      viewBox="0 0 32 17"
                      fill="none"
                    >
                      <path
                        d="M31.7392 8.66714L31.8508 9.40874L31.9019 7.93497L31.7392 8.66714ZM24.2711 0.721998L24.0683 0L22.6241 0.405995L22.8269 1.12799L24.2711 0.721998ZM22.2414 15.4568L21.9775 16.159L23.3817 16.6862L23.6455 15.984L22.2414 15.4568ZM31.7392 8.66714C31.9019 7.93497 31.9016 7.93492 31.9019 7.93497C31.9018 7.93495 31.9019 7.93498 31.9019 7.93497C31.8996 7.93442 31.895 7.93334 31.888 7.93162C31.8739 7.92817 31.8506 7.92231 31.8186 7.91375C31.7548 7.89662 31.6567 7.86874 31.5295 7.82785C31.275 7.74603 30.905 7.61251 30.4603 7.40965C29.5697 7.00348 28.3875 6.32303 27.231 5.22984L26.2004 6.32004C27.501 7.54949 28.8304 8.31515 29.8374 8.77441C30.3413 9.00428 30.7665 9.15831 31.07 9.25587C31.2218 9.30467 31.3434 9.33942 31.4295 9.36252C31.4726 9.37407 31.5068 9.38271 31.5315 9.38875C31.5438 9.39176 31.5538 9.39413 31.5613 9.39588C31.5651 9.39675 31.5682 9.39747 31.5707 9.39805C31.572 9.39833 31.5731 9.39858 31.574 9.39879C31.5745 9.3989 31.5749 9.399 31.5753 9.39908C31.5752 9.39906 31.5755 9.39913 31.5753 9.39908C31.5756 9.39914 31.5764 9.39932 31.7392 8.66714ZM27.231 5.22984C26.0746 4.13666 25.3296 2.99533 24.8749 2.12993C24.6478 1.69772 24.4941 1.33627 24.3984 1.08709C24.3506 0.962588 24.3174 0.866388 24.2968 0.803718C24.2865 0.772398 24.2794 0.749478 24.2751 0.735628C24.273 0.728708 24.2718 0.724298 24.2711 0.721998C24.2708 0.720848 24.2705 0.720038 24.2705 0.720078C24.2704 0.719758 24.2705 0.720098 24.2705 0.720078C24.2705 0.720038 24.2708 0.720848 24.2711 0.721998C24.2711 0.721938 24.2712 0.722108 24.2711 0.721998C24.2712 0.722208 24.2711 0.721998 23.549 0.924988C22.8269 1.12799 22.8268 1.12773 22.8269 1.12799C22.8269 1.12808 22.8271 1.12885 22.8272 1.12904C22.8273 1.12943 22.8274 1.12986 22.8275 1.13032C22.8278 1.13126 22.8281 1.13235 22.8285 1.13359C22.8292 1.13607 22.8301 1.13917 22.8312 1.14287C22.8333 1.15028 22.8362 1.1601 22.8399 1.17225C22.8473 1.19656 22.8578 1.23021 22.8717 1.27253C22.8995 1.35715 22.941 1.47654 22.9981 1.62526C23.1122 1.92253 23.2895 2.33807 23.547 2.82801C24.0613 3.80693 24.8997 5.09057 26.2004 6.32004L27.231 5.22984ZM22.9434 15.7204C23.6455 15.984 23.6455 15.9838 23.6455 15.984C23.6454 15.9841 23.6456 15.9839 23.6455 15.984C23.6463 15.9818 23.648 15.9778 23.6506 15.9712C23.6559 15.958 23.6648 15.9361 23.6776 15.9062C23.7031 15.8463 23.744 15.7544 23.8017 15.6357C23.9172 15.3982 24.0997 15.0545 24.3611 14.6461C24.8846 13.8284 25.7204 12.7583 26.9637 11.7613L26.0256 10.5913C24.6301 11.7103 23.6904 12.9122 23.0979 13.8376C22.8014 14.3008 22.5908 14.6963 22.4528 14.9802C22.3837 15.1222 22.3327 15.2366 22.298 15.3177C22.2807 15.3583 22.2674 15.3907 22.2581 15.4141C22.2534 15.4258 22.2497 15.4353 22.2469 15.4424C22.2455 15.446 22.2444 15.449 22.2434 15.4514C22.243 15.4526 22.2426 15.4536 22.2422 15.4546C22.2421 15.455 22.2419 15.4554 22.2418 15.4558C22.2417 15.456 22.2418 15.4557 22.2418 15.4558C22.2417 15.4561 22.2414 15.4568 22.9434 15.7204ZM26.9637 11.7613C28.2073 10.7641 29.4434 10.1729 30.3663 9.83169C30.8271 9.66129 31.2078 9.55409 31.4689 9.4901C31.5994 9.45814 31.6998 9.43705 31.7652 9.42432C31.7979 9.41796 31.8217 9.41368 31.8362 9.41119C31.8435 9.40995 31.8484 9.40913 31.8508 9.40874C31.852 9.40854 31.8527 9.40845 31.8527 9.40845C31.8525 9.40848 31.851 9.40871 31.8508 9.40874C31.8507 9.40876 31.8509 9.40873 31.8508 9.40874C31.8506 9.40877 31.8508 9.40874 31.7392 8.66714C31.6275 7.92555 31.6273 7.92559 31.627 7.92563C31.6269 7.92564 31.6272 7.9256 31.627 7.92563C31.6266 7.92569 31.6257 7.92584 31.6252 7.92591C31.6242 7.92605 31.6231 7.92622 31.6219 7.92642C31.6193 7.92681 31.6162 7.92731 31.6124 7.92792C31.6048 7.92915 31.5948 7.93081 31.5823 7.93296C31.5573 7.93726 31.5226 7.9435 31.4789 7.95202C31.3914 7.96906 31.2677 7.99521 31.1126 8.03318C30.8027 8.10906 30.367 8.23238 29.8466 8.42478C28.8069 8.80917 27.4207 9.47247 26.0256 10.5913L26.9637 11.7613Z"
                        fill="#282420"
                      />
                      <path
                        d="M0.744261 7.9349L0 8.02752L0.185221 9.51605L0.929481 9.42342L0.744261 7.9349ZM31.0241 9.35236L31.7688 9.44143L31.9469 7.95205L31.2022 7.86297L31.0241 9.35236ZM0.836871 8.67916C0.929481 9.42342 0.929481 9.42342 0.929481 9.42342C0.930161 9.42333 0.932051 9.42311 0.933551 9.42292C0.936551 9.42255 0.941191 9.42198 0.947451 9.42122C0.959961 9.41969 0.978961 9.41739 1.00427 9.41437C1.05491 9.40832 1.13082 9.39938 1.23078 9.38796C1.4307 9.36512 1.72676 9.33237 2.10901 9.29301C2.87356 9.21427 3.98262 9.10911 5.35663 9.0039C8.10544 8.79341 11.9107 8.58301 16.1369 8.58301V7.08301C11.863 7.08301 8.0183 7.29569 5.24211 7.50828C3.85362 7.6146 2.73143 7.72098 1.95535 7.8009C1.56729 7.84086 1.2657 7.87422 1.06054 7.89765C0.957961 7.90937 0.879481 7.91861 0.826351 7.92496C0.799791 7.92813 0.779561 7.93058 0.765831 7.93225C0.758961 7.93309 0.753721 7.93374 0.750121 7.93418C0.748321 7.9344 0.746931 7.93457 0.745951 7.93469C0.745461 7.93476 0.744551 7.93486 0.744261 7.9349C0.744121 7.93492 0.744331 7.93489 0.744261 7.9349C0.744151 7.93491 0.744261 7.9349 0.836871 8.67916ZM16.1369 8.58301C20.3648 8.58301 24.0904 8.7757 26.7585 8.96839C28.0922 9.06471 29.1609 9.16098 29.8952 9.23304C30.2622 9.26907 30.5457 9.29904 30.7367 9.31994C30.8323 9.33038 30.9047 9.33856 30.9529 9.34409C30.9771 9.34685 30.9952 9.34896 31.007 9.35035C31.013 9.35105 31.0174 9.35157 31.0202 9.3519C31.0217 9.35207 31.0235 9.35228 31.0241 9.35236C31.024 9.35234 31.0245 9.3524 31.0241 9.35236C31.0241 9.35236 31.0241 9.35236 31.1131 8.60767C31.2022 7.86297 31.2023 7.86299 31.2022 7.86297C31.2022 7.86296 31.2023 7.86299 31.2022 7.86297C31.2019 7.86294 31.2011 7.86284 31.2006 7.86278C31.1996 7.86267 31.1983 7.86251 31.1966 7.86231C31.1931 7.8619 31.1881 7.86131 31.1816 7.86054C31.1684 7.859 31.1491 7.85675 31.1237 7.85384C31.073 7.84803 30.998 7.83956 30.8998 7.82883C30.7035 7.80736 30.4145 7.77681 30.0417 7.74021C29.296 7.66702 28.2144 7.56963 26.8665 7.47229C24.1714 7.27765 20.4089 7.08301 16.1369 7.08301V8.58301Z"
                        fill="#282420"
                      />
                    </svg>
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="col-lg-5 col-12 d-lg-flex d-none align-items-center h-100">
              <Fade right duration={1500} distance='10%'>
                <div className="">
                  <img
                    src={bannerimg1}
                    alt=""
                    className="img-fluid home-banner-profile-img11"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>






      <div className='container-fluid home-logosec-div1'>
        <Fade bottom duration={1500} distance='3%'>
          <div className=' home-trustedbrand-div1 '>
            <div className=''>
              <Marquee>
                <div className='home-trustedbrand-text311'>
                  <img src={logopic1} alt="" />
                </div>
                <div className='home-trustedbrand-text3'>
                  <img src={logopic2} alt="" />
                </div>
                <div className='home-trustedbrand-text3'>
                  <img src={logopic5} alt="" />
                </div>
                <div className='home-trustedbrand-text3'>
                  <img src={logopic6} alt="" />
                </div>
                <div className='home-trustedbrand-text3'>
                  <img src={logopic8} alt="" />
                </div>
                <div className='home-trustedbrand-text3'>
                  <img src={logopic4} alt="" />
                </div>
                <div className='home-trustedbrand-text3'>
                  <img src={logopic3} alt="" />
                </div>
                <div className='home-trustedbrand-text3'>
                  <img src={logopic7} alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </Fade>
      </div>





      <div className="container-fluid home-section3-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Fade left duration={1500} distance='8%'>
                <div className="home-sec3-coldiv1">
                  <div className="row">
                    <div className="col-lg-6 col-7">
                      <div className="home-sec3-card-div1">
                        <div>
                          <img src={sec3profilepic1} alt="" />
                          <img src={sec3logopic1} alt="" />
                        </div>
                        <div className="home-sec3-cardtext-div1">
                          <h1>39%</h1>
                          <p>Increase in Amazon Sales</p>
                          <a href=""><div>Read the story {'->'}</div></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-5 d-flex align-items-center">
                      <div className=''>
                        <img src={sec3productpic1} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>




            <div className="col-lg-6">
              <Fade right duration={1500} distance='8%'>
                <div className="home-sec3-coldiv1">
                  <div className="row">
                    <div className="col-lg-6 col-7">
                      <div className="home-sec3-card-div1">
                        <div>
                          <img src={sec3profilepic2} alt="" />
                          <img src={sec3logopic2} alt="" />
                        </div>
                        <div className="home-sec3-cardtext-div1">
                          <h1>39%</h1>
                          <p>Increase in Amazon Sales</p>
                          <a href=""><div>Read the story {'->'}</div></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-5 d-flex align-items-center">
                      <div >
                        <img src={sec3productpic2} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>















      <div className='container-fluid home-goal-div1'>
        <div className='container'>
          <div>
            <Fade bottom duration={1500} distance='4%'>
              <h1 className='home-goal-text1'>Hit Your Revenue Goals in <span><svg className='' xmlns="http://www.w3.org/2000/svg" width="186" height="71" viewBox="0 0 186 71" fill="none">
                <path d="M138.043 9.77529C146.765 10.4952 153.452 12.9758 160.124 15.7203C165.588 17.9703 170.059 20.4264 173.426 23.0097C176.794 25.5942 179.044 28.2974 180.085 31.0378C181.122 33.7703 180.96 36.5488 179.486 39.3124C178.007 42.0841 175.199 44.8563 170.917 47.5451C157.584 55.8944 136.343 62.221 113.006 65.4515C89.6739 68.6813 64.2714 68.8127 42.6247 64.7909C41.7111 64.6217 40.7668 64.4521 39.7984 64.2782C30.5693 62.6205 19.1453 60.5686 11.1146 54.7416C6.99521 51.7541 5.27278 48.6705 5.15802 45.6458C5.04306 42.6159 6.53882 39.5909 8.97633 36.7103C13.949 30.7976 22.7564 25.5829 29.6796 22.2957C59.9308 7.96326 118.281 -3.27538 168.352 7.3549L168.354 7.35528C168.892 7.46439 169.447 7.46935 169.92 7.38708C170.38 7.30689 170.808 7.13526 171.041 6.84855C171.162 6.6996 171.222 6.53082 171.211 6.35737C171.2 6.18817 171.121 6.03647 171.007 5.90847C170.78 5.65547 170.382 5.46005 169.882 5.35323C118.245 -5.60769 57.9591 5.85294 26.7407 20.6419C22.4209 22.6978 17.3781 25.4854 12.909 28.7286C8.44429 31.9687 4.53025 35.6788 2.49364 39.5854L2.49324 39.5862C1.11125 42.2626 0.593852 45.0358 1.34465 47.8102C2.09441 50.5808 4.10165 53.3259 7.71521 55.9683C16.4345 62.3139 28.8685 64.5692 38.7152 66.3552C39.6084 66.5172 40.4803 66.6753 41.3263 66.8322C63.7254 70.9952 90.0229 70.8694 114.168 67.5401C138.308 64.2114 160.325 57.6768 174.151 49.0026C178.799 46.0889 181.904 43.0551 183.561 39.9773C185.223 36.8914 185.421 33.776 184.282 30.73C183.145 27.6917 180.682 24.7321 177.04 21.9291C173.397 19.1249 168.564 16.4688 162.667 14.0414C155.484 11.0629 148.09 8.41428 138.558 7.62801C138.012 7.5831 137.482 7.64287 137.072 7.78409C136.868 7.85458 136.683 7.94884 136.541 8.06929C136.401 8.18738 136.294 8.33951 136.265 8.52171C136.168 8.89306 136.429 9.19366 136.736 9.38517C137.065 9.58982 137.533 9.73239 138.043 9.77529Z" fill="#B1F581" />
                <path d="M11.1146 54.7416C19.1453 60.5686 30.5693 62.6205 39.7984 64.2782C40.7668 64.4521 41.7111 64.6217 42.6247 64.7909C64.2714 68.8127 89.6739 68.6813 113.006 65.4515C136.343 62.221 157.584 55.8944 170.917 47.5451C175.199 44.8563 178.007 42.0841 179.486 39.3124C180.96 36.5488 181.122 33.7703 180.085 31.0378C179.044 28.2974 176.794 25.5942 173.426 23.0097C170.059 20.4264 165.588 17.9703 160.124 15.7203C153.452 12.9758 146.765 10.4952 138.043 9.77529C137.533 9.73239 137.065 9.58981 136.736 9.38517C136.429 9.19366 136.168 8.89306 136.265 8.52171C136.294 8.33951 136.401 8.18738 136.541 8.06929C136.683 7.94884 136.868 7.85458 137.072 7.78409C137.482 7.64287 138.012 7.5831 138.558 7.628M11.1146 54.7416L10.9852 54.9103M11.1146 54.7416C6.99521 51.7541 5.27278 48.6705 5.15802 45.6458C5.04306 42.6159 6.53882 39.5909 8.97633 36.7103C13.949 30.7976 22.7564 25.5829 29.6796 22.2957C59.9308 7.96326 118.281 -3.27538 168.352 7.3549L168.354 7.35528C168.892 7.46439 169.447 7.46935 169.92 7.38708C170.38 7.30689 170.808 7.13526 171.041 6.84855C171.162 6.6996 171.222 6.53082 171.211 6.35737C171.2 6.18817 171.121 6.03647 171.007 5.90847C170.78 5.65547 170.382 5.46005 169.882 5.35323C118.245 -5.60769 57.9591 5.85294 26.7407 20.6419C22.4209 22.6978 17.3781 25.4854 12.909 28.7286C8.44429 31.9687 4.53025 35.6788 2.49364 39.5854L2.49324 39.5862C1.11125 42.2626 0.593852 45.0358 1.34465 47.8102C2.09441 50.5808 4.10165 53.3259 7.71521 55.9683C16.4345 62.3139 28.8685 64.5692 38.7152 66.3552C39.6084 66.5172 40.4803 66.6753 41.3263 66.8322C63.7254 70.9952 90.0229 70.8694 114.168 67.5401C138.308 64.2114 160.325 57.6768 174.151 49.0026C178.799 46.0889 181.904 43.0551 183.561 39.9773C185.223 36.8914 185.421 33.776 184.282 30.73C183.145 27.6917 180.682 24.7321 177.04 21.9291C173.397 19.1249 168.564 16.4688 162.667 14.0414C155.484 11.0629 148.09 8.41428 138.558 7.628M138.558 7.628L138.527 7.83256" stroke="#35A635" stroke-width="0.459644" />
              </svg> 2024</span> </h1>
            </Fade>
            <Fade bottom duration={1500} distance='4%'>
              <p className='home-goal-text2'>For almost a decade, we've been partnering with e-commerce <br className="d-md-block d-none" /> brands to accelerate their revenue & profit.</p>
            </Fade>
          </div>
          <div className='row home-goal-card-maindiv11'>
            <div className="col-lg-6">
              <Fade bottom duration={1500} distance='20%'>
                <div className="home-goal-card-div1">
                  <div>
                    <img src={goalcardpic1} alt="" />
                  </div>
                  <h1>Marketing on Amazon</h1>
                  <p>Scaling on Amazon doesn't have to be that hard. We make it a whole lot easier, more predictable,
                    and less stressful.</p>
                  <Link to="/contact"><div className='home-goal-btn1'>Book a Call</div></Link>
                </div>
              </Fade>
            </div>


            <div className="col-lg-6">
              <Fade bottom duration={1500} distance='20%'>
                <div className="home-goal-card-div1">
                  <div>
                    <img src={goalcardpic2} alt="" />
                  </div>
                  <h1>Marketing On Walmart</h1>
                  <p>Simplify your Walmart marketing with our expert strategies. Drive sales and boost visibility effortlessly.</p>
                  <Link to="/contact"><div className='home-goal-btn1'>Book a Call</div></Link>
                </div>
              </Fade>
            </div>



            <div className="col-lg-6">
              <Fade bottom duration={1500} distance='40%'>
                <div className="home-goal-card-div1">
                  <div>
                    <img src={goalcardpic1} alt="" />
                  </div>
                  <h1>Website Development</h1>
                  <p>Craft your online presence effortlessly with our tailored website solutions.</p>
                  <Link to="/contact"><div className='home-goal-btn1'>Book a Call</div></Link>
                </div>
              </Fade>
            </div>




            <div className="col-lg-6">
              <Fade bottom duration={1500} distance='40%'>
                <div className="home-goal-card-div1">
                  <div>
                    <img src={goalcardpic2} alt="" />
                  </div>
                  <h1>Visual Creative</h1>
                  <p>Elevate your brand with captivating visuals that leave a lasting impact.</p>
                  <Link to="/contact"><div className='home-goal-btn1'>Book a Call</div></Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
























      <div className="container-fluid home-e7f-div1">
        <div className="container">
          <div>
            <Fade bottom duration={1500} distance='4%'>
              <p className="home-e7f-text1">WHY E7FIGURES?</p>
            </Fade>
            <Fade bottom duration={1500} distance='4%'>
              <h1 className="home-e7f-text2">Because you don’t need another <br className="d-md-block d-none" /> agency. You need a <span> <svg className='' xmlns="http://www.w3.org/2000/svg" width="208" height="78" viewBox="0 0 208 78" fill="none">
                <path d="M154.571 10.2084C164.335 11.0091 171.821 13.7682 179.29 16.8207C185.406 19.3232 190.411 22.0549 194.181 24.9282C197.951 27.8028 200.469 30.8094 201.634 33.8573C202.795 36.8966 202.614 39.9869 200.964 43.0607C199.308 46.1435 196.165 49.2268 191.371 52.2174C176.446 61.5038 152.668 68.5404 126.544 72.1336C100.425 75.7259 71.9886 75.8719 47.7564 71.3988C46.7337 71.2106 45.6766 71.022 44.5926 70.8285C34.2611 68.9848 21.4727 66.7026 12.4828 60.2216C7.87142 56.8987 5.94326 53.4691 5.8148 50.1049C5.68611 46.735 7.36052 43.3704 10.0892 40.1665C15.6557 33.5902 25.5151 27.7902 33.2652 24.1341C67.1295 8.19303 132.448 -4.30699 188.5 7.5164L188.502 7.51681C189.105 7.63818 189.727 7.64369 190.255 7.55219C190.77 7.463 191.25 7.27211 191.51 6.95321C191.646 6.78755 191.713 6.59982 191.7 6.4069C191.688 6.21871 191.6 6.04999 191.472 5.90762C191.219 5.62622 190.773 5.40887 190.213 5.29006C132.409 -6.90107 64.9224 5.84586 29.9753 22.2947C25.1395 24.5813 19.4944 27.6818 14.4915 31.289C9.49358 34.8927 5.11205 39.0192 2.8322 43.3643L2.83175 43.3652C1.2847 46.342 0.705499 49.4265 1.54598 52.5123C2.38528 55.5938 4.63226 58.647 8.67741 61.586C18.4381 68.6438 32.3572 71.1522 43.38 73.1386C44.3798 73.3188 45.3559 73.4947 46.3029 73.6692C71.3773 78.2994 100.816 78.1595 127.845 74.4565C154.868 70.7543 179.514 63.4863 194.991 53.8384C200.195 50.5978 203.67 47.2235 205.525 43.8003C207.386 40.368 207.608 36.9029 206.333 33.515C205.06 30.1357 202.303 26.844 198.226 23.7264C194.148 20.6074 188.737 17.6532 182.136 14.9533C174.095 11.6406 165.819 8.69467 155.148 7.82015C154.536 7.77021 153.943 7.83668 153.485 7.99375C153.256 8.07215 153.049 8.17699 152.89 8.31096C152.733 8.44231 152.613 8.61151 152.581 8.81416C152.472 9.22719 152.765 9.56153 153.109 9.77453C153.476 10.0021 154 10.1607 154.571 10.2084Z" fill="#35A635" />
                <path d="M12.4828 60.2216C21.4727 66.7026 34.2611 68.9848 44.5926 70.8285C45.6766 71.022 46.7337 71.2106 47.7564 71.3988C71.9886 75.872 100.425 75.7259 126.544 72.1336C152.668 68.5404 176.446 61.5038 191.371 52.2174C196.165 49.2268 199.308 46.1435 200.964 43.0607C202.614 39.9869 202.795 36.8966 201.634 33.8573C200.469 30.8094 197.951 27.8028 194.181 24.9282C190.411 22.0549 185.406 19.3232 179.29 16.8207C171.821 13.7682 164.335 11.0091 154.571 10.2084C154 10.1607 153.476 10.0021 153.109 9.77453C152.765 9.56153 152.472 9.22719 152.581 8.81416C152.613 8.61151 152.733 8.44231 152.89 8.31096C153.049 8.17699 153.256 8.07215 153.485 7.99375C153.943 7.83668 154.536 7.77021 155.148 7.82015M12.4828 60.2216L12.3379 60.4092M12.4828 60.2216C7.87142 56.8987 5.94326 53.4691 5.8148 50.1049C5.68611 46.735 7.36052 43.3704 10.0892 40.1665C15.6557 33.5902 25.5151 27.7902 33.2652 24.1341C67.1295 8.19303 132.448 -4.30699 188.5 7.5164L188.502 7.51681C189.105 7.63818 189.727 7.64369 190.255 7.55219C190.77 7.463 191.25 7.27211 191.51 6.95321C191.646 6.78755 191.713 6.59982 191.7 6.4069C191.688 6.21871 191.6 6.04999 191.472 5.90762C191.219 5.62622 190.773 5.40887 190.213 5.29006C132.409 -6.90108 64.9224 5.84586 29.9753 22.2947C25.1395 24.5813 19.4944 27.6818 14.4915 31.289C9.49357 34.8927 5.11205 39.0192 2.8322 43.3643L2.83175 43.3652C1.2847 46.342 0.705499 49.4265 1.54598 52.5123C2.38528 55.5938 4.63226 58.647 8.67741 61.586C18.4381 68.6438 32.3572 71.1522 43.38 73.1386C44.3798 73.3188 45.3559 73.4947 46.3029 73.6692C71.3773 78.2994 100.816 78.1595 127.845 74.4565C154.868 70.7543 179.514 63.4863 194.991 53.8384C200.195 50.5978 203.67 47.2235 205.525 43.8003C207.386 40.368 207.608 36.9029 206.333 33.515C205.06 30.1357 202.303 26.844 198.226 23.7264C194.148 20.6074 188.737 17.6532 182.136 14.9533C174.095 11.6406 165.819 8.69467 155.148 7.82015M155.148 7.82015L155.113 8.04767" stroke="#35A635" stroke-width="0.459644" />
              </svg> partner</span></h1>
            </Fade>
          </div>

          <div className='row home-e7f-card-maindiv1'>
            <div className="col-lg-4">
              <div className="home-e7f-card-div1">
                <div>
                  <Fade bottom duration={1200} distance='20%'>
                    <img src={e7fpic1} className="img-fluid" alt="" />
                  </Fade>
                </div>
                <Fade bottom duration={1200} distance='30%'>
                  <h1>Your trusted partner</h1>
                </Fade>
                <Fade bottom duration={1200} distance='20%'>
                  <p>At E7FIGURES, we don't just serve clients, we cultivate partnerships. We collaborate closely, treating your business as if it were our own, ensuring mutual success.</p>
                </Fade>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="home-e7f-card-div1">
                <div>
                  <Fade bottom duration={1200} distance='20%'>
                    <img src={e7fpic2} className="img-fluid" alt="" />
                  </Fade>
                </div>
                <Fade bottom duration={1200} distance='30%'>
                  <h1>Human led, software driven</h1>
                </Fade>
                <Fade bottom duration={1200} distance='20%'>
                  <p>In today's competitive market, success demands a blend of advanced software tools and marketing expertise. At E7FIGURES, we're experts in both, driving your growth
                    with precision.</p>
                </Fade>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="home-e7f-card-div1">

                <div>
                  <Fade bottom duration={1200} distance='20%'>
                    <img src={e7fpic3} className="img-fluid" alt="" />
                  </Fade>
                </div>
                <Fade bottom duration={1200} distance='30%'>
                  <h1>White glove customer service</h1>
                </Fade>
                <Fade bottom duration={1200} distance='20%'>
                  <p>At E7FIGURES, we prioritize communication
                    for your success. Our dedicated account specialists monitor your account health and provide timely insights, empowering you to make informed adjustments.</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>





















      <div className='container-fluid home-last-sec-div1 d-block'>
        <div className='container home-last-sec-container1'>
          <div className='row '>
            <div className="col-lg-6 home-last-col1-div1">
              <div className=" home-j2m-col1-div1 rightblock">
                <div className='photo'>
                  <img src={reserachpic1} className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className=" leftblock">
                <div className="home-j2m-col2-div1">

                  <h1 className="home-j2m-col2-text11">The J2M method</h1>
                  <div className='position-relative'>
                    <div className='j2m-svg-line'></div>

                    {/* ######################   Slide NO 1 ##################### */}
                    <div>
                      <div className="home-research-text-div1 position-relative">
                        <div className="home-research-text-div2" >
                          <p>1</p>
                        </div>
                        <div className="home-research-text-div3">
                          <h1>Research</h1>
                          <p > Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                        </div>
                      </div>
                    </div>

                    {/* ######################   Slide NO 2 ##################### */}
                    <div>
                      <div className="home-research-text-div1 align-items-center">
                        <div className="home-designsec-text-div2">
                          <p>1</p>
                        </div>
                        <div className="home-designsec-text-div3">
                          <h1>Design & optimize</h1>
                          </div>
                      </div>
                    </div>

                    {/* ######################   Slide NO 13##################### */}
                    <div>
                      <div className="home-research-text-div1 align-items-center">
                        <div className="home-designsec-text-div2">
                          <p>1</p>
                        </div>
                        <div className="home-designsec-text-div3">
                          <h1>Grow & scale</h1>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>









        {/* #########   Container ### NO ##2## ##################### */}


        <div className='container home-last-sec-container2'>
          <div className='row '>
            <div className="col-lg-6 home-last-col1-div1">
              <div className=" home-j2m-col1-div1 rightblock">
                <div className='photo'>
                  <img src={reserachpic2} className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className=" leftblock">
                <div className="home-j2m-col2-div1">

                  {/* <h1 className="home-j2m-col2-text11">The J2M method</h1> */}
                  <div className='position-relative'>
                    <div className='j2m-svg-line'></div>

                    {/* ######################   Slide NO 1 ##################### */}
                    <div>
                      <div className="home-research-text-div1 align-items-center">
                        <div className="home-designsec-text-div2" >
                          <p>1</p>
                        </div>
                        <div className="home-designsec-text-div3">
                          <h1>Research</h1>
                          </div>
                      </div>
                    </div>

                    {/* ######################   Slide NO 2 ##################### */}
                    <div>
                      <div className="home-research-text-div1 position-relative">
                        <div className="home-research-text-div2">
                          <p>2</p>
                        </div>
                        <div className="home-research-text-div3">
                          <h1>Design & optimize</h1>
                          <p >With a solid strategy in hand, it’s all about execution. Our experts dive into their specialties, whether it’s crafting attention-grabbing product listings, optimising budgets, or crafting targeted campaigns.</p>
                        </div>
                      </div>
                    </div>

                    {/* ######################   Slide NO 13##################### */}
                    <div>
                      <div className="home-research-text-div1 align-items-center">
                        <div className="home-designsec-text-div2">
                          <p>1</p>
                        </div>
                        <div className="home-designsec-text-div3">
                          <h1>Grow & scale</h1>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>












        {/* #########   Container ### NO ##3## ##################### */}

        <div className='container home-last-sec-container3'>
          <div className='row '>
            <div className="col-lg-6 home-last-col1-div1">
              <div className=" home-j2m-col1-div1 rightblock">
                <div className='photo'>
                  <img src={reserachpic3} className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className=" leftblock">
                <div className="home-j2m-col2-div1">

                  {/* <h1 className="home-j2m-col2-text11">The J2M method</h1> */}
                  <div className='position-relative'>
                    <div className='j2m-svg-line'></div>

                    {/* ######################   Slide NO 1 ##################### */}
                    <div>
                      <div className="home-research-text-div1 align-items-center">
                        <div className="home-designsec-text-div2" >
                          <p>1</p>
                        </div>
                        <div className="home-designsec-text-div3">
                          <h1>Research</h1>
                          </div>
                      </div>
                    </div>

                    {/* ######################   Slide NO 2 ##################### */}
                    <div>
                      <div className="home-research-text-div1 align-items-center">
                        <div className="home-designsec-text-div2">
                          <p>1</p>
                        </div>
                        <div className="home-designsec-text-div3">
                          <h1>Design & optimize</h1>
                          <p className="d-none">Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                        </div>
                      </div>
                    </div>

                    {/* ######################   Slide NO 13##################### */}
                    <div>
                      <div className="home-research-text-div1 position-relative">
                        <div className="home-research-text-div2">
                          <p>3</p>
                        </div>
                        <div className="home-research-text-div3">
                          <h1>Grow & scale</h1>
                          <p>Once all systems are running smoothly, it’s time to elevate and surpass your growth objectives. Tailoring our approach to your goals and insights gained, our experts amplify efforts to propel your products to new heights of success.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>












    </div>
  );
}

export default Home;
