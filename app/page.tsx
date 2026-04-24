import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import WelcomingRemarks from "./components/home/WelcomingRemarks";
import ContactUs from "./components/home/ContactUs";
import GallerySection from "./components/home/GallerySection";
import Sponsors from "./components/home/Sponsors";
import HomeBackground from "@/assets/HomeBackground.png";
import heroTitle from "@/assets/HeroTitle.svg";
import patungDirgantara from "@/assets/PatungDirgantara.svg";
import EllipseKuning from "@/assets/EllipseKuning.png";
import MobileViewportOverride from "./components/MobileScaler";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* Override viewport on mobile to force desktop layout */}
      <MobileViewportOverride />

      {/* Fixed background — locked to viewport, content scrolls over it */}
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

      <section
        className={`relative w-full min-h-[700px] ${montserrat.className}`}
      >

        <div className="relative z-10 w-full min-h-[725px] px-4 sm:px-6 md:px-12 sm:pt-1 md:pt-28 flex flex-col items-center justify-center">

          <div className="w-[1100px] lg:w-full max-w-[1250px] flex flex-col items-center">

            <div className="absolute opacity-50 left-[-13vw] top-[-13vw] -z-10">
              <Image
                src="/bunga-kiri-atas.png"
                alt="logo"
                width={1783}
                height={2072}
                className="w-[58vw] aspect-[1783/2072]"
                priority
                unoptimized
              />
            </div>
            <div className="w-full rounded-[1.75rem] md:rounded-[2.25rem] bg-white/50 px-5 py-12 [clip-path:inset(-100vw_-100vw_0_-100vw)] scale-100 [[data-is-mobile=true]_&]:scale-95">
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

                <div className="w-full flex items-center justify-center md:justify-end ml-20 -mb-40">
                  <div className="relative">
                    <Image
                      src={EllipseKuning}
                      alt=""
                      className="absolute top-[15%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-auto -z-10 opacity-100"
                    />
                    <Image
                      src={patungDirgantara}
                      alt="Patung Dirgantara illustration"
                      priority
                      className="max-w-none sm:w-[70px] md:w-[150px] lg:w-[520px] h-auto object-contain scale-x-[-1]"
                    />
                  </div>
                </div>
              </div>
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
