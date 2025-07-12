import React from "react";
import registrationBg from "@/assets/Registration-page-mini.jpg";
import ContactUs from "../components/home/ContactUs";

interface RegistrationButtonProps {
  text: string;
  href: string;
}

function RegistrationButton({ text, href }: RegistrationButtonProps) {
  const baseClasses =
    "w-full px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-center block font-plus-jakarta";

  // Use a gradient background like in hover:from-pink-medium hover:to-red-mediumthe image and Header
  const gradientClasses =
    "bg-gradient-to-b from-red-medium to-pink-medium text-white shadow-lg hover:shadow-2xl";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${gradientClasses}`}
    >
      {text}
    </a>
  );
}

function RegistrationPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start">
      {/* Header Section with Background Image */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ backgroundImage: `url(${registrationBg.src})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-start justify-end font-plus-jakarta px-4 md:px-8 pb-16">
          <h1 className="text-yellow-400 text-5xl md:text-7xl font-extrabold font-plus-jakarta drop-shadow-2xl text-right">
            Registration
          </h1>
          <p className="text-white text-lg md:text-2xl font-plus-jakarta mt-2 text-right">
            Be part of the change!
          </p>
        </div>
      </div>

      {/* Registration Content Section */}
      <div className="w-full flex grow flex-col items-center justify-start bg-gradient-to-b from-red-bright to-pink-dark py-16 px-4 md:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Main Event Section */}
          <div className="rounded-2xl p-8">
            <h2
              className="text-yellow-400 text-2xl md:text-3xl font-bold text-center mb-8 font-plus-jakarta"
              style={{ textShadow: "0 0 40px #ffcf53, 0 0 80px #ffcf53" }}
            >
              Main Event
            </h2>

            <div className="bg-white p-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
              <RegistrationButton
                text="Offline Attendee"
                href="http://bit.ly/OfflineAttendeeFormJMUN2025"
              />
              <RegistrationButton
                text="Online Attendee"
                href="http://bit.ly/OnlineAttendeeFormJMUN2025"
              />
              <RegistrationButton
                text="Offline Delegation"
                href="http://bit.ly/OfflineDelegationFormJMUN2025"
              />
              <RegistrationButton
                text="Online Delegation"
                href="http://bit.ly/OnlineDelegationFormJMUN2025"
              />
            </div>
          </div>

          {/* Others Section */}
          <div className="rounded-2xl p-8">
            <h2
              className="text-yellow-400 text-2xl md:text-3xl font-bold text-center mb-8 font-plus-jakarta"
              style={{ textShadow: "0 0 40px #ffcf53, 0 0 80px #ffcf53" }}
            >
              Others
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {/* Social Packs Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
                <h3 className="text-red-dark text-xl md:text-3xl font-extrabold text-center py-2 font-plus-jakarta self-start">
                  SOCIAL PACKS
                </h3>
                <p className="text-red-dark text-sm md:text-base leading-relaxed mb-4 font-plus-jakarta">
                  JMUN social package is way for delegates to participate in a
                  variety of interesting social events in addition to the main
                  conference. This package is a call for those online delegates
                  who wishes to attend the social event, and those who solely
                  wants to engage in JMUN&apos;s socials.
                </p>
                <div className="text-right">
                  <span className="text-white text-sm font-plus-jakarta underline cursor-pointer hover:text-yellow-200 transition-colors"></span>
                </div>
                <div className="mt-4">
                  <RegistrationButton
                    text="Register Now!"
                    href="https://bit.ly/JMUN2025SocialPacksPurchaseForm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </main>
  );
}

export default RegistrationPage;
