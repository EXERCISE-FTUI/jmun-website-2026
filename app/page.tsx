import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import WelcomingRemarks from "./components/home/WelcomingRemarks";
import ContactUs from "./components/home/ContactUs";
import GallerySection from "./components/home/GallerySection";
import Sponsors from "./components/home/Sponsors";
import heroBackground from "@/assets/HeroBackground.svg";
import heroTitle from "@/assets/HeroTitle.svg";
import patungDirgantara from "@/assets/PatungDirgantara.svg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start">
      <section
        className={`relative w-full min-h-screen overflow-hidden ${montserrat.className}`}
      >
        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f7f98]/45"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full min-h-screen px-4 sm:px-6 md:px-12 pt-35 flex flex-col items-center justify-center">
          
          <div className="w-full max-w-[1250px] flex flex-col items-center">
            
            <div className="w-full rounded-[1.75rem] md:rounded-[2.25rem] bg-white/50 px-7 md:px-12 lg:px-12 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-9 md:gap-5">
                
                <div className="flex flex-col items-start justify-center">
                  <Image
                    src={heroTitle}
                    alt="Jakarta International Model United Nations 2026"
                    priority
                    className="max-w-none sm:w-[250px] md:w-[500px] lg:w-[700px] h-auto"
                  />
                  <div className="ml-29">
                    <p className="mt-1 md:mt-2 text-[#025470] italic font-light leading-tight text-base md:text-lg lg:text-[28px] w-[650px]">
                      Restoring the Path to Tranquility: Reconstructing the
                      Blueprint of Peace and Justice Within the Global
                      Architecture
                    </p>

                    <Link
                      href="/registration"
                      className="mt-2 md:mt-4 inline-flex items-center justify-center rounded-[20px] bg-[#025470] px-8 py-4 text-white font-bold text-md md:text-lg tracking-[0.04em] uppercase hover:brightness-110 transition-all"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center md:justify-end ml-20 -mb-20">
                  <Image
                    src={patungDirgantara}
                    alt="Patung Dirgantara illustration"
                    priority
                    className="max-w-none sm:w-[150px] md:w-[300px] lg:w-[575px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 text-center text-white italic leading-relaxed px-4">
              <p className="text-xs md:text-sm font-light w-160">
                Jl. Joe Klp. Tiga No. 56, RT. 07/RW. 03, Lenteng Agung, Kec.Jagakarsa, Kota Jakarta Selatan, DKI Jakarta, 12250.
              </p>
              <p className="mt-1 text-xs md:text-sm font-light">
                © 2026 ISAFIS. All rights reserved
              </p>
            </div>
            
          </div>
        </div>
      </section>
      
      <WelcomingRemarks />
      <GallerySection />
      <Sponsors />
      <ContactUs />
    </main>
  );
}

export default HomePage;