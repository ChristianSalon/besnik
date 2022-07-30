import React from "react";
import Image from "next/image";

const Ratings: React.FC = () => {
  return (
    <section className="w-full px-8 md:px-24 py-24">
      <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold text-primaryDark">Besnik.</h3>
          <p className="text-sm md:text-base text-gray-500">
            More than 45,000+ companies trust besnik
          </p>
        </div>
        <div className="flex flex-col lg:items-end gap-2">
          <div>
            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
          </div>
          <p className="text-sm md:text-base text-gray-500">
            5 Star Ratings (2k+ Reviews)
          </p>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center pt-24">
        <img src="/companies/me-undies.png" alt="me-undies" />
        <img src="/companies/slack.png" alt="slack" />
        <img src="/companies/amazon.png" alt="amazon" />
        <img src="/companies/woo-commerce.png" alt="woo-commerce" />
        <img src="/companies/sitepoint.png" alt="sitepoint" />
      </div>
    </section>
  );
};

export default Ratings;
