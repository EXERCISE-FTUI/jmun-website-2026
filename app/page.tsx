import React from "react";
import HeaderPhoto from "./components/home/HeaderPhoto";
import CouncilSection from "./components/home/CouncilSection";
import WelcomingRemarks from "./components/home/WelcomingRemarks";
import ContactUs from "./components/home/ContactUs";
import GallerySection from "./components/home/GallerySection";
import bundaranHIPhoto from "@/assets/bundaran-HI-mini.webp";

function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-red-dark to-red-bright">
      <HeaderPhoto photoUrl={bundaranHIPhoto.src}>
        <div className="w-full h-full flex flex-col items-center justify-center font-plus-jakarta gap-2 box-border px-8 md:px-0">
          <h1 className="text-white text-center text-2xl md:text-7xl font-extrabold animate-fade-in opacity-0">
            JAKARTA INTERNATIONAL
            <br />
            <span className="text-red-bright">MODEL UNITED NATIONS</span> 2025
          </h1>
          <p className="font-medium text-lg  md:text-3xl animate-fade-in opacity-0">
            8th - 10th of August 2025
          </p>
          <p className="font-medium text-lg  md:text-3xl animate-fade-in opacity-0">
            Hybrid
          </p>
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
