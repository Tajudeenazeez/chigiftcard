import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-screen">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full mt-[10rem] md:w-full  text-center md:flex md:justify-between md:h-[22rem]">
            <div>
                <h4 className="text-lg font-medium mb-4">For Consumers</h4>
                <ul className="list-reset mb-8 ">
              <li className="md:py-4">
                <Link
                  to="/buy-gift-cards"
                  className="text-white hover:text-gray-400"
                >
                  Buy Gift Cards
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/last-minute-gifts"
                  className="text-white hover:text-gray-400"
                >
                  Last Minute Gifts
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/group-gift"
                  className="text-white hover:text-gray-400"
                >
                  Group Gift
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/group-gift-by-brand"
                  className="text-white hover:text-gray-400"
                >
                  Group Gift by Brand
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/earn-points"
                  className="text-white hover:text-gray-400"
                >
                  Earn Points
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/check-gift-card-balance"
                  className="text-white hover:text-gray-400"
                >
                  Check Gift Card Balance
                </Link>
              </li>
            </ul>
            </div>
            <div>
                <h5 className="text-lg font-medium mb-4">Payment Options</h5>
                <ul className="list-reset">
              <li className='md:py-2'>
                <Link
                  to="/buy-with-credit-cards"
                  className="text-white hover:text-gray-400"
                >
                  Buy with Credit Cards
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/buy-with-paypal"
                  className="text-white hover:text-gray-400"
                >
                  Buy with PayPal
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/buy-with-skrill"
                  className="text-white hover:text-gray-400"
                >
                  Buy with Skrill
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/buy-with-click-to-pay"
                  className="text-white hover:text-gray-400"
                >
                  Buy with Click To Pay
                </Link>
              </li>
              <li className='md:py-4'>
                <Link
                  to="/buy-with-google-pay"
                  className="text-white hover:text-gray-400"
                ></Link>
              </li>
            </ul>

            </div>
     
            {/* another section */}
            <div className="">
            <h5 className="text-lg font-medium mb-4"> For Business</h5>
            <ul className="list-reset">
              <li className='md:py-2'>
                <Link
                  to="/Contact-Sales"
                  className="text-white hover:text-gray-400"
                >
                  Contact Sales
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/Buy-in-Bulk"
                  className="text-white hover:text-gray-400"
                >
                  Buy in Bulk
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/Rewards-Incentives"
                  className="text-white hover:text-gray-400"
                >
                  Rewards & Incentives
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/eGift-Card-API"
                  className="text-white hover:text-gray-400"
                >
                  Buy with Click To Pay
                </Link>
              </li > 
              <li className='md:py-2'>
                <Link to="/Platform" className="text-white hover:text-gray-400">
                  Platform
                </Link>
              </li>
              <li  className='md:py-2'>
                <Link to="/Features" className="text-white hover:text-gray-400">
                  Features
                </Link>
              </li>
              <li className='md:py-2'>
                <Link
                  to="/chigift-Rewards-Choice-Card™"
                  className="text-white hover:text-gray-400"
                >
                  chigift Rewards Choice Card™
                </Link>
              </li>
            </ul>

            </div>
           
            {/* another section */}
            <div>
            <h5 className="text-lg font-medium mb-4"> Company</h5>
            <ul className="list-reset">
              <li className='md:py-4'>
                <Link to="/Press" className="text-white hover:text-gray-400">
                  Press
                </Link>
              </li>
              <li className='md:py-4'>
                <Link
                  to="/In the News"
                  className="text-white hover:text-gray-400"
                >
                  In the News
                </Link>
              </li>
              <li className='md:py-4'>
                <Link
                  to="/Blog"
                  className="text-white hover:text-gray-400"
                >
                  Blog
                </Link>
              </li>
              <li className='md:py-4'>
                <Link
                  to="/careers"
                  className="text-white hover:text-gray-400"
                >
                  Careers
                </Link>
              </li>
            </ul>
            </div>
            {/* another section */}
           <div>
           <h5 className="text-lg font-medium mb-4"> Support</h5>
            <ul className="list-reset">
              <li className='md:py-4'>
                <Link to="/order-status" className="text-white hover:text-gray-400">
                Order Status
                </Link>
              </li>
              <li className='md:py-4'>
                <Link
                  to="/help-center"
                  className="text-white hover:text-gray-400"
                >
                 Help Center

                </Link>
              </li>
              <li className='md:py-4'>
                <Link
                  to="/contact-spport"
                  className="text-white hover:text-gray-400"
                >
               Contact Support
                </Link>
              </li>
            </ul>
           </div>
    
            {/* another section */}
          
          </div>
        </div>
        <div>
        <h4 className="text-lg font-medium mb-4">
              Got Gift? Connect with us!
            </h4>
            <div className="flex items-center justify-center">
              <Link
                to="/facebook"
                className="mx-3 text-white hover:text-gray-400"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                to="/twitter"
                className="mx-3 text-white hover:text-gray-400"
              >
                <FaTwitter size={30} />
              </Link>
              <Link
                to="/pinterest"
                className="mx-3 text-white hover:text-gray-400"
              >
                <FaPinterest size={30} />
              </Link>
              <Link
                to="/instagram"
                className="mx-3 text-white hover:text-gray-400"
              >
                <FaInstagram size={30} />
              </Link>
              <Link to="/blog" className="mx-3 text-white hover:text-gray-400">
                Blog
              </Link>
            </div>
            <div className="my-8 flex flex-wrap items-center justify-center">
              <Link to="/app-store">
                <img
                  src="https://d2g7ragyj76kvw.cloudfront.net/app/egm_v3/footer/mobile/download-apple-app-store.svg"
                  alt="Download on the App Store"
                  className="mx-3"
                />
              </Link>
              <Link to="/google-play">
                <img
                  src="https://d2g7ragyj76kvw.cloudfront.net/app/egm_v3/footer/mobile/download-google-play.svg"
                  alt="Get it on Google Play"
                  className="mx-3"
                />
              </Link>
              <Link to="/pci-dds">
                <img
                  src="https://d2g7ragyj76kvw.cloudfront.net/app/egm_v3/footer/compliance/PCI_Logo.svg"
                  alt="PCI-DDS Compliant"
                  className="mx-3"
                />
              </Link>
              <Link to="/trust-pilot">
                <img
                  src="https://d2g7ragyj76kvw.cloudfront.net/app/egm_v3/footer/compliance/TrustPilot_Logo.svg"
                  alt="Trust Pilot"
                  className="mx-3"
                />
              </Link>
              <Link to="/bbb">
                <img
                  src="https://d2g7ragyj76kvw.cloudfront.net/app/egm_v3/footer/compliance/bbb-logo.svg"
                  alt="Better Business Bureau Accredited Business"
                  className="mx-3"
                />
              </Link>
            </div>
            <hr className="border-gray-600 my-8" />
            <div className="md:flex justify-between md:items-center">
            <div className="text-center">
              <Link to="/terms-of-service">Terms of service</Link>
            </div>
            <div className="text-center">
              <Link to="/Bulk-Order-Terms">Bulk Order Terms</Link>
            </div>
            <div className="text-center">
              <Link to="/Privacy-Policy">Privacy Policy</Link>
            </div>
            <div className="text-center">
              <Link to="/Site-Map">Site Map</Link>
            </div>
            <div className="text-center">
              <Link to="/">
                © 2011 - 2023 chigift.com. All Rights Reserved.
              </Link>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
