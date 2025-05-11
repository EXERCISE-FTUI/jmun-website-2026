"use client";
import { BREAKPOINTS } from "@/utils";
import React, { useState, useRef, MouseEventHandler } from "react";
import useBreakpoint from "use-breakpoint";

const RegistrationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isMobile = useBreakpoint(BREAKPOINTS, "mobile");

  const handleMouseEnter = () => {
    if (isMobile.breakpoint === "desktop") {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isMobile.breakpoint === "desktop") {
      setIsOpen(false);
    }
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isMobile.breakpoint !== "desktop") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="bg-white text-pink-dark hover:bg-pink-light hover:text-white py-2 px-4 rounded-lg text-center transition-all mt-2 flex items-center cursor-pointer"
      >
        Registration
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div
        className={`absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-64 opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 pointer-events-none transform -translate-y-2"
        }`}
      >
        {" "}
        <div className="py-1">
          <a
            href="http://bit.ly/OnlineAttendeeFormJMUN2025"
            target="_blank"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-light hover:text-white"
          >
            Online Attendee
          </a>
          <a
            href="http://bit.ly/OnlineDelegationFormJMUN2025"
            target="_blank"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-light hover:text-white"
          >
            Online Delegation
          </a>
          <a
            href="http://bit.ly/OfflineAttendeeFormJMUN2025"
            target="_blank"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-light hover:text-white"
          >
            Offline Attendee
          </a>
          <a
            href="http://bit.ly/OfflineDelegationFormJMUN2025"
            target="_blank"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-light hover:text-white"
          >
            Offline Delegation
          </a>
          <a
            href="http://bit.ly/JMUN2025Scholarship"
            target="_blank"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-light hover:text-white"
          >
            Scholarships
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDropdown;
