"use client";

import React from "react";
import { ImageCarousel } from "./Carousel";
import firstPhoto from "@/assets/carousel2026-photos/carousel1.png";
import secondPhoto from "@/assets/carousel2026-photos/carousel2.png";
import thirdPhoto from "@/assets/carousel2026-photos/carousel3.png";
import fourthPhoto from "@/assets/carousel2026-photos/carousel4.png";
import fifthPhoto from "@/assets/carousel2026-photos/carousel5.png";
import sixthPhoto from "@/assets/carousel2026-photos/carousel6.png";
import seventhPhoto from "@/assets/carousel2026-photos/carousel7.png";
import eightPhoto from "@/assets/carousel2026-photos/carousel8.png";

const carouselPhotos = [
  firstPhoto,
  secondPhoto,
  thirdPhoto,
  fourthPhoto,
  fifthPhoto,
  sixthPhoto,
  seventhPhoto,
  eightPhoto,
];

function GallerySection() {
  return (
    <section className="w-full flex flex-col items-start justify-start px-20 py-10 gap-6">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8 px-8">
        <h2 className="font-bodoni font-bold text-5xl md:text-7xl text-biru-3">
          Past JMUN
        </h2>
        <p className="font-montserrat italic text-base md:text-xl text-biru-3">
          See the excitement of the previous JMUN series of events
        </p>
      </div>
      <ImageCarousel
        images={carouselPhotos.map(({ src }) => {
          return { src, alt: "" };
        })}
      />
    </section>
  );
}

export default GallerySection;
