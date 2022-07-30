import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="w-full min-h-screen px-8 md:px-24 py-14 md:py-24">
      <div className="flex justify-around items-center gap-28">
        <div className="flex-1 hidden lg:flex justify-center items-center relative">
          <img
            src="/properties/property-4.jpg"
            alt="property"
            className="h-[70vh] rounded-xl"
          />
          <div className="flex flex-col items-start gap-2 w-64 p-4 bg-white shadow-xl rounded-xl absolute left-0 top-0">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-2xl text-primaryDark font-semibold">
                40,000+
              </h4>
              <img src="/icons/stock.svg" alt="stock" />
            </div>
            <p className="text-xs text-gray-500">
              By avarage for 2 bedroom apments in San Francisco, CA
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-8">
          <div className="w-12 h-1 rounded-full bg-primaryDark"></div>
          <h2 className="text-3xl sm:text-5xl text-primaryDark font-semibold">
            You’ve found a neighborhood you love.
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            When you own a home, you’re committing to living in one location for
            a while. In a recent Trulia survey, we found that five out of six
            respondents said finding the right neighborhood is tough
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-around pt-24 lg:pt-32">
        <div className="flex flex-col items-center gap-2 lg:gap-6">
          <h1 className="text-4xl lg:text-6xl text-primaryDark font-bold">
            2,500
          </h1>
          <p className="text-lg text-gray-500 font-medium">Homes for Sale</p>
        </div>
        <div className="flex flex-col items-center gap-2 lg:gap-6">
          <h1 className="text-4xl lg:text-6xl text-primaryDark font-bold">
            5,000+
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            Homes Recently Sold
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 lg:gap-6">
          <h1 className="text-4xl lg:text-6xl text-primaryDark font-bold">
            170+
          </h1>
          <p className="text-lg text-gray-500 font-medium">Price Reduced</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
