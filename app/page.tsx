import React from "react";
import Link from "next/link";
import HeaderPhoto from "./components/home/HeaderPhoto";
import WelcomingRemarks from "./components/home/WelcomingRemarks";
import ContactUs from "./components/home/ContactUs";
import GallerySection from "./components/home/GallerySection";
import Sponsors from "./components/home/Sponsors";
import landingPagePhoto from "@/assets/Landing-page-mini.webp";

function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-red-dark to-red-bright">
      <HeaderPhoto overlayOpacity={0.5} photoUrl={landingPagePhoto.src}>
        <div className="w-full h-full flex flex-col items-center justify-center font-plus-jakarta gap-2 box-border px-8 md:px-0">
          <div className="w-full flex justify-center items-center mt-8">
            <div className="px-6 py-4 rounded-lg">
              <h1
                className="text-[#ffcf53] text-center text-2xl md:text-7xl font-extrabold"
                style={{ textShadow: "0 20px 50px #ffcf53" }}
              >
                Jakarta International Model
                <br />
                <span className="">United Nations 2025</span>
              </h1>
            </div>
          </div>
          <p className="font-extrabold text-lg  md:text-3xl animate-fade-in opacity-0">
            8th - 10th of August 2025
          </p>
          <p className="font-extrabold text-lg  md:text-3xl animate-fade-in opacity-0">
            Hybrid
          </p>

          <div className="mt-8 animate-fade-in opacity-0">
            <Link
              href="/registration"
              className="inline-block bg-gradient-to-b from-red-medium to-pink-medium rounded-lg py-4 px-8 md:py-5 md:px-12 font-bold text-white shadow-md hover:scale-105 transition-all border-none outline-none text-lg md:text-xl"
            >
              Register Now
            </Link>
          </div>
        </div>
      </HeaderPhoto>
      <WelcomingRemarks />
      <GallerySection />
      <Sponsors />
      <ContactUs />
    </main>
  );
}

export default HomePage;
