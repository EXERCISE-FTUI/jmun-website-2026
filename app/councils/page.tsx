import React from "react";
import { councils } from "@/data/council";
import CouncilCard from "../components/councils/CouncilCard";
import { changeDelimiter } from "@/utils";
import ContactUs from "../components/about/ContactUs";

function CouncilsPage() {
  const onlineCouncils = councils.filter(
    (council) => council.location === "online"
  );
  const offlineCouncils = councils.filter(
    (council) => council.location === "offline"
  );
  return (
    <section className="w-full h-screen relative overflow-y-scroll max-h-screen no-scrollbar">
      <div className="flex flex-col w-full px-8 lg:px-20 pt-16 md:pt-24 gap-4 bg-gradient-to-b from-red-bright to-pink-light opacity-0 animate-fade-in no-scrollbar">
        <div id={changeDelimiter(councils[0].organization.toLowerCase())}></div>
        <h1 className="text-white font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta pb-6 mb-16 border-b-2 border-b-white">
          Councils
        </h1>

        {/* Offline Councils Section */}
        <div className="mb-12">
          <h2 className="text-white font-bold text-3xl md:text-5xl text-center font-plus-jakarta pb-4 mb-8">
            Offline Councils
          </h2>
          {offlineCouncils.map((council, index) => {
            return (
              <CouncilCard
                key={council.organization}
                council={council}
                nextOrganization={
                  index < offlineCouncils.length - 1
                    ? offlineCouncils[index + 1].organization
                    : undefined
                }
              />
            );
          })}
        </div>

        {/* Online Councils Section */}
        <div className="mb-12">
          <h2 className="text-white font-bold text-3xl md:text-5xl text-center font-plus-jakarta pb-4 mb-8">
            Online Councils
          </h2>
          {onlineCouncils.map((council, index) => {
            return (
              <CouncilCard
                key={council.organization}
                council={council}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                nextOrganization={
                  index < onlineCouncils.length - 1
                    ? onlineCouncils[index + 1].organization
                    : undefined
                }
              />
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
