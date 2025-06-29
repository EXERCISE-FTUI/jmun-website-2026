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
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16">
          {/* Main Event Section */}
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-2xl">
            <h2
              className="text-yellow-400 text-2xl md:text-3xl font-bold text-center mb-8 font-plus-jakarta"
              style={{ textShadow: "0 0 40px #ffcf53, 0 0 80px #ffcf53" }}
            >
              Main Event
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          {/* Enable once they're available */}
          {/* <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-red-dark to-pink-dark text-2xl md:text-3xl font-bold text-center mb-8 font-plus-jakarta">
              Others
            </h2>

            <div className="space-y-4">
              <RegistrationButton
                text="Pre - Event (baru publish 25 May)"
                href="#"
              />
              <RegistrationButton
                text="Social Packs (baru publish 18 June)"
                href="#"
              />
            </div>
          </div> */}
        </div>
      </div>
      <ContactUs />
    </main>
  );
}

export default RegistrationPage;
