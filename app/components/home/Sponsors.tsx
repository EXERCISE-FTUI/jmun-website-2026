import React from "react";
import Image, { StaticImageData } from "next/image";

import globy from "@/assets/sponsors-and-medpars/globy.png";

// Mock sponsor data - in a real application, this would likely come from a data file or API
const sponsors = [
  {
    name: "Globy",
    logo: globy, // You'll need to add actual sponsor logo images
    tier: "Platinum",
  },
] as SponsorLogoProps[];

interface SponsorLogoProps {
  name: string;
  logo?: StaticImageData;
  tier: string;
}

function SponsorLogo({ name, logo, tier }: SponsorLogoProps) {
  // Set dimensions based on tier
  const dimensions = {
    Platinum: { container: "h-48", image: "h-40 w-40" },
    Gold: { container: "h-40", image: "h-32 w-32" },
    Silver: { container: "h-36", image: "h-28 w-28" },
    Bronze: { container: "h-32", image: "h-24 w-24" },
  };

  const { container, image } =
    dimensions[tier as keyof typeof dimensions] || dimensions.Bronze;

  return (
    <div
      className={`p-4 rounded-lg flex items-center justify-center ${container}`}
    >
      <div className={`relative ${image}`}>
        {/* Use a fallback div with the name if no logo is provided */}
        {!logo ? (
          <div className="absolute inset-0 flex items-center justify-center text-center font-bold text-gray-400">
            {name}
          </div>
        ) : (
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
            priority={tier === "Platinum"}
          />
        )}
      </div>
    </div>
  );
}

function Sponsors() {
  return (
    <section className="w-full bg-gradient-to-b from-red-bright to-pink-dark flex flex-col items-center justify-start py-12 px-10">
      <h2 className="font-plus-jakarta font-extrabold text-3xl md:text-5xl text-white drop-shadow-2xl text-center mb-8">
        Our Sponsors
      </h2>

      <div className="container py-4 w-full">
        {/* <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
          Platinum Partners
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sponsors
            .filter((s) => s.tier === "Platinum")
            .map((sponsor, index) => (
              <SponsorLogo
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                tier="Platinum"
              />
            ))}
        </div>

        {/* <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
          Gold Partners
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {sponsors
            .filter((s) => s.tier === "Gold")
            .map((sponsor, index) => (
              <SponsorLogo
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                tier="Gold"
              />
            ))}
        </div>

        {/* <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
          Silver Partners
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {sponsors
            .filter((s) => s.tier === "Silver")
            .map((sponsor, index) => (
              <SponsorLogo
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                tier="Silver"
              />
            ))}
        </div>

        {/* <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
          Bronze Partners
        </h3> */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sponsors
            .filter((s) => s.tier === "Bronze")
            .map((sponsor, index) => (
              <SponsorLogo
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                tier="Bronze"
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
