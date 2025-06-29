import React from "react";
import secgenPhoto from "@/assets/secgen.jpg";
import Image from "next/image";

function WelcomingRemarks() {
  return (
    <section className="w-full bg-gradient-to-b from-red-bright to-pink-dark flex flex-col items-center justify-center py-10 px-12 lg:px-0 gap-8 min-h-[80vh]">
      <h2 className="font-plus-jakarta font-extrabold text-3xl md:text-5xl text-white drop-shadow-2xl text-center">
        Secretary General Remarks
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
        <div className="relative rounded-full overflow-hidden h-64 w-64 shadow-inner drop-shadow-2xl">
          {/* Sample image - replace with your own image or use as a component that accepts an image prop */}
          <Image
            src={secgenPhoto.src}
            alt="Photo of Hana Geraldine, Secretary General of Jakarta International MUN 2025"
            className="h-full w-full object-cover"
            width={256}
            height={256}
          />
        </div>
        <p className="flex flex-col gap-4 lg:max-w-1/2 font-plus-jakarta md:text-xl text-justify font-medium">
          <span className="text-justify block">
            Dear Delegates and Faculty Advisors,
          </span>
          <span className="text-justify block">
            On behalf of the secretariat and organizing committee, it is my
            greatest honor to welcome you to Jakarta International Model United
            Nations 2025, where diplomacy meets innovation and ideas shape the
            future.
          </span>
          <span className="text-justify block">
            For 15 years, JMUN has been more than just a conference—it has been
            a global platform for young leaders to redefine international
            dialogue. This year, we stand at a turning point in time, and our
            theme, “Changing the Global Status Quo to Forge a Unified Future,”
            calls on all of us to critically examine the world we live in and
            the legacies we choose to uphold.
          </span>
          <span className="text-justify block">
            Diplomacy today is no longer confined to boardrooms—it is forged in
            crisis responses, in digital spheres, and in the voices of those
            demanding change. JMUN 2025 will challenge you to go beyond
            resolutions and question what it truly means to lead. Our diverse UN
            Councils, Specialized Agencies, and Crisis Committee will push you
            to reimagine governance and craft policies that are both ambitious
            and achievable.
          </span>
          <span className="text-justify block">
            But JMUN is not just about debate—it is about building a global
            community. It is about the late-night strategy talks, the
            friendships that transcend borders, and the moments that inspire you
            to see diplomacy as a force for real change.
          </span>
          <span className="text-justify block">
            Jakarta is a city that is bold and thrives at the intersection of
            history and progress, and we hope JMUN 2025 will be a reflection of
            that—a space where the past informs the future and where bold ideas
            turn into real impact.
          </span>
          <span className="text-justify block">
            This is your moment. The world is watching. The decisions you make,
            the stances you take, and the words you choose can shape the future
            of diplomacy.
          </span>
          <span className="text-justify block">
            Are you ready? Jakarta awaits.
          </span>
        </p>
      </div>
    </section>
  );
}

export default WelcomingRemarks;
