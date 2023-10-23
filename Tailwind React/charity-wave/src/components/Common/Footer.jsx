import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    // <div className='w-full mt-24 bg-primary text-gray-300 py-y px-2'>
    <div className="w-full mb-0 bg-primary text-gray-300 py-2 px-2 flex flex-col items-center">
      <div className="max-w-[1240px] grid sm:grid-cols-2 md:grid-cols-5 gap-5 sm:gap-10 md:gap-5 border-b-2 border-gray-600 py-8 justify-center">
        <div className="text-center">
          <h6 className="font-bold uppercase pt-2 col-span-1">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div className="md:col-span-2 text-center">
          <h6 className="font-bold uppercase pt-2">Contact Us</h6>
          <ul className="">
            <li className="py-1">4486 Richards Avenue, Modesto CA - 95354</li>
            <li className="py-1">209-818-6041</li>
            <li className="py-1">noumanrehman042@gmail.com</li>
          </ul>
        </div>

        <div className="col-span-2 text-center">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 px-8 py-3 font-medium bg-transparent text-white hover:text-primary-light">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-8 mx-auto justify-between md:flex-row gap-10 text-center text-gray-500">
        <p className="">All rights reserved</p>
        <div className="flex justify-between w-[200px] md:w-[300px]  text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
