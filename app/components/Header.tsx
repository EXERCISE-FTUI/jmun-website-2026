"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { councils } from "@/data/council";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCouncilsOpen, setIsCouncilsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
  const sidebarRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Ref to store our timer so we can pause/cancel it
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper to clear the timer (keeps sidebar open)
  const cancelCloseTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Helper to start the countdown
  const startCloseTimer = useCallback(() => {
    // Disable auto-close entirely on mobile and tablet screens (under 1024px)
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      return;
    }

    cancelCloseTimer(); // Clear any existing timers first to prevent overlap
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  }, [cancelCloseTimer]);

  // 1. Click-outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Make sure we aren't clicking inside the sidebar AND aren't clicking the toggle button
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 2. Manage the timer automatically when `isOpen` state changes
  useEffect(() => {
    if (isOpen) {
      // Start the countdown when it opens...
      startCloseTimer();
    } else {
      // Clean up the timer if it gets closed manually or via click-outside
      cancelCloseTimer();
    }

    return () => cancelCloseTimer(); // Cleanup on unmount
  }, [isOpen, startCloseTimer, cancelCloseTimer]);

  // Helper to close everything after a navigation link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Menu Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={cancelCloseTimer} // PAUSE timer when mouse is on the button
        onMouseLeave={startCloseTimer}  // RESTART timer when mouse leaves the button
        className="fixed top-8 left-6 z-[60] bg-transparent border-none outline-none cursor-pointer hover:opacity-75 transition-opacity"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0b4d66"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <circle cx="3" cy="6" r="1.5"></circle>
          <circle cx="3" cy="12" r="1.5"></circle>
          <circle cx="3" cy="18" r="1.5"></circle>
        </svg>
      </button>

      {/* Optional: Dark backdrop overlay when sidebar is open */}
      <div 
        className={`fixed inset-0 bg-black/10 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sliding Sidebar Drawer */}
      <aside
        ref={sidebarRef}
        onMouseEnter={cancelCloseTimer} // PAUSE timer when mouse enters sidebar
        onMouseLeave={startCloseTimer}  // RESTART timer when mouse leaves sidebar
        className={`fixed top-0 left-0 h-screen w-56 bg-[#e3eae7] z-50 flex flex-col pt-24 px-6 shadow-[4px_0_24px_rgba(0,0,0,0.05)] overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Vertical Navigation Links */}
        <nav className="flex flex-col gap-6 font-plus-jakarta text-[#0b4d66] text-xl italic font-medium">
          
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className="hover:font-bold hover:scale-105 origin-left transition-all w-fit"
          >
            Home
          </Link>

          <Link 
            href="/about" 
            onClick={handleLinkClick}
            className="hover:font-bold hover:scale-105 origin-left transition-all w-fit"
          >
            About
          </Link>

          {/* Councils Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsCouncilsOpen(!isCouncilsOpen)}
              className="flex items-center justify-between text-left italic hover:font-bold hover:scale-105 origin-left transition-all outline-none"
            >
              Councils
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  isCouncilsOpen ? "rotate-180" : "rotate-0"
                }`}
                size={18}
              />
            </button>
            <div
              className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ${
                isCouncilsOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {councils?.map((council) => (
                <Link
                  key={council.organization}
                  href={`/councils#${council.organization.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={handleLinkClick}
                  className="text-sm not-italic pl-4 font-normal hover:font-bold transition-all w-fit"
                >
                  {council.organization}
                </Link>
              ))}
            </div>
          </div>

          {/* Registration Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsRegisterOpen(!isRegisterOpen)}
              className="flex items-center justify-between text-left italic hover:font-bold hover:scale-105 origin-left transition-all outline-none"
            >
              Registration
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  isRegisterOpen ? "rotate-180" : "rotate-0"
                }`}
                size={18}
              />
            </button>
            <div
              className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ${
                isRegisterOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
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
                  onClick={handleLinkClick}
                  className="text-sm not-italic pl-4 font-normal hover:font-bold transition-all w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/faq" 
            onClick={handleLinkClick}
            className="hover:font-bold hover:scale-105 origin-left transition-all w-fit"
          >
            FaQ&apos;s
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Header;