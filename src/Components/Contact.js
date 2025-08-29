import React from 'react'
import './Contact.css'
import contacticon1 from '../Images/Group 1000008888.png'
import contacticon2 from '../Images/Group 1000008889.png'
import contacticon3 from '../Images/Group 1000008890.png'
import { Link } from 'react-router-dom' 


function Contact() {
  return (
    <div>
      <div className='container-fluid contact-banner-div1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='contact-banner-text-div1'>
                <h1>Ready to Start Winning on <br className='d-md-block d-none' />
                  <span> E-commerce?</span></h1>
                <p>Schedule Your Call with <br className='d-md-block d-none' />
                  E7F Expert Today!</p>
              </div>
              <div className='contact-icon-div1'>
                <p><img src={contacticon1} alt="" /> Amazon Advertising</p>
                <p><img src={contacticon2} alt="" /> Amazon SEO</p>
                <p><img src={contacticon3} alt="" /> Listing Conversion Optimization</p>
                <p><img src={contacticon2} alt="" /> Account Management</p>
              </div>

              <div className="home-btn-div1 d-flex align-items-center">
                <Link to="/" className="view-all-btn1">
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

            </div>



            <div className='col-lg-6'>
              <div className='contact-banner-form-div1'>
                <h1>Get in Touch</h1>
                <p>Fill out the form below and one of our experts will personally  cantact you.</p>
                <div>


                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6 contact-form-input-div1">
                        <label >Name</label>
                        <input type="text" class="form-control" placeHolder='John Doe' />
                      </div>
                      <div class="form-group col-md-6  contact-form-input-div1">
                        <label>Email</label>
                        <input type="email" class="form-control" placeHolder='john.doe@companysite.com' />
                      </div>
                      <div class="form-group col-md-6 contact-form-input-div1">
                        <label >Title</label>
                        <input type="text" class="form-control" placeHolder='CEO' />
                      </div>
                      <div class="form-group col-md-6  contact-form-input-div1">
                        <label>Phone</label>
                        <input type="number" class="form-control" placeHolder='123-456-7890' />
                      </div>
                      <div class="form-group col-12  contact-form-input-div1">
                        <label>Company Name</label>
                        <input type="text" class="form-control" placeHolder='Company Name' />
                      </div>
                      <div class="form-group col-12  contact-form-input-div1">
                        <label>Enter Your Message</label>
                        <textarea type="text" class="form-control" rows='4'  ></textarea>
                      </div>
                    </div>
                    
                      
                   
                    <button type="submit" class="btn contact-form1-btn1">Submit</button>
                  </form>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>












      <div className='container-fluid contact-sec2-div1'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'></div>
            <div className='col-lg-6'>
              <div className='contact-location-div1'>
                <h1>We Are located in London, United Kingdom</h1>
                <p>We Are located in London, United Kingdom</p>
                <a href=""><div className='location-btn1'>Get Directions</div></a>
              </div>
            </div>
          </div>
        </div>
      </div>











<div className='container-fluid contact-form2-div11'>
  <div className='container'>
    <div className='form2-text-div1'>
            <h1>Total Amazon Business Assessment</h1>
            <p>99%of brands are looking money on Amazon.</p>
    </div>

    <div>
            <div className='contact-banner-form2-div12'>
              <h1>Claim your $3,000 Audit for FREE by filling out the following information below</h1>
                            <div>


                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6 contact-form-input-div1">
                      <label >Name</label>
                      <input type="text" class="form-control" placeHolder='John Doe' />
                    </div>
                    <div class="form-group col-md-6  contact-form-input-div1">
                      <label>Email</label>
                      <input type="email" class="form-control" placeHolder='john.doe@companysite.com' />
                    </div>
                    
                    <div class="form-group col-md-6  contact-form-input-div1">
                      <label>Phone</label>
                      <input type="number" class="form-control" placeHolder='123-456-7890' />
                    </div>
                    <div class="form-group col-md-6  contact-form-input-div1">
                      <label>Company Name</label>
                      <input type="text" class="form-control" placeHolder='Company Name' />
                    </div>

                    <div class="form-group col-md-6  contact-form-input-div1">
                      <label>What’s your total monthly Amazon advertising Budget?</label>
                      <input type="text" class="form-control" placeHolder='What’s your advertising Budget?' />
                    </div>
                    <div class="form-group col-md-6  contact-form-input-div1">
                      <label>What’s Your Monthly Amazon Revenue?</label>
                      <input type="text" class="form-control" placeHolder='What’s Your Revenue?' />
                    </div>

                    <div class="form-group col-md-6  contact-form-input-div1">
                      <label>How Fast would you like to get started?</label>
                      <input type="text" class="form-control" placeHolder='How Fast would you like to get started?' />
                    </div>
                    <div class="form-group col-md-6  contact-form-input-div1">
                      <label>Which services are you interested in?</label>
                      <input type="text" class="form-control" placeHolder='Which services are you interested in?' />
                    </div>
                    <div class="form-group col-12  contact-form-input-div1">
                      <label>What metrices matter most to your Amazon success?</label>
                      <input type="text" class="form-control" placeHolder='What metrices matter most to your Amazon success?' />
                    </div>
                    
                    <div class="form-group col-12  contact-form-input-div1">
                      <label>How can we help you?</label>
                      <textarea type="text" class="form-control" rows='4'  ></textarea>
                    </div>
                  </div>



                  <button type="submit" class="btn contact-form1-btn1">Get My Free Assessment</button>
                </form>


              </div>
            </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Contact
