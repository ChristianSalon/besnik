import React from "react";

const Mobile: React.FC = () => {
  return (
    <section className="w-full px-8 md:px-24 py-14 md:py-24">
      <div className="w-full px-8 lg:px-16 py-12 lg:py-24 bg-primary rounded-2xl relative">
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">
            Featured Properties
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Everything you need to know when you’re looking
          </p>
          <a
            href="#"
            className="px-6 py-3 text-sm sm:text-base text-primaryDark font-medium bg-white rounded-xl mt-2"
          >
            Get Started Now
          </a>
        </div>
        <div className="hidden lg:flex justify-center items-center w-[250px] h-[500px] p-3 bg-gray-200 rounded-[50px] absolute right-24 xl:right-64 -bottom-16">
          <div className="w-1/2 h-8 rounded-b-2xl absolute top-0 bg-gray-200"></div>
          <div className="w-1 h-16 rounded-r-sm absolute top-32 -right-1 bg-gray-200"></div>
          <div className="flex flex-col justify-evenly items-center p-6 flex-1 h-full bg-white rounded-[40px]">
            <img src="/phone.svg" alt="phone" />
            <div className="flex flex-col w-full gap-4">
              <div className="flex gap-4">
                <div className="w-4 h-4 aspect-square rounded-full bg-primaryDark"></div>
                <div className="w-full h-4 flex justify-start items-center rounded-full bg-primaryLight">
                  <div className="w-2/3 h-4 rounded-full bg-[#5784F5]"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-4 h-4 aspect-square rounded-full bg-primaryDark"></div>
                <div className="w-full h-4 flex justify-start items-center rounded-full bg-primaryLight">
                  <div className="w-1/3 h-4 rounded-full bg-[#5784F5]"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-4 h-4 aspect-square rounded-full bg-primaryDark"></div>
                <div className="w-full h-4 flex justify-start items-center rounded-full bg-primaryLight">
                  <div className=" w-11/12 h-4 rounded-full bg-[#5784F5]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
