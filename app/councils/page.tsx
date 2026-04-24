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
    <section className="w-full min-h-screen relative overflow-y-scroll no-scrollbar">
      <div className="flex flex-col w-full px-8 lg:px-20 pt-16 md:pt-24 gap-4 bg-gradient-to-b from-[#A6DBAB] to-[#045A77] opacity-0 animate-fade-in no-scrollbar">
        <h1 className="text-biru-3 font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta pb-6 mb-16 border-b-2 border-b-biru-3">
          Councils
        </h1>
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bg-batik.png')",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
            backgroundPosition: "top center"
          }}
        />

        {/* Offline Councils Section */}
        <div className="">
          <h2 className="text-biru-3 font-bold text-3xl md:text-5xl text-center font-plus-jakarta pb-4 mb-8">
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
        <div className="mb-12 mt-30">
          <h2 className="text-biru-1 font-bold text-3xl md:text-5xl text-center font-plus-jakarta pb-4 mb-8">
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
