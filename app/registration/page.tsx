import React from "react";
import Image from "next/image";
import ContactUs from "../components/about/ContactUs"; // Update this path if it is different

// IMPORTANT: Update these paths to match where your logos are actually stored
import jmunText from "@/assets/Jmuntext.svg"; 
import unLogo from "@/assets/double-logo.png"; 

interface RegistrationButtonProps {
  text: string;
  href: string;
}

function RegistrationButton({ text, href }: RegistrationButtonProps) {
  const baseClasses =
    "w-full px-4 py-4 rounded-[2rem] font-bold text-xl md:text-2xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-center flex items-center justify-center font-plus-jakarta";

  const colorClasses = "bg-[#0b4d66] text-white shadow-md";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${colorClasses}`}
    >
      {text}
    </a>
  );
}

function RegistrationPage() {
  return (
    <main className="relative flex flex-col justify-between w-full bg-gradient-to-b from-[#A6DBAB] to-[#045A77] min-h-screen overflow-x-hidden">
      
      {/* Top Left Flower Background */}
      <div className="absolute opacity-50 left-[-13vw] top-[-13vw] z-0 pointer-events-none">
        <Image
          src="/bunga-kiri-atas.png"
          alt="flower decoration"
          width={1783}
          height={2072}
          className="w-[68.292vw] aspect-[1783/2072]"
          priority
          unoptimized
        />
      </div>

      {/* Repeating Batik Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-batik.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "top center"
        }}
      />

      {/* --- TOP LOGOS SECTION --- */}
      <div className="w-full flex items-start justify-between px-6 py-8 md:px-12 relative z-10">
        
        {/* Left Logos (Icon + Text SVGs) */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image src={jmunText} alt="JMUN Text" className="w-32 md:w-48 h-auto" />
        </div>

        {/* Right Logos & Text */}
        <div className="hidden md:flex items-center gap-3">
          {/* Hardcoded Text */}
          <div className="flex flex-col text-white tracking-widest text-[10px] md:text-xs font-semibold mr-2 text-right opacity-90">
            <span>INDONESIAN STUDENT ASSOCIATION</span>
            <span>FOR INTERNATIONAL STUDIES</span>
          </div>
          
          {/* Visually Cropped Image Container */}
          {/* 'w-24 md:w-32' and 'overflow-hidden' hides the right side of your uncropped image */}
          <div className="w-24 md:w-32 h-10 md:h-14 overflow-hidden flex justify-start items-center">
            <Image 
              src={unLogo} 
              alt="UN and ISAFIS Logos" 
              className="h-full w-auto max-w-none" 
            />
          </div>
        </div>
      </div>

      {/* --- REGISTRATION CONTENT --- */}
      <div className="w-full flex grow flex-col items-center justify-center px-4 py-8 z-10">
        
        {/* Main Event Section */}
        <div className="w-full max-w-4xl mb-16 mt-8">
          <h2 className="text-[#0b4d66] text-5xl md:text-7xl font-bold text-center mb-8 font-serif tracking-wide">
            Main Event
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            <RegistrationButton
              text="Offline Delegation"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdaaW3l59cYVOp1-iG4bdMdY2M-59A28f7hW9-iyod1fk0MDg/viewform?fbzx=9149161956545359316"
            />
            <RegistrationButton
              text="Online Delegation"
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSequL-dUC_lnwjqKe2DxLn4fqcoRuJmyh-ybN4lFEuNpiL_Rw/viewform"
            />
            <RegistrationButton
              text="Offline Single Delegate"
              href="https://docs.google.com/forms/d/e/1FAIpQLScbzzwoOHQLzepd-Gi_dxYL0LpBKB6oIkydYtCdaWwrSZdrQw/viewform" 
            />
            <RegistrationButton
              text="Online Single Delegate"
              href="https://docs.google.com/forms/d/e/1FAIpQLScmZibyHjspDlFyNVEvQCK_wRCU-8sPQ11ujmT-tUCwnK5SZA/viewform" 
            />
          </div>
        </div>

        {/* Social Night Section (Hidden dlu, nanti ubah jadi flex kalau udh ada*/}
        <div className="w-full max-w-3xl hidden flex-col items-center mb-16">
          <h2 className="text-[#0b4d66] text-5xl md:text-7xl font-bold text-center mb-4 font-serif tracking-wide">
            Social Night
          </h2>

          <p className="text-white text-lg md:text-xl leading-relaxed text-center mb-8 font-medium font-plus-jakarta px-4">
            JMUN social night is way for everyone-not only delegates to
            participate in JMUN's one of a series of events. This package
            is a call for everyone who wishes to engage in JMUN's socials.
          </p>

          <div className="w-full max-w-md">
            <RegistrationButton
              text="Buy JMUN Social Package"
              href="https://bit.ly/JMUN2025SocialPacksPurchaseForm"
            />
          </div>
        </div>
      </div>

      <div className="border-b-2 border-white"></div>
        <ContactUs />
    </main>
  );
}

export default RegistrationPage;