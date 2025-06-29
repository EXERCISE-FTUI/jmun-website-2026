"use client";

import React from "react";
import { ImageCarousel } from "./Carousel";
import firstPhoto from "@/assets/carousel-photos/DSCF0890.jpeg";
import secondPhoto from "@/assets/carousel-photos/ADS_0008.jpeg";
import thirdPhoto from "@/assets/carousel-photos/ADS_0024.jpeg";
import fourthPhoto from "@/assets/carousel-photos/DSC08049.jpeg";
import fifthPhoto from "@/assets/carousel-photos/DSC08056.jpeg";
import sixthPhoto from "@/assets/carousel-photos/DSC08756.jpeg";
import seventhPhoto from "@/assets/carousel-photos/DSC08830.jpeg";
import eightPhoto from "@/assets/carousel-photos/DSCF0133.jpeg";
import ninthPhoto from "@/assets/carousel-photos/DSCF6718.jpeg";

const carouselPhotos = [
  firstPhoto,
  secondPhoto,
  thirdPhoto,
  fourthPhoto,
  fifthPhoto,
  sixthPhoto,
  seventhPhoto,
  eightPhoto,
  ninthPhoto,
];

function GallerySection() {
  return (
    <section className="w-full bg-gradient-to-b from-pink-dark to-red-bright flex flex-col items-center justify-start px-8 lg:px-0 py-10 gap-8">
      <h2 className="font-plus-jakarta font-extrabold text-3xl md:text-5xl text-white drop-shadow-2xl text-center">
        Past JMUNs
      </h2>
      <ImageCarousel
        images={carouselPhotos.map(({ src }) => {
          return { src, alt: "" };
        })}
      />
    </section>
  );
}

export default GallerySection;
