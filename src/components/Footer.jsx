import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLifeRing,
} from "react-icons/fa";
import { HiHome, HiInformationCircle, HiUsers } from "react-icons/hi";
import { GiSparkles } from "react-icons/gi";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home", icon: <HiHome className="text-lg" /> },
    { path: "/about", label: "About", icon: <HiInformationCircle className="text-lg" /> },
    { path: "/allGroups", label: "All Groups", icon: <HiUsers className="text-lg" /> },
    { path: "/contactPage", label: "Contact", icon: <FaPhoneAlt className="text-lg" /> },
    { path: "/SupportPage", label: "Support", icon: <FaLifeRing className="text-lg" /> },
  ];

  return (
    <>
      {/* Optional Decorative Top Wave Divider */}
      <div className="relative">
        <svg className="absolute -top-10 w-full" viewBox="0 0 1440 320">
          <path
            fill="#0D1117" // Primary background
            fillOpacity="1"
            d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,160C560,160,640,192,720,197.3C800,203,880,181,960,170.7C1040,160,1120,160,1200,165.3C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer className="relative z-10 bg-primary text-secondary px-8 py-16 shadow-2xl rounded-t-3xl border-t-4 border-accent max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo & Tagline */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/earth-svgrepo-com.svg"
                alt="Earth Logo"
                className="w-10 h-10"
              />
              <h2 className="text-3xl font-extrabold tracking-widest text-accent flex items-center gap-2">
                HobbyHub <GiSparkles className="text-accent text-2xl inline" />
              </h2>
            </div>
            <p className="text-secondary font-light max-w-sm leading-relaxed">
              Discover your passion, build friendships, and make your mark in local hobby groups that bring joy and creativity into everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b-2 border-accent pb-2 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base font-medium">
              {quickLinks.map(({ path, label, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 hover:text-accent transition-all duration-200 hover:translate-x-1"
                  >
                    {icon && icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b-2 border-accent pb-2 text-accent">
              Contact Us
            </h3>
            <div className="space-y-3 text-base font-light">
              <div className="flex items-center gap-3 hover:text-accent transition duration-300">
                <FaEnvelope className="text-accent" /> support@hobbyhub.com
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition duration-300">
                <FaPhoneAlt className="text-accent" /> +880 123 456 7890
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition duration-300">
                <FaMapMarkerAlt className="text-accent" /> Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b-2 border-accent pb-2 text-accent">
              Connect with Us
            </h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://facebook.com/hobbyhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-accent hover:text-accent/80 transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-accent hover:text-accent/80 transition transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/hobbyhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-6 border-t border-accent text-center text-sm font-light tracking-wide text-secondary/70">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-accent">HobbyHub</span>. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
