import { motion } from "framer-motion";
import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const topLineVariants = {
    open: {
      background: ["#0F1B4C", "#E6F0FF"],
      y: [0, 8, 8],
      rotate: [0, 0, 45],
      transition: { duration: 1, delay: 0.6, ease: "easeOut" },
    },
    close: {
      background: ["#E6F0FF", "#0F1B4C"],
      y: [8, 8, 0],
      rotate: [45, 0, 0],
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const middleLineVariants = {
    open: {
      background: ["#0F1B4C", "#E6F0FF"],
      opacity: [1, 0, 0],
      transition: { duration: 1, delay: 0.6, ease: "easeOut" },
    },
    close: {
      background: ["#E6F0FF", "#0F1B4C"],
      opacity: [0, 0, 1],
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const bottomLineVariants = {
    open: {
      background: ["#0F1B4C", "#E6F0FF"],
      y: [0, -8, -8],
      rotate: [0, 0, -45],
      transition: { duration: 1, delay: 0.6, ease: "easeOut" },
    },
    close: {
      background: ["#E6F0FF", "#0F1B4C"],
      y: [-8, -8, 0],
      rotate: [-45, 0, 0],
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const navigationVariants = {
    open: {
      x: [1000, 0],
    },
    close: {
      x: 0,
    },
  };

  return (
    <>
      <nav className="hidden w-full lg:flex items-center relative">
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
      <nav className="lg:hidden w-full flex justify-between items-center relative">
        <h1 className="text-primaryDark text-3xl font-semibold mr-16">
          Besnik.
        </h1>
        <motion.div
          variants={navigationVariants}
          animate={isOpen ? "open" : "close"}
          className={`flex flex-col gap-12 ${
            isOpen
              ? "fixed left-32 xs:left-1/2 right-0 inset-y-0 pl-12 pr-8 md:pr-24 py-8 bg-primaryDark"
              : "bg-transparent"
          }`}
        >
          <div
            className="w-8 h-[20px] aspect-square self-end flex flex-col justify-between items-stretch gap-1"
            onClick={toggle}
          >
            <motion.div
              variants={topLineVariants}
              initial={false}
              animate={isOpen ? "open" : "close"}
              className="flex-1 bg-primaryDark rounded-sm"
            ></motion.div>
            <motion.div
              variants={middleLineVariants}
              initial={false}
              animate={isOpen ? "open" : "close"}
              className="flex-1 bg-primaryDark rounded-sm"
            ></motion.div>
            <motion.div
              variants={bottomLineVariants}
              initial={false}
              animate={isOpen ? "open" : "close"}
              className="flex-1 bg-primaryDark rounded-sm"
            ></motion.div>
          </div>
          <ul
            className={`flex-col gap-6 text-primaryLight ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li>
              <a href="#" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="">
                Listed
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
            <li className="mt-8">
              <a href="#" className="">
                Sign up
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-primaryDark bg-primaryLight px-4 py-2 rounded-lg"
              >
                Register
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
