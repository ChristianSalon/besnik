import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-12 md:px-24 py-14 md:py-24">
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-8 gap-y-16">
        <div className="flex flex-col gap-4 lg:gap-10">
          <h4 className="text-lg text-primaryDark font-semibold">Product</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li>
              <a href="#">Listing</a>
            </li>
            <li>
              <a href="#">Property</a>
            </li>
            <li>
              <a href="#">Agents</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-10">
          <h4 className="text-lg text-primaryDark font-semibold">Resources</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li>
              <a href="#">Our Homes</a>
            </li>
            <li>
              <a href="#">Member Stories</a>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="#">Free Trial</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-10">
          <h4 className="text-lg text-primaryDark font-semibold">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Terms o use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-10">
          <h4 className="text-lg text-primaryDark font-semibold">
            Get in touch
          </h4>
          <p className="text-sm text-gray-500">
            You’ll find your next home, in any style you prefer.
          </p>
          <div className="flex gap-4 text-gray-500 text-sm">
            <a
              href="#"
              className="flex justify-center items-center h-10 aspect-square px-4 py-2 bg-gray-100 hover:bg-primary hover:text-primaryLight transition-colors duration-300 rounded-lg"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="flex justify-center items-center h-10 aspect-square px-4 py-2 bg-gray-100 hover:bg-primary hover:text-primaryLight transition-colors duration-300 rounded-lg"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="flex justify-center items-center h-10 aspect-square px-4 py-2 bg-gray-100 hover:bg-primary hover:text-primaryLight transition-colors duration-300 rounded-lg"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-16 lg:pt-24">
        <h2 className="text-3xl text-primaryDark font-semibold">Besnik.</h2>
        <p className="text-sm text-gray-500 text-center">
          Copyright 2022, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
