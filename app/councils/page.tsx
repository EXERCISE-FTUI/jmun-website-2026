import React from "react";
import { councils } from "@/data/council";
import CouncilCard from "../components/councils/CouncilCard";
import HomeBackground from "@/assets/HomeBackground.png";
import { changeDelimiter } from "@/utils";
import ContactUs from "../components/about/ContactUs";
import Image from "next/image";

function CouncilsPage() {
  const onlineCouncils = councils.filter(
    (council) => council.location === "online"
  );
  const offlineCouncils = councils.filter(
    (council) => council.location === "offline"
  );
  return (
    <section className="w-full min-h-screen relative overflow-y-scroll no-scrollbar">
      <div className="flex flex-col w-full px-8 lg:px-20 max-md:px-3 pt-16 md:pt-24 gap-4 bg-gradient-to-b from-[#A6DBAB] to-[#045A77] opacity-0 animate-fade-in no-scrollbar">
        <h1 className="text-biru-3 z-10 font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta pb-6 max-md:mb-2 mb-16 border-b-2 border-b-biru-3">
          Councils
        </h1>
        <div className="fixed inset-0 z-0" aria-hidden="true">
          <Image
            src={HomeBackground}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b z-0 from-transparent via-transparent to-[#0f7f98]/45" />
        </div>

        {/* Offline Councils Section */}
        <div className="z-10">
          <h2 className="text-biru-3 z-50 font-bold text-3xl md:text-5xl text-center font-plus-jakarta pb-4 max-md:mb-2 mb-8">
            Offline Councils
          </h2>
          {offlineCouncils.map((council, index) => {
            return (
              <React.Fragment key={council.organization}>
                <div
                  className="h-28 w-full"
                  id={changeDelimiter(council.organization.toLowerCase())}
                />
                <CouncilCard
                  key={council.organization}
                  council={council}
                  nextOrganization={
                    index < offlineCouncils.length - 1
                      ? offlineCouncils[index + 1].organization
                      : undefined
                  }
                />
              </React.Fragment>
            );
          })}
        </div>

        {/* Online Councils Section */}
        <div className="mb-12 mt-30 max-md:mt-20 max-md:mb-0 z-10">
          <h2 className="text-biru-3 z-10 font-bold text-3xl md:text-5xl text-center font-plus-jakarta pb-4 max-md:mb-0 mb-8">
            Online Councils
          </h2>
          {onlineCouncils.map((council, index) => {
            return (
              <React.Fragment key={council.organization}>
                <div
                  className="h-28 w-full"
                  id={changeDelimiter(council.organization.toLowerCase())}
                />
                <CouncilCard
                  key={council.organization}
                  council={council}
                  nextOrganization={
                    index < onlineCouncils.length - 1
                      ? onlineCouncils[index + 1].organization
                      : undefined
                  }
                />
              </React.Fragment>
            );
          })}
        </div>

        <div className="border-b-2 border-white"></div>
        <ContactUs />
      </div>
    </section>
  );
}

export default CouncilsPage;
