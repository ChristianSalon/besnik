import React from "react";

const Guides: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-6 w-full px-8 md:px-24 py-8 md:py-24">
      <div className="w-12 h-1 rounded-full bg-primaryDark"></div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primaryDark">
          How it works ?
        </h2>
        <p className="text-sm sm:text-base text-gray-500">
          Everything you need to know when you’re looking to buy, rent, or sell
          - all in one place.
        </p>
      </div>
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between lg:items-center w-2/3 py-12">
        <div className="flex flex-col items-center gap-4">
          <img src="/icons/cart.svg" alt="cart" />
          <h4 className="text-xl font-medium">Buyer Guides</h4>
          <a href="#" className="text-sm font-medium text-[#0689FF]">
            How to buy
            <img src="/icons/arrow.svg" alt="arrow" className="inline ml-2" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src="/icons/rent.svg" alt="rent" />
          <h4 className="text-xl font-medium">Renter Guides</h4>
          <a href="#" className="text-sm font-medium text-[#0689FF]">
            How to rent
            <img src="/icons/arrow.svg" alt="arrow" className="inline ml-2" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src="/icons/sell.svg" alt="sell" />
          <h4 className="text-xl font-medium">Seller Guides</h4>
          <a href="#" className="text-sm font-medium text-[#0689FF]">
            How to sell
            <img src="/icons/arrow.svg" alt="arrow" className="inline ml-2" />
          </a>
        </div>
      </div>
      <a
        href="#"
        className="text-base  text-white bg-primaryDark px-8 py-3 rounded-lg"
      >
        See Full Guidelines
      </a>
    </section>
  );
};

export default Guides;
