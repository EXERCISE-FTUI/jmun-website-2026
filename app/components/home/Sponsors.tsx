import React from "react";
import Image, { StaticImageData } from "next/image";

import globy from "@/assets/sponsors-and-medpars/globy.png";
import ptsmi from "@/assets/sponsors-and-medpars/ptsmi.png";
import pegadaian from "@/assets/sponsors-and-medpars/pegadaian.png";
import lorena from "@/assets/sponsors-and-medpars/lorena.png";
import bankJakarta from "@/assets/sponsors-and-medpars/bank-jakarta.png";
import petrochina from "@/assets/sponsors-and-medpars/petrochina.png";
import pln from "@/assets/sponsors-and-medpars/pln.png";
import jamkrindo from "@/assets/sponsors-and-medpars/jamkrindo.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tiers = ["Bronze", "Silver", "Gold", "Platinum"] as const;

type Tier = (typeof tiers)[number];

// Mock sponsor data - in a real application, this would likely come from a data file or API
const sponsors = [
  {
    name: "Petrochina",
    logo: petrochina,
    tier: "Bronze",
  },
  {
    name: "Lorena",
    logo: lorena,
    tier: "Bronze",
  },
  {
    name: "Bank Jakarta",
    logo: bankJakarta,
    tier: "Bronze",
  },
  {
    name: "Globy",
    logo: globy,
    tier: "Bronze",
  },
  {
    name: "PT SMI",
    logo: ptsmi,
    tier: "Bronze",
  },
  {
    name: "Pegadaian",
    logo: pegadaian,
    tier: "Bronze",
  },
  {
    name: "PLN",
    logo: pln,
    tier: "Platinum",
  },
  {
    name: "Jamkrindo",
    logo: jamkrindo,
    tier: "Platinum",
  },
] as SponsorLogoProps[];

interface SponsorLogoProps {
  name: string;
  logo?: StaticImageData;
  tier: Tier;
}

function SponsorLogo({ name, logo, tier }: SponsorLogoProps) {
  // Set dimensions based on tier
  const dimensions: Record<Tier, { container: string; image: string }> = {
    Platinum: { container: "h-48 w-fit", image: "w-64 h-64" },
    Gold: { container: "h-40", image: "h-32 w-32" },
    Silver: { container: "h-36", image: "h-28 w-28" },
    Bronze: { container: "h-32", image: "h-24 w-24" },
  };

  const { container, image } =
    dimensions[tier as keyof typeof dimensions] || dimensions.Bronze;

  return (
    <div
      className={`p-4 rounded-lg flex items-center justify-center ${container} justify-self-center self-center`}
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
    <section className="w-full flex flex-col items-center justify-start pt-28 md:pt-33 px-10">
      <h2 className="font-bodoni font-bold text-5xl md:text-7xl text-biru-3">
        Our Sponsors
      </h2>

      <div className="container w-full flex flex-col items-center justify-center">
        {/* <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
          Platinum Partners
        </h3> */}

        {/* <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
          Gold Partners
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 justify-items-center">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
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
        <div className="flex flex-wrap justify-center gap-6 w-full">
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
      </div>
    </section>
  );
}

export default Sponsors;
