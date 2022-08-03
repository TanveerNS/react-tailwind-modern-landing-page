import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
const list = ["Pricing", "Product", "About Us", "Careers", "Community"];

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  return (
    <>
    <div style={{background:'linear-gradient(0deg,rgba(223,35,30,0) 0,#fef1cd 100%)'}}>
      <img src="https://pidkast.gthememarket.com/content/images/2022/06/main-round-circle2.svg" alt="title" class="podcast-round-shape3 max-w-full align-middle" />
      <main className="main">
        <header className="header-area">
        </header>
      </main>
      <nav className={`relative container mx-auto p-6 ${navbarToggle && 'h-screen'}`}>
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-amber-500">NS Podcast</h3>
          </div>
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-yellow-500">
              <div className="group inline-block relative">
                <button className="rounded flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="basketball-ball"
                    className="w-3 h-7 pr-1 invisible hover:visible focus:visible"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"
                    ></path>
                  </svg>
                  <span className="mr-1">Pricing</span>
                </button>
                <ul className="absolute hidden p-0 text-gray-700 pt-1 left-0 w-36 left-0 -top-1 translate-x-0 translate-y-1/4 group-hover:block ">
                  <li className="h-4 bg-transparent"></li>
                  <li className="hover:text-yellow-500 bg-white">
                    <a className="py-0.5 px-1 flex whitespace-no-wrap" href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="basketball-ball"
                        className="w-3 h-7 pr-1 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"
                        ></path>
                      </svg>
                      <span>Free</span>
                    </a>
                  </li>
                  <li className="hover:text-yellow-500 bg-white">
                    <a className="flex py-0.5 px-1 whitespace-no-wrap" href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="basketball-ball"
                        className="w-3 h-7 pr-1 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"
                        ></path>
                      </svg>
                      <span>Premium</span>
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <div className="group inline-block relative">
                <button className="rounded flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="basketball-ball"
                    className="w-3 h-7 pr-1 invisible hover:visible focus:visible"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"
                    ></path>
                  </svg>
                  <span className="mr-1">Product</span>
                </button>
                <ul className="absolute hidden p-0 text-gray-700 pt-1 left-0 w-36 left-0 -top-1 translate-x-0 translate-y-1/4 group-hover:block ">
                  <li className="h-4 bg-transparent"></li>
                  <li className="hover:text-yellow-500  bg-white">
                    <a className="py-0.5 px-1 flex whitespace-no-wrap" href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="basketball-ball"
                        className="w-3 h-7 pr-1 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"
                        ></path>
                      </svg>
                      <span>Software</span>
                    </a>
                  </li>
                  <li className="hover:text-yellow-500 bg-white">
                    <a className="flex py-0.5 px-1 whitespace-no-wrap" href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="basketball-ball"
                        className="w-3 h-7 pr-1 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"
                        ></path>
                      </svg>
                      <span>Hardware</span>
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            <a href="#" className="hover:text-yellow-500">
              About Us
            </a>
            <a href="#" className="hover:text-yellow-500">
              Careers
            </a>
            <a href="#" className="hover:text-yellow-500">
              Community
            </a>
          </div>
          <a href="#" className="hidden p-2 px-4 text-white bg-amber-500 hover:bg-amber-600 rounded-full baseline font-bold md:block">
            Get Started
          </a>
          <button id="menu-btn" className={`block hamburger md:hidden focus:outline-none ${!navbarToggle ? "" : "open"}`} onClick={() => setNavbarToggle(!navbarToggle)}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div style={{ transition: "1s" }} className="md:hidden fixed top-0 left-1/2 translate-x-1/2 -translate-y-1/2 open">
          <div
            id="menu"
            className={` open absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${!navbarToggle ? "hidden" : "flex"
              }`}
          >
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#">Podcast</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="basis-1/2 md:mr-32 md:order-1">
          <div className="">
            <img src="https://pidkast.gthememarket.com/assets/images/podcast-bro.svg?v=380ef8b62f" />
          </div>
        </div>
        <div className="basis-1/2 md:ml-32">
          <div className="">
            <h1 className="text-black font-bold">
              Latest <span className="text-amber-500">podcast</span> everyday in mailbox
            </h1>
            <p className="text-black-300">We curate the best digital jobs for those who are looking to start their career in designing.</p>
            <div className="flex ">
              <input className="outline-0 w-1/2 h-12 pl-2 pr-2 leading-3" placeholder="Enter your Email"></input>
              <button className="block w-1/4 h-12 pl-2 pr-2 bg-amber-500 hover:bg-amber-600 text-white font-bold focus:outline-none">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
