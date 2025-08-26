import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-transparent text-white overflow-hidden">
      {/* Red glow effect */}
      {/* <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[180px] opacity-20 pointer-events-none"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand / About */}
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-wide">
              Fitness By Thimmah
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Helping you achieve your fitness goals with personalized training,
              motivation, and proven workout plans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-red-500 transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:trainer@example.com"
                  className="hover:text-red-500 transition"
                >
                  thimira9822@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+94785154351"
                  className="hover:text-red-500 transition"
                >
                  +94 78 515 4351
                </a>
              </li>
              <li>Location: Colombo, Sri Lanka</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/fitness_by_thimmah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/thimira.rullz/"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@fitnessbythimmah"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Fitness By Thimmah. All rights reserved.
          Designed & Developed by{" "}
          <a
            className="text-blue-50 font-sans italic font-semibold underline"
            href="https://www.ahamednajman.me"
            target="_blank"
          >
            Ahamed Najman
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
