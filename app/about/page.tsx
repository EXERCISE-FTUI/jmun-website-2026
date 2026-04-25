import React from "react";
import ContactUs from "../components/about/ContactUs";
import Image from "next/image";
import HomeBackground from "@/assets/HomeBackground.png";

function AboutPage() {
  return (
    <main className="relative flex flex-col items-center justify-start w-full bg-gradient-to-b from-[#A6DBAB] to-[#045A77] min-h-screen pt-28 md:pt-33">

      <div className="absolute opacity-50 left-[-13vw] top-[-13vw] z-10">
        <Image
          src="/bunga-kiri-atas.png"
          alt="logo"
          width={1783}
          height={2072}
          className="w-[68.292vw] aspect-[1783/2072]"
          priority
          unoptimized
        />
      </div>

      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Image
          src={HomeBackground}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f7f98]/45" />
      </div>

      <div className="relative w-full h-auto md:px-15 max-sm:mt-[-25px] z-10">
        <div className="relative w-full h-auto bg-biru-1/65 rounded-4xl flex flex-col pt-3 px-12 pb-5 max-md:px-6 scale-90">
          <Image
            src="/bunga-kanan-atas.png"
            alt="logo"
            width={920}
            height={863}
            className="absolute w-[15.625vw] aspect-[863/960] top-[-4vw] right-[-3vw] rotate-90"
            priority
            unoptimized
          />

          <h1 className="text-[68px] max-md:text-[40px] md:mb-[-10px] font-bold text-biru-3 font-bodoni">
            About JMUN
          </h1>
          <p className="text-[20px] max-md:text-[13px] text-justify font-light text-biru-3 font-montserrat">
            Jakarta International Model United Nations stands as one of the most prestigious international Model United Nations (MUN) events hosted in Jakarta, Indonesia's vibrant capital. As the conference enters its 16th annual edition, Jakarta International Model United Nations continues to uphold its commitment to academic excellence, extending beyond traditional learning to provide opportunities for skill-building, networking, and personal growth for all participants. At Jakarta International Model United Nations, delegates representing assigned countries engage in debates on pressing global issues, mirroring the structure and essence of a United Nations (UN) conference. Through active participation in discussions, delegates will gain valuable insights into the workings of the UN while collaboratively striving to develop
            resolutions for critical global issues.
          </p>

          <h1 className="text-[68px] max-md:text-[40px] text-right w-full font-bold text-biru-3 font-bodoni md:mt-[-10px] md:mb-[-10px]">
            Grand Theme
          </h1>
          <p className="text-[20px] max-md:text-[13px] text-justify font-light text-biru-3 font-montserrat z-10">
            Jakarta International Model United Nations (JMUN) 2026 reinforce the theme <span className="font-extrabold">Restoring the Path to Tranquility: Reconstructing the Blueprint of Peace and Justice Within the Global Architecture</span>.This theme highlights the urgency of taking action in the present amid overlapping and ongoing crises, rather than focusing solely on future plans. Reconstructing the blueprint is one of the approaches to bring harmony to light and to reach global peace and justice starting with the actions taken today.
          </p>
          <h1 className="text-[42px] max-md:text-[30px] text-center font-bold text-biru-3 font-bodoni italic z-10">
            #RestoringThePath
          </h1>
        </div>
      </div>

      <ContactUs />
    </main>
  );
}

export default AboutPage;
