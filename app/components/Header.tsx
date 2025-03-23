"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import RegistrationDropdown from "./RegistrationDropdown";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleContactUsClick() {
    const contactUsHeader = document.querySelector("#contact-us-header");
    if (!contactUsHeader) return;

    contactUsHeader.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsMobileMenuOpen(false);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }
  return (
    <header className="bg-white/0 text-white py-6 px-4 md:px-8 w-full backdrop-blur-2xl fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-start">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold">
            <Image
              src={"/top-logo.png"}
              alt="Logo of Jakarta MUN"
              width={144}
              height={38}
              className="w-24 lg:w-36 h-auto"
            ></Image>
          </Link>
        </div>
        <div className="grow"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-plus-jakarta">
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="hover:scale-105 transition-all"
          >
            About
          </Link>
          <Link
            href="/councils"
            onClick={closeMobileMenu}
            className="hover:scale-105 transition-all"
          >
            Councils
          </Link>
          {/* <a href="#" className="hover:scale-105 transition-all">
            Press Articles
          </a>
          <a href="#" className="hover:scale-105 transition-all">
            JMUN Scholarship
          </a> */}
          <button
            onClick={handleContactUsClick}
            className="hover:scale-105 transition-all cursor-pointer"
          >
            Contact Us
          </button>
          <RegistrationDropdown />
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Animated */}
      <div
        className={`bg-transparent overflow-hidden transition-all duration-300 ease-in-out font-plus-jakarta flex flex-col items-center justify-start w-full ${
          isMobileMenuOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full flex flex-col gap-4 bg-transparent">
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="text-white py-2 hover:text-gray-300 transition-all transform hover:translate-x-2"
          >
            About
          </Link>
          <Link
            onClick={closeMobileMenu}
            href="/councils"
            className="text-white py-2 hover:text-gray-300 transition-all transform hover:translate-x-2"
          >
            Councils
          </Link>
          {/* <a
            href="#"
            className="text-white py-2 hover:text-gray-300 transition-all transform hover:translate-x-2"
          >
            Press Articles
          </a>
          <a
            href="#"
            className="text-white py-2 hover:text-gray-300 transition-all transform hover:translate-x-2"
          >
            JMUN Scholarship
          </a> */}
          <button
            onClick={handleContactUsClick}
            className="text-white py-2 text-left hover:text-gray-300 transition-all transform hover:translate-x-2"
          >
            Contact Us
          </button>
          <RegistrationDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
