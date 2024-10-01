import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-600 mt-10 text-white py-8">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Brand and Description */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-3xl font-bold">Our Real Estate Project</h3>
          <p className="text-gray-400 mt-2">
            Discover your next dream home with our intuitive real estate platform.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="#" className="hover:underline">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook className="text-2xl hover:text-blue-400 transition-colors duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl hover:text-blue-400 transition-colors duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-blue-400 transition-colors duration-200" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Real Estate Listings. All rights reserved.
      </div>
    </footer>
  );
}
