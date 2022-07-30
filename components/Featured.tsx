import React from "react";

const Featured: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col px-8 md:px-24 py-14 md:py-24 bg-primaryLight">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-end">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl text-primaryDark font-semibold">
            Featured Properties
          </h2>
          <p className="text-sm md:text-base">
            Everything you need to know when you’re looking
          </p>
        </div>
        <a href="#" className="text-sm md:text-base text-[#0689FF]">
          View All Properties
          <img src="/icons/arrow.svg" alt="arrow" className="inline ml-2" />
        </a>
      </div>
      <div className="flex-1 flex flex-col items-center lg:flex-row gap-12 pt-16">
        <div className="flex-1 flex flex-col lg:self-stretch max-w-xl">
          <div className="flex-1 min-h-[250px] rounded-t-xl bg-[url('/properties/property-1.jpg')] bg-no-repeat bg-bottom bg-cover"></div>
          <div className="w-full flex flex-col items-start gap-2 p-6 bg-white rounded-b-xl">
            <h6 className="text-xl text-primaryDark font-semibold">$35000</h6>
            <p className="text-sm text-gray-500">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 mt-2">
              <div className="flex items-center gap-2">
                <img src="/icons/bed.svg" alt="bed" width={22} />
                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  5 Beds
                </h6>
              </div>
              <div className="flex items-center gap-2">
                <img src="/icons/bath.svg" alt="bath" width={22} />
                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  2 Baths
                </h6>
              </div>
              <div className="flex items-center gap-2">
                <img src="/icons/area.svg" alt="area" width={22} />
                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  2000 Sqft
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:self-stretch max-w-xl">
          <div className="flex-1 min-h-[250px] rounded-t-xl bg-[url('/properties/property-2.jpg')] bg-no-repeat bg-bottom bg-cover"></div>
          <div className="w-full flex flex-col items-start gap-2 p-6 bg-white rounded-b-xl">
            <h6 className="text-xl text-primaryDark font-semibold">$75000</h6>
            <p className="text-sm text-gray-500">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 mt-2">
              <div className="flex items-center gap-2">
                <img src="/icons/bed.svg" alt="bed" />

                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  6 Beds
                </h6>
              </div>
              <div className="flex gap-2">
                <img src="/icons/bath.svg" alt="bath" />

                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  3 Baths
                </h6>
              </div>
              <div className="flex gap-2">
                <img src="/icons/area.svg" alt="area" />

                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  3400 Sqft
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:self-stretch max-w-xl">
          <div className="flex-1 min-h-[250px] rounded-t-xl bg-[url('/properties/property-3.jpg')] bg-no-repeat bg-bottom bg-cover"></div>
          <div className="w-full flex flex-col items-start gap-2 p-6 bg-white rounded-b-xl">
            <h6 className="text-xl text-primaryDark font-semibold">$45000</h6>
            <p className="text-sm text-gray-500">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 mt-2">
              <div className="flex items-center gap-2">
                <img src="/icons/bed.svg" alt="bed" />

                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  3 Beds
                </h6>
              </div>
              <div className="flex gap-2">
                <img src="/icons/bath.svg" alt="bath" />

                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  1 Bath
                </h6>
              </div>
              <div className="flex gap-2">
                <img src="/icons/area.svg" alt="area" />

                <h6 className="text-sm md:text-base lg:text-sm xl:text-base">
                  1500 Sqft
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
