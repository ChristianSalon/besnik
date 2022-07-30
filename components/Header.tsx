import React from "react";
import { Navigation } from ".";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col w-full min-h-screen px-8 md:px-24 py-8 bg-primaryLight">
      <Navigation />

      <div className="flex-1 w-full h-full flex justify-between items-center">
        <div className="flex-1 flex flex-col justify-center items-start gap-4 lg:gap-8">
          <h4 className="text-sm lg:text-base text-gray-600 text font-medium">
            Welcome to Besnik Agency
          </h4>
          <h1 className="text-4xl lg:text-[70px] lg:leading-[74px] text-primaryDark font-bold">
            Discover a place you’ll love to live.
          </h1>
          <p className="text-sm lg:text-base text-gray-500">
            Get the best real estate deals first, before they hit the mass
            market! HOT FORECLOSURE DEALS with one simple search
          </p>
          <a
            href="#"
            className="mt-4 text-base font-medium text-white bg-primaryDark px-8 py-3 rounded-lg"
          >
            More About Us
          </a>
        </div>
        <div className="hidden lg:block w-1/2 self-stretch bg-[url('/hero.svg')] bg-center bg-no-repeat bg-contain"></div>
      </div>
    </header>
  );
};

export default Header;
