import React from "react";
import Image from "next/image";
import secgen2026 from "@/assets/secgen-2026.png";

function WelcomingRemarks() {
  return (
    <section className="w-full flex flex-col items-center justify-start gap-8">
      <main className="relative flex flex-col items-center justify-start w-full pt-5 md:pt-10">

        <div className="absolute inset-0 z-0 pointer-events-none" />

        <div className="relative w-full h-auto max-sm:mt-[-25px] z-10">
          <div className="relative w-full h-auto bg-white/50 rounded-4xl flex flex-col pt-3 px-13 pb-5 max-md:px-6 scale-90">
            <Image
              src="/bunga-kanan-atas.png"
              alt="logo"
              width={920}
              height={863}
              className="absolute w-[15.625vw] aspect-[863/960] top-[-6vw] left-[-3vw] rotate-90 -scale-y-100"
              priority
              unoptimized
            />

            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 mt-6 lg:mt-2">
              <div className="flex-1 order-2 lg:order-1">
                <h1 className="text-[55px] max-md:text-[40px] md:mb-[-10px] font-bold text-biru-3 font-bodoni">
                  Secretary General Remarks
                </h1>
                <p className="text-[20px] max-md:text-[14px] text-justify font-light text-biru-3 font-montserrat leading-tight pr-5">
                  Dearest future delegates,
                  <br /><br />
                  It is with my greatest honor to present to you Jakarta International Model United Nations’ 16th conference. With 100+ hardworking committee members, 12 councils, and rooms ready to hold delegates and chairs with a drive for diplomacy, our conference this year highlights the path to tranquility, and our quest to restore it and take action in the present.
                  <br /><br />
                  Through our grand theme, we open a space for all students interested in diplomacy to start that path towards restoring the blueprint. Through councils that discuss artist autonomy, ownership of culture, and digital privacy, JMUN 2026 opens doorways for beginner to advanced delegates alike to take part in that restoration.
                  <br /><br />
                  Upholding our prestige and outstanding quality, this year’s conference is set to be done better than ever. And with great pride, and on behalf of my committee, we are ready to prepare that stage.
                  <br /><br />
                  Best Regards,
                  <br />
                  Flicka Miracle Simarmata
                </p>
              </div>
              <div className="w-[80%] lg:w-[280px] xl:w-[300px] shrink-0 order-1 lg:order-2">
                <Image
                  src={secgen2026}
                  alt="Secretary General"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default WelcomingRemarks;
