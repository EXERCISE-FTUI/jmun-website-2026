import React from "react";
import bundaranHIPhoto from "@/assets/bundaran-HI-mini.webp";
import { councils } from "@/data/council";
import Image from "next/image";
import CouncilCard from "../components/councils/CouncilCard";
import { changeDelimiter } from "@/utils";

function CouncilsPage() {
  return (
    <section className="w-full h-screen relative overflow-y-scroll max-h-screen">
      <div className="fixed inset-0">
        <Image
          src={bundaranHIPhoto.src}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          priority
          quality={85}
        />
      </div>
      <div className="flex flex-col w-full px-8 lg:px-20 pt-32 md:pt-40 pb-20 gap-4 bg-black/50 opacity-0 animate-fade-in no-scrollbar">
        <div id={changeDelimiter(councils[0].organization.toLowerCase())}></div>
        <h1 className="text-white font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta pb-6 mb-16 border-b-2 border-b-white">
          Councils
        </h1>
        {councils.map((council, index) => {
          return (
            <CouncilCard
              key={council.organization}
              council={council}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              nextOrganization={
                index < councils.length - 1
                  ? councils[index + 1].organization
                  : undefined
              }
            />
          );
        })}
      </div>
    </section>
  );
}

export default CouncilsPage;
