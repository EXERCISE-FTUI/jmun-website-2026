import React from "react";
import HeaderPhoto from "./components/home/HeaderPhoto";
import CouncilSection from "./components/home/CouncilSection";
import WelcomingRemarks from "./components/home/WelcomingRemarks";
import ContactUs from "./components/home/ContactUs";
import GallerySection from "./components/home/GallerySection";

function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-red-dark to-red-bright">
      <HeaderPhoto photoUrl="https://www.jakartamun.org/_next/image?url=%2Fbackgrounds%2Fbhi.webp&w=3840&q=100">
        <div className="w-full h-full flex flex-col items-center justify-center font-plus-jakarta gap-2 box-border px-8 md:px-0">
          <h1 className="text-white text-center text-2xl md:text-7xl font-extrabold">
            JAKARTA INTERNATIONAL
            <br />
            <span className="text-red-bright">MODEL UNITED NATIONS</span> 2025
          </h1>
          <p className="font-medium text-lg  md:text-3xl">
            8th - 10th of August 2025
          </p>
          <p className="font-medium text-lg  md:text-3xl">Hybrid</p>
        </div>
      </HeaderPhoto>
      <WelcomingRemarks />
      <CouncilSection />
      <GallerySection />
      <ContactUs />
    </main>
  );
}

export default HomePage;
