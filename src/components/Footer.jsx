import { Link } from 'react-router';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import {
  HiHome,
  HiInformationCircle,
  HiUsers
} from 'react-icons/hi';
import { GiSparkles } from 'react-icons/gi';

const Footer = () => {
  return (
    <>
      {/* Optional Decorative Top Wave Divider */}
      <div className="relative">
        <svg className="absolute -top-10 w-full" viewBox="0 0 1440 320">
          <path
            fill="#c7d2fe"
            fillOpacity="1"
            d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,160C560,160,640,192,720,197.3C800,203,880,181,960,170.7C1040,160,1120,160,1200,165.3C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer className="relative z-10 bg-gradient-to-tr from-indigo-100 via-sky-100 to-pink-100 text-gray-800 px-8 py-16 shadow-2xl rounded-t-3xl border-t-4 border-indigo-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo & Tagline */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-widest mb-4 text-indigo-700">
              HobbyHub <GiSparkles className="inline text-pink-500 text-2xl" />
            </h2>
            <p className="text-base font-light max-w-sm leading-relaxed text-gray-700">
              Discover your passion, build friendships, and make your mark in local hobby groups that bring joy and creativity into everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b-2 border-pink-400 pb-2 text-pink-600">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base font-medium text-gray-700">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-purple-500 transition-all duration-200 hover:translate-x-1">
                  <HiHome className="text-lg" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 hover:text-purple-500 transition-all duration-200 hover:translate-x-1">
                  <HiInformationCircle className="text-lg" /> About
                </Link>
              </li>
              <li>
                <Link to="/allGroups" className="flex items-center gap-2 hover:text-purple-500 transition-all duration-200 hover:translate-x-1">
                  <HiUsers className="text-lg" /> All Groups
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b-2 border-indigo-400 pb-2 text-indigo-600">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-700 text-base font-light">
              <div className="flex items-center gap-3 hover:text-indigo-500 transition duration-300">
                <FaEnvelope className="text-pink-500" /> support@hobbyhub.com
              </div>
              <div className="flex items-center gap-3 hover:text-indigo-500 transition duration-300">
                <FaPhoneAlt className="text-sky-500" /> +880 123 456 7890
              </div>
              <div className="flex items-center gap-3 hover:text-indigo-500 transition duration-300">
                <FaMapMarkerAlt className="text-purple-500" /> Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b-2 border-purple-400 pb-2 text-purple-600">
              Connect with Us
            </h3>
            <div className="flex gap-6 text-2xl">
              <a href="https://facebook.com/hobbyhub" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700 transition transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="https://github.com/hobbyhub" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition transform hover:scale-110">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-6 border-t border-indigo-300 text-center text-sm text-indigo-500 font-light tracking-wide">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-purple-600">HobbyHub</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
