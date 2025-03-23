"use client";
import React, { useState, useRef, useEffect, MouseEventHandler } from "react";

const RegistrationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isMobile = useRef(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile.current) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile.current) {
      setIsOpen(false);
    }
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isMobile.current) {
      e.preventDefault();
      setIsOpen(!isOpen);
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
        Early Bird Registration
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

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationDropdown;
