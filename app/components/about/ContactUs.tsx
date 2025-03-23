import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

interface ContactUsProps {
  className?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full ${className} flex flex-col items-center justify-start px-8 lg:px-0`}
    >
      {/* City skyline banner with contact us text */}
      <div className="relative w-full overflow-hidden py-10">
        <h2
          className="font-plus-jakarta font-extrabold text-3xl md:text-5xl text-white drop-shadow-2xl text-center"
          id="contact-us-header"
        >
          Contact Us
        </h2>
      </div>

      {/* Contact information section */}
      <div className="w-full text-white">
        <div className="container mx-auto px-4">
          {/* Contact categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 mb-12 text-center font-medium text-lg font-plus-jakarta">
            <div>
              <h3 className="md:text-3xl font-extrabold mb-2 md:mb-4 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl text-lg">
                General Queries
              </h3>
              <a
                href="mailto:jakartamun@isafis.or.id"
                target="_blank"
                className="text-white text-sm md:text-base"
              >
                jakartamun@isafis.or.id
              </a>
            </div>

            <div>
              <h3 className="md:text-3xl font-extrabold mb-2 md:mb-4 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl text-lg">
                Sponsorship
              </h3>
              <a
                href="mailto:jakartamun@isafis.or.id"
                target="_blank"
                className="text-white text-sm md:text-base"
              >
                jakartamun@isafis.or.id
              </a>
            </div>

            <div>
              <h3 className="md:text-3xl font-extrabold mb-2 md:mb-4 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl text-lg">
                Media Partnership
              </h3>
              <a
                href="mailto:publicaffairs.jmun@isafis.or.id"
                target="_blank"
                className="text-white text-sm md:text-base"
              >
                publicaffairs.jmun@isafis.or.id
              </a>
            </div>
          </div>

          {/* Social media section */}
          <div className="text-center mb-12 font-plus-jakarta">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 lg:mb-4 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl">
              Social Media
            </h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.tiktok.com/@jakartamun"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTiktok className="text-4xl" />
              </a>
              <a
                href="https://www.facebook.com/jakartamun"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                href="https://twitter.com/jakartamun"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaXTwitter className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/jakartamun/"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/jakartamun/"
                target="_blank"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaInstagram className="text-4xl" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center font-plus-jakarta">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 lg:mb-4 bg-clip-text bg-gradient-to-b from-white to-soft-beige drop-shadow-2xl">
              Location
            </h3>
            <p className="max-w-2xl mx-auto font-medium text-base lg:text-lg">
              Jl. Joe Kip. Tiga No.56, RT.1/RW.3, Lenteng Agung, Kec. Jagakarsa,
              Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section - optional addition */}
      <div className="w-full text-white py-4 text-center font-plus-jakarta">
        <p>© {new Date().getFullYear()} ISAFIS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ContactUs;
