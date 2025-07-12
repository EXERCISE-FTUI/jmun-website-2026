"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/utils";
import { councils } from "@/data/council";
import { IoChevronDown } from "react-icons/io5";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCouncilsDropdownOpen, setIsCouncilsDropdownOpen] = useState(false);
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const breakpoint = useBreakpoint(BREAKPOINTS, "desktop");

  useEffect(() => {
    if (breakpoint.breakpoint === "desktop") {
      setIsMobileMenuOpen(false);
    }
  }, [breakpoint.breakpoint]);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function closeCouncilsDropdown() {
    setIsCouncilsDropdownOpen(false);
  }

  function closeRegisterDropdown() {
    setIsRegisterDropdownOpen(false);
  }

  return (
    <header className="bg-white/0 backdrop-blur-sm text-white py-6 px-4 md:px-8 w-full fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-start">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4 group">
            <Image
              src={logo}
              alt="Logo of Jakarta MUN"
              className="w-8 lg:w-12 h-auto"
            />
            <div className="h-10 w-px bg-white/60 mx-2" />
            <div className="flex items-start justify-start gap-1">
              <p className="text-6xl font-cormorant-garamond italic">J</p>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-cormorant-garamond font-bold tracking-widest group-hover:text-white/90 transition-colors">
                  AKARTA
                </span>
                <span className="text-xs lg:text-sm font-cormorant-garamond tracking-wide uppercase -mt-1">
                  International Model
                </span>
                <span className="text-xs font-cormorant-garamond tracking-wide uppercase">
                  United Nations <span className="font-normal">2025</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="grow"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-plus-jakarta pr-8">
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none"
          >
            About
          </Link>

          {/* Councils Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCouncilsDropdownOpen(true)}
            onMouseLeave={() => setIsCouncilsDropdownOpen(false)}
          >
            <button className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none cursor-pointer flex items-center gap-2">
              Councils
              <IoChevronDown
                className={`transition-transform duration-300 ease-in-out ${
                  isCouncilsDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                size={16}
              />
            </button>
            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out z-50 ${
                isCouncilsDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="py-2">
                {councils.map((council) => (
                  <Link
                    key={council.organization}
                    href={`/councils#${council.organization
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 font-medium text-[color:var(--color-red-dark)] hover:font-bold transition-colors duration-200"
                    onClick={closeCouncilsDropdown}
                  >
                    {council.organization}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Register Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsRegisterDropdownOpen(true)}
            onMouseLeave={() => setIsRegisterDropdownOpen(false)}
          >
            <button className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none cursor-pointer flex items-center gap-2">
              Register
              <IoChevronDown
                className={`transition-transform duration-300 ease-in-out ${
                  isRegisterDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                size={16}
              />
            </button>
            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out z-50 ${
                isRegisterDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="py-2">
                {[
                  "Online Delegation",
                  "Offline Delegation",
                  "Online Attendee",
                  "Offline Attendee",
                  "Social Packs",
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href="/registration"
                    className="block px-4 py-2 font-medium text-[color:var(--color-red-dark)] hover:font-bold transition-colors duration-200"
                    onClick={closeRegisterDropdown}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* <Link
            href="/registration"
            onClick={closeMobileMenu}
            className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none"
          >
            Registration
          </Link> */}
          {/* <button
            onClick={handleContactUsClick}
            className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all cursor-pointer border-none outline-none"
          >
            Contact Us
          </button> */}
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
        className={`bg-transparent transition-all duration-300 ease-in-out font-plus-jakarta flex flex-col items-center justify-start w-full ${
          isMobileMenuOpen ? "opacity-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full flex flex-col gap-4 bg-transparent">
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none text-left"
          >
            About
          </Link>

          {/* Mobile Councils Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCouncilsDropdownOpen((prev) => !prev);
                setIsRegisterDropdownOpen(false);
              }}
              className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none cursor-pointer flex items-center justify-between w-full"
            >
              <span>Councils</span>
              <IoChevronDown
                className={`transition-transform duration-300 ease-in-out ${
                  isCouncilsDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                size={16}
              />
            </button>

            {/* Mobile Dropdown Menu */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isCouncilsDropdownOpen
                  ? "max-h-[440px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-col gap-1 py-2">
                {councils.map((council) => (
                  <Link
                    key={council.organization}
                    href={`/councils#${council.organization
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 font-bold text-red-dark hover:font-bold transition-colors duration-200"
                    onClick={() => {
                      closeMobileMenu();
                      closeCouncilsDropdown();
                    }}
                  >
                    {council.organization}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Register Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsRegisterDropdownOpen((prev) => !prev);
                setIsCouncilsDropdownOpen(false);
              }}
              className="bg-gradient-to-b from-red-medium to-pink-medium rounded-lg px-6 py-2 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none cursor-pointer flex items-center justify-between w-full"
            >
              <span>Register</span>
              <IoChevronDown
                className={`transition-transform duration-300 ease-in-out ${
                  isRegisterDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                size={16}
              />
            </button>

            {/* Mobile Dropdown Menu */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isRegisterDropdownOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-col gap-1 py-2">
                {[
                  "Online Delegation",
                  "Offline Delegation",
                  "Online Attendee",
                  "Offline Attendee",
                  "Social Packs",
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href="/registration"
                    className="block px-4 py-2 font-bold text-red-dark hover:font-bold transition-colors duration-200"
                    onClick={() => {
                      closeMobileMenu();
                      closeRegisterDropdown();
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
