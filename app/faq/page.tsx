import React from "react";
import Image from "next/image";
import ContactUs from "../components/about/ContactUs"; // Adjust path to whichever ContactUs you decided to use

// IMPORTANT: Update these paths to match where your logos are actually stored
import jmunText from "@/assets/Jmuntext.svg"; 
import unLogo from "@/assets/double-logo.png"; 

export default function FAQPage() {
  const faqs = [
    {
      q: "Q: When is the time and date of JakartaMUN 2026?",
      a: "A: It will be held on August 21st until August 23rd and our venue will be revealed shortly on our social media. Please stay tuned."
    },
    {
      q: "Q: Who can participate in JakartaMUN?",
      a: "A: JakartaMUN is open from the ages of 13-24 from Indonesia and around the world."
    },
    {
      q: "Q: How do I register for JakartaMUN?",
      a: "A: Participants can register through the official JakartaMUN website by filling out the registration form and completing the payment process."
    },
    {
      q: "Q: Are any refunds available?",
      a: "A: As stated in the Registration Kit at the start of the form that's required to be read thoroughly, then give a comply, then again in the payment section in the forms stating No Refund Policy. With that, unfortunately payments will not be refundable."
    }
  ];

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

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-batik.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "top center"
        }}
      />

      <div className="w-full flex items-start justify-between px-6 py-8 md:px-12 relative z-10">
        
        {/* Left Logos */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image src={jmunText} alt="JMUN Text" className="w-32 md:w-48 h-auto" />
        </div>

        {/* Right Logos & Text */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex flex-col text-white tracking-widest text-[10px] md:text-xs font-semibold mr-2 text-right opacity-90">
            <span>INDONESIAN STUDENT ASSOCIATION</span>
            <span>FOR INTERNATIONAL STUDIES</span>
          </div>
          
          <div className="w-24 md:w-32 h-10 md:h-14 overflow-hidden flex justify-start items-center">
            <Image 
              src={unLogo} 
              alt="UN and ISAFIS Logos" 
              className="h-full w-auto max-w-none" 
            />
          </div>
        </div>
      </div>

      <div className="w-full flex grow flex-col items-center justify-start px-6 md:px-12 py-8 z-10">
        
        <h1 className="text-[#0b4d66] text-5xl md:text-7xl font-bold text-center mb-12 font-serif tracking-wide">
          Frequently Asked Questions
        </h1>

        <div className="w-full max-w-4xl flex flex-col gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col gap-1 text-white font-plus-jakarta text-lg md:text-2xl leading-snug">
              <p>{faq.q}</p>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="w-full relative z-10 mt-auto">
      <div className="border-b-2 border-white"></div>
        <ContactUs />
      </div>
    </main>
  );
}