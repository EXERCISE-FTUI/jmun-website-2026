import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ContactUsProps {
  className?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full ${className} flex flex-col items-center justify-start px-8 lg:px-0 pb-10 z-10`}
    >
      {/* City skyline banner with contact us text */}
      <div className="relative w-full overflow-hidden pt-16 md:pt-20">
        <h2 className="font-bodoni font-bold text-5xl md:text-7xl text-biru-3 text-center pb-8">
          Contact Us
        </h2>
      </div>

      {/* Contact information section */}
      <div className="w-full text-white">
        <div className="container mx-auto px-4">
          {/* Contact categories */}
          <div className="flex flex-col gap-8 md:gap-8 text-center font-light font-montserrat">
            <div>
              <h3 className="md:text-5xl mb-1 md:mb-2 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl text-xl">
                General Queries
              </h3>
              <a
                href="mailto:jakartamun@gmail.com"
                target="_blank"
                className="text-white text-base md:text-2xl underline hover:text-soft-beige transition-colors duration-300"
              >
                jakartamun@gmail.com
              </a>
            </div>

            <div>
              <h3 className="md:text-5xl mb-1 md:mb-2 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl text-xl">
                Sponsorship
              </h3>
              <a
                href="mailto:jakartamun@isafis.or.id"
                target="_blank"
                className="text-white text-base md:text-2xl underline hover:text-soft-beige transition-colors duration-300"
              >
                jakartamun@isafis.or.id
              </a>
            </div>

            <div>
              <h3 className="md:text-5xl mb-1 md:mb-2 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl text-xl">
                Media Partnership
              </h3>
              <a
                href="mailto:publicaffairs.jmun@isafis.or.id"
                target="_blank"
                className="text-white text-base md:text-2xl underline hover:text-soft-beige transition-colors duration-300"
              >
                publicaffairs.jmun@isafis.or.id
              </a>
            </div>
          </div>

          {/* Social media section */}
          <div className="text-center pt-16 md:pt-20 font-plus-jakarta">
            <h2 className="font-bodoni font-bold text-5xl md:text-7xl text-biru-3 text-center pb-3">
              Social Media
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/jakartamun/"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaInstagram className="text-7xl" />
              </a>
              <a
                href="https://twitter.com/jakartamun"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaXTwitter className="text-7xl" />
              </a>
              <a
                href="https://www.tiktok.com/@jakartamun"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTiktok className="text-7xl" />
              </a>
              <a
                href="https://www.facebook.com/jakartamun"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaFacebook className="text-7xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/jakartamun/"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaLinkedin className="text-7xl" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center pt-16 md:pt-20">
            <h2 className="font-bodoni font-bold text-5xl md:text-7xl text-biru-3 text-center pb-3">
              Location
            </h2>
            <div className="mt-2 text-center text-white text-sm md:text-base font-light font-montserrat italic leading-relaxed px-4">
              <p className="mx-auto w-160 leading-tight">
                Jl. Joe Klp. Tiga No. 56, RT. 07/RW. 03, Lenteng Agung, Kec.Jagakarsa, Kota Jakarta Selatan, DKI Jakarta, 12250.
              </p>
              <p className="mt-2">
                © {new Date().getFullYear()} ISAFIS. All rights reserved
              </p>
              <p className="mx-auto mt-2 text-xs md:text-sm opacity-80">
                Developed by EXERCISE FTUI
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default ContactUs;
