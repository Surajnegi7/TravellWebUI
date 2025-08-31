import React, { useState, useEffect } from "react";

const dropdownData = {
  destinations: ["Paris", "New York", "Tokyo", "Sydney"],
  sports: ["Hiking", "Skiing", "Surfing", "Cycling"],
};

const Dropdown = ({ title, items, isOpen, toggle }) => (
  <li className="relative" tabIndex={0}>
    <button
      onClick={toggle}
      className="flex items-center space-x-1 hover:text-[#00a3ff] focus:outline-none"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <span>{title}</span>
      <svg
        className={`w-3 h-3 transition-transform duration-200 ease-in-out ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <ul className="absolute top-full mt-2 w-48 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-md shadow-lg py-2 text-sm text-white z-50">
        {items.map((item) => (
          <li
            key={item}
            className="px-4 py-2 hover:bg-[#00a3ff]/20 cursor-pointer"
            onClick={() => alert(`You clicked ${item}`)}
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </li>
);

const MobileDropdown = ({ title, items, isOpen, toggle }) => (
  <div>
    <button
      onClick={toggle}
      className="flex items-center justify-between w-full hover:text-[#00a3ff] focus:outline-none"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <span>{title}</span>
      <svg
        className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <ul className="mt-2 space-y-2 pl-4">
        {items.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-[#00a3ff]"
            onClick={() => alert(`You clicked ${item}`)}
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export function Header() {
  const [destOpen, setDestOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeMenus = (e) => {
      if (
        !e.target.closest("#destinations-menu") &&
        !e.target.closest("#sports-menu") &&
        !e.target.closest("#mobile-menu-button")
      ) {
        setDestOpen(false);
        setSportsOpen(false);
      }
    };
    document.addEventListener("click", closeMenus);
    return () => document.removeEventListener("click", closeMenus);
  }, []);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    setDestOpen(false);
    setSportsOpen(false);
  };

  return (
    <div className="header-content w-full bg-cover bg-center">
    <div className=" w-full h-[400px] bg-cover bg-center ">
      <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-sm w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-[#00a3ff] rounded-full flex items-center justify-center text-white font-bold text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg select-none">
                adventrus <span className="text-xs lowercase">holidays</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
              <li id="destinations-menu">
                <Dropdown
                  title="Destinations"
                  items={dropdownData.destinations}
                  isOpen={destOpen}
                  toggle={() => {
                    setDestOpen(!destOpen);
                    if (sportsOpen) setSportsOpen(false);
                  }}
                />
              </li>
              <li id="sports-menu">
                <Dropdown
                  title="Sports"
                  items={dropdownData.sports}
                  isOpen={sportsOpen}
                  toggle={() => {
                    setSportsOpen(!sportsOpen);
                    if (destOpen) setDestOpen(false);
                  }}
                />
              </li>
              <li>
                <button
                  onClick={() => alert("About us clicked")}
                  className="hover:text-[#00a3ff] focus:outline-none"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Contact us clicked")}
                  className="hover:text-[#00a3ff] focus:outline-none"
                >
                  Contact us
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Currency/Language options clicked")}
                  className="flex items-center space-x-1 hover:text-[#00a3ff] focus:outline-none"
                >
                  <span>€ / ₹</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              onClick={toggleMobile}
              className="md:hidden flex items-center focus:outline-none text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-80 backdrop-blur-sm w-full px-6 pt-4 pb-6 text-white text-sm font-medium space-y-4">
            <div id="destinations-menu">
              <MobileDropdown
                title="Destinations"
                items={dropdownData.destinations}
                isOpen={destOpen}
                toggle={() => {
                  setDestOpen(!destOpen);
                  if (sportsOpen) setSportsOpen(false);
                }}
              />
            </div>
            <div id="sports-menu">
              <MobileDropdown
                title="Sports"
                items={dropdownData.sports}
                isOpen={sportsOpen}
                toggle={() => {
                  setSportsOpen(!sportsOpen);
                  if (destOpen) setDestOpen(false);
                }}
              />
            </div>
            <div className="space-y-3">
              <button
                onClick={() => alert("About us clicked")}
                className="w-full text-left hover:text-[#00a3ff] focus:outline-none"
              >
                About us
              </button>
              <button
                onClick={() => alert("Contact us clicked")}
                className="w-full text-left hover:text-[#00a3ff] focus:outline-none"
              >
                Contact us
              </button>
              <button
                onClick={() => alert("Currency/Language options clicked")}
                className="w-full text-left hover:text-[#00a3ff] flex items-center space-x-2 focus:outline-none"
              >
                <span>€ / ₹</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto text-center text-white pt-24 pb-24">
        <h2 className="font-bold">
          Ocean sports holidays<span style={{fontStyle:'italic'}}>worldwide</span>
        </h2>
        <p>Windsurfing,kitesurfing,scubadiving,wingfoilling,paddleboarding and many others</p>
      </div>
    </div>
    </div>
  );
}
