import React from "react";
import ContactUs from "../components/about/ContactUs";

function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-start w-full bg-gradient-to-b from-red-bright to-pink-dark min-h-screen pt-28 md:pt-40">
      <div className="max-w-7xl px-8 flex flex-col w-full gap-6">
        <section className="flex flex-col items-center justify-start gap-4">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-soft-beige to-pink-light font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta drop-shadow-2xl">
            ABOUT JMUN Test
          </h1>
          <p className="text-white font-plus-jakarta text-justify font-medium md:text-lg">
            Jakarta Model United Nations (<strong>“JMUN”</strong>) is
            Indonesia&apos;s largest international Model United Nations (
            <strong>“MUN”</strong>) conference, which was first conducted by
            ISAFIS in Jakarta in 2011. JMUN allows members to engage in the
            difficulties of international negotiation and diplomacy.
            Participants discuss global issues in a setting that simulates the
            processes of a United Nations conference while acting as
            representatives of their assigned countries. This experience
            provides delegates with important insights into the UN&apos;s
            functioning while actively contributing to the resolution of
            critical international concerns.
          </p>
        </section>
        <section className="flex flex-col items-center justify-start gap-4">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-soft-beige to-pink-light font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta drop-shadow-2xl">
            GRAND THEME
          </h2>
          <p className="text-white font-plus-jakarta text-justify font-medium md:text-lg">
            Jakarta International Model United Nations or JMUN 2025 brings the
            fresh theme titled{" "}
            <strong>
              A Turning Point in Time: Changing the Global Status Quo to Forge a
              Unified Future.
            </strong>
            This theme is brought to people not merely from interest, but also
            with concern and clear purpose that is aligned with JMUN values.
            This theme redefines the concept of legacy, emphasizing that though
            acknowledging that heritage and history must be upheld to preserve
            cultural richness and unity, not all traditions and systems deserve
            to endure. It challenges the notion of upholding inequality,
            mistreatment, or outdated norms simply because they are
            longstanding.{" "}
          </p>
        </section>
        <section className="flex flex-col items-center justify-start gap-4">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-soft-beige to-pink-light font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta drop-shadow-2xl">
            TAGLINE
          </h2>
          <h3 className="text-transparent bg-clip-text pb-4 bg-gradient-to-b from-soft-beige to-pink-light font-extrabold text-xl md:text-4xl text-center font-plus-jakarta drop-shadow-2xl">
            - Leading the Change -
          </h3>
          <p></p>
        </section>
        <div className="border-b-2 border-white w-full"></div>
      </div>
      <ContactUs />
    </main>
  );
}

export default AboutPage;
