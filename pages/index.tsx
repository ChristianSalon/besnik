import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Besnik.</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className="flex flex-col w-full min-h-screen px-24 py-8 bg-primaryLight">
        <nav className="w-full flex items-center relative">
          <h1 className="text-primaryDark text-3xl font-semibold mr-16">
            Besnik.
          </h1>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="text-primaryDark">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-primaryDark">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-primaryDark">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-primaryDark">
                Listed
              </a>
            </li>
            <li>
              <a href="#" className="text-primaryDark">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-8 h-full absolute right-0">
            <a href="#" className="text-primaryDark">
              Sign up
            </a>
            <a
              href="#"
              className="text-white bg-primaryDark px-4 py-2 rounded-lg"
            >
              Register
            </a>
          </div>
        </nav>
        <div className="flex-1 w-full h-full flex justify-between items-center">
          <div className="w-1/2 flex flex-col justify-center items-start gap-8">
            <h4 className="text-gray-600 text font-medium">
              Welcome to Besnik Agency
            </h4>
            <h1 className="text-[72px] leading-[70px] text-primaryDark font-bold">
              Discover a place you’ll love to live.
            </h1>
            <p className="text-gray-500">
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
          <div className="w-1/2 self-stretch bg-[url('/hero.svg')] bg-center bg-no-repeat bg-contain"></div>
        </div>
      </header>

      <section className="w-full p-24">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-primaryDark">Besnik.</h3>
            <p className="text-gray-500">
              More than 45,000+ companies trust besnik
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div>
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            </div>
            <p className="text-gray-500">5 Star Ratings (2k+ Reviews)</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-24">
          <img src="/companies/me-undies.png" alt="me-undies" />
          <img src="/companies/slack.png" alt="slack" />
          <img src="/companies/amazon.png" alt="amazon" />
          <img src="/companies/woo-commerce.png" alt="woo-commerce" />
          <img src="/companies/sitepoint.png" alt="sitepoint" />
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 w-full p-24">
        <div className="w-12 h-1 rounded-full bg-primaryDark"></div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-semibold text-primaryDark">
            How it works ?
          </h2>
          <p className="text-gray-500">
            Everything you need to know when you’re looking to buy, rent, or
            sell - all in one place.
          </p>
        </div>
        <div className="flex justify-between items-center w-2/3 py-12">
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

      <section className="w-full min-h-screen flex flex-col p-24 bg-primaryLight">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl text-primaryDark font-semibold">
              Featured Properties
            </h2>
            <p className="">Everything you need to know when you’re looking</p>
          </div>
          <a href="#" className="text-[#0689FF]">
            View All Properties
            <img src="/icons/arrow.svg" alt="arrow" className="inline ml-2" />
          </a>
        </div>
        <div className="flex-1 flex gap-12 pt-16">
          <div className="flex-1 flex flex-col self-stretch">
            <div className="flex-1 rounded-t-xl bg-[url('/properties/property-1.jpg')] bg-no-repeat bg-bottom bg-cover"></div>
            <div className="w-full flex flex-col items-start gap-2 p-6 bg-white rounded-b-xl">
              <h6 className="text-xl text-primaryDark font-semibold">$35000</h6>
              <p className="text-sm text-gray-500">
                8502 Preston Rd. Inglewood, Maine 98280
              </p>
              <div className="flex gap-6 mt-2">
                <div className="flex gap-2">
                  <img src="/icons/bed.svg" alt="bed" />
                  <h6>5 Beds</h6>
                </div>
                <div className="flex gap-2">
                  <img src="/icons/bath.svg" alt="bath" />
                  <h6>2 Baths</h6>
                </div>
                <div className="flex gap-2">
                  <img src="/icons/area.svg" alt="area" />
                  <h6>2000 Sqft</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col self-stretch">
            <div className="flex-1 rounded-t-xl bg-[url('/properties/property-2.jpg')] bg-no-repeat bg-bottom bg-cover"></div>
            <div className="w-full flex flex-col items-start gap-2 p-6 bg-white rounded-b-xl">
              <h6 className="text-xl text-primaryDark font-semibold">$75000</h6>
              <p className="text-sm text-gray-500">
                8502 Preston Rd. Inglewood, Maine 98280
              </p>
              <div className="flex gap-6 mt-2">
                <div className="flex gap-2">
                  <img src="/icons/bed.svg" alt="bed" />
                  <h6>6 Beds</h6>
                </div>
                <div className="flex gap-2">
                  <img src="/icons/bath.svg" alt="bath" />
                  <h6>3 Baths</h6>
                </div>
                <div className="flex gap-2">
                  <img src="/icons/area.svg" alt="area" />
                  <h6>3400 Sqft</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col self-stretch">
            <div className="flex-1 rounded-t-xl bg-[url('/properties/property-3.jpg')] bg-no-repeat bg-bottom bg-cover"></div>
            <div className="w-full flex flex-col items-start gap-2 p-6 bg-white rounded-b-xl">
              <h6 className="text-xl text-primaryDark font-semibold">$45000</h6>
              <p className="text-sm text-gray-500">
                8502 Preston Rd. Inglewood, Maine 98280
              </p>
              <div className="flex gap-6 mt-2">
                <div className="flex gap-2">
                  <img src="/icons/bed.svg" alt="bed" />
                  <h6>3 Beds</h6>
                </div>
                <div className="flex gap-2">
                  <img src="/icons/bath.svg" alt="bath" />
                  <h6>1 Bath</h6>
                </div>
                <div className="flex gap-2">
                  <img src="/icons/area.svg" alt="area" />
                  <h6>1500 Sqft</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen p-24">
        <div className="flex justify-around items-center gap-28">
          <div className="flex-1 flex justify-center items-center relative">
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
            <h2 className="text-5xl text-primaryDark font-semibold">
              You’ve found a neighborhood you love.
            </h2>
            <p className="text-gray-500">
              When you own a home, you’re committing to living in one location
              for a while. In a recent Trulia survey, we found that five out of
              six respondents said finding the right neighborhood is tough
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center pt-32">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-6xl text-primaryDark font-bold">2,500</h1>
            <p className="text-lg text-gray-500 font-medium">Homes for Sale</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-6xl text-primaryDark font-bold">5,000+</h1>
            <p className="text-lg text-gray-500 font-medium">
              Homes Recently Sold
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-6xl text-primaryDark font-bold">170+</h1>
            <p className="text-lg text-gray-500 font-medium">Price Reduced</p>
          </div>
        </div>
      </section>

      <section className="w-full p-24">
        <div className="w-full px-16 py-24 bg-primary rounded-2xl relative">
          <div className="flex flex-col justify-center items-start gap-4">
            <h2 className="text-3xl text-white font-semibold">
              Featured Properties
            </h2>
            <p className="text-gray-300">
              Everything you need to know when you’re looking
            </p>
            <a
              href="#"
              className="px-6 py-3 text-primaryDark font-medium bg-white rounded-xl mt-2"
            >
              Get Started Now
            </a>
          </div>
          <div className="flex justify-center items-center w-[250px] h-[500px] p-3 bg-gray-200 rounded-[50px] absolute right-64 -bottom-16">
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

      <footer className="w-full p-24 pb-12">
        <div className="flex justify-between items-start ">
          <div className="flex flex-col gap-10">
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
          <div className="flex flex-col gap-10">
            <h4 className="text-lg text-primaryDark font-semibold">
              Resources
            </h4>
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
          <div className="flex flex-col gap-10">
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
          <div className="flex flex-col gap-10">
            <h4 className="text-lg text-primaryDark font-semibold">
              Get in touch
            </h4>
            <p className="text-sm text-gray-500">
              You’ll find your next home, in any style you prefer.
            </p>
            <div className="flex gap-4 text-gray-500 text-sm">
              <a
                href="#"
                className="flex justify-center items-center h-10 aspect-square px-4 py-2 bg-gray-100 rounded-lg"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 aspect-square px-4 py-2 bg-gray-100 rounded-lg"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 aspect-square px-4 py-2 bg-gray-100 rounded-lg"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-24">
          <h2 className="text-3xl text-primaryDark font-semibold">Besnik.</h2>
          <p className="text-sm text-gray-500">
            Copyright 2022, All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
