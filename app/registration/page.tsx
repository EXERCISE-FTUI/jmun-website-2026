import React from "react";
import Image from "next/image";
import ContactUs from "../components/about/ContactUs"; // Update this path if it is different

// IMPORTANT: Update these paths to match where your logos are actually stored
import jmunText from "@/assets/Jmuntext.svg"; 
import unLogo from "@/assets/double-logo.png"; 
import HomeBackground from "@/assets/HomeBackground.png"; // Imported background from Home

// Keeps the RegistrationButton definition, even if not used right now.
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
    <main className="relative flex flex-col justify-between w-full min-h-screen overflow-x-hidden">
      
      {/* Fixed background taken from HomePage — locked to viewport, content scrolls over it */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <Image
          src={HomeBackground}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f7f98]/45" />
      </div>

      {/* Top Left Flower Background (Taken from HomePage code) */}
      <div className="absolute opacity-50 left-[-13vw] top-[-13vw] -z-10 pointer-events-none">
        <Image
          src="/bunga-kiri-atas.png"
          alt="flower decoration"
          width={1783}
          height={2072}
          className="w-[58vw] aspect-[1783/2072]"
          priority
          unoptimized
        />
      </div>

      {/* --- TOP LOGOS SECTION (NAVBAR) --- */}
      <div className="w-full flex items-center justify-between px-6 py-4 md:px-12 relative z-20 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20">
        
        {/* Left Logos (Icon + Text SVGs) */}
        <div className="flex items-center gap-4 md:gap-6 ml-10 md:ml-12">
          <Image src={jmunText} alt="JMUN Text" className="w-36 md:w-56 h-auto drop-shadow-sm" />
        </div>

        {/* Right Logos & Text */}
        <div className="hidden md:flex items-center gap-4">
          {/* Hardcoded Text */}
          <div className="flex flex-col text-white tracking-widest text-[10px] md:text-xs font-semibold text-right opacity-90 drop-shadow-sm">
            <span>INDONESIAN STUDENT ASSOCIATION</span>
            <span>FOR INTERNATIONAL STUDIES</span>
          </div>
          
          {/* Visually Cropped Image Container */}
          <div className="w-24 md:w-32 h-10 md:h-14 overflow-hidden flex justify-start items-center">
            <Image 
              src={unLogo} 
              alt="UN and ISAFIS Logos" 
              className="h-full w-auto max-w-none" 
            />
          </div>
        </div>
      </div>

      {/* --- COMING SOON CONTENT --- */}
      <div className="w-full flex grow items-center justify-center px-4 py-8 z-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 mx-auto">
          
          {/* Coming Soon Card */}
          <div className="relative bg-[#a0cbd4]/60 backdrop-blur-sm rounded-3xl p-10 md:p-14 lg:p-16 w-full max-w-2xl shadow-xl border border-white/20">
            
            {/* Top Left Flower (on Card) */}
            <div className="absolute -top-12 -left-12 w-32 h-32 md:w-48 md:h-48 z-20 pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/bunga-kanan-atas.png"
                  alt="flower decoration top left"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Bottom Right Flower (on Card, Inverted) */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 md:w-48 md:h-48 z-20 pointer-events-none transform scale-x-[-1] scale-y-[-1]">
              <div className="relative w-full h-full">
                <Image
                  src="/bunga-kanan-atas.png"
                  alt="flower decoration bottom right"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <h1 className="text-[#0b4d66] text-5xl md:text-7xl font-bold font-serif mb-4 relative z-10 tracking-wide">
              Coming Soon!
            </h1>
            <p className="text-[#0b4d66] text-lg md:text-2xl font-plus-jakarta italic font-bold leading-relaxed relative z-10">
              Registration is coming soon! We are sorry for the delay and appreciate your patience.
            </p>

            {/* Preserved Commented Code (Hidden so it doesn't affect layout) */}
            <div className="hidden">
              {/* <RegistrationButton
                text="Offline Delegation"
                href="http://bit.ly/OfflineDelegationFormJMUN2025"
              />
              <RegistrationButton
                text="Online Delegation"
                href="http://bit.ly/OnlineDelegationFormJMUN2025"
              />
              <RegistrationButton
                text="Offline Single Delegate"
                href="http://bit.ly/OfflineAttendeeFormJMUN2025" 
              />
              <RegistrationButton
                text="Online Single Delegate"
                href="http://bit.ly/OnlineAttendeeFormJMUN2025" 
              /> */}
              
              {/* <RegistrationButton
                text="Buy JMUN Social Package"
                href="https://bit.ly/JMUN2025SocialPacksPurchaseForm"
              /> */}
            </div>
          </div>

          {/* Right Character Column - Ondel-Ondel */}
          <div className="relative w-full md:w-[400px] flex flex-col items-center justify-center pointer-events-none mt-16 md:mt-0">
            {/* Main Character */}
            <Image
              src="/Ondel-Ondel.svg" 
              alt="Ondel-Ondel characters"
              width={400} 
              height={500} 
              className="w-full max-w-[280px] md:max-w-[400px] h-auto relative z-10" 
              priority
            />
            {/* Reflection Effect */}
            <Image
              src="/Ondel-Ondel.svg" 
              alt="Ondel-Ondel reflection"
              width={400} 
              height={500} 
              className="w-full max-w-[280px] md:max-w-[400px] h-auto absolute top-[98%] transform scale-y-[-1] opacity-30 blur-[2px]" 
            />
          </div>

        </div>
      </div>

      {/* Bottom Right Inverted Flowers (Kept from original Registration Page) */}
      <div className="absolute opacity-50 right-[-13vw] bottom-[-13vw] -z-10 pointer-events-none transform scale-x-[-1] scale-y-[-1]">
        <Image
          src="/bunga-kanan-atas.png"
          alt="flower decoration inverted"
          width={1783}
          height={2072}
          className="w-[68.292vw] aspect-[1783/2072]"
          priority
          unoptimized
        />
      </div>

      <div className="border-b-2 border-white relative z-10"></div>
      <div className="relative z-10">
        <ContactUs />
      </div>
    </main>
  );
}

export default RegistrationPage;