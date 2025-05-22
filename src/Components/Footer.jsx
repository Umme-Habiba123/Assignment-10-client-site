import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeadphonesAlt, FaKeyboard, FaDesktop } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black mt-50 text-pink-100 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
            <FaHeadphonesAlt className="text-pink-400" /> Contact Us
          </h3>
          <p>Email: <span className="hover:text-pink-300">Habibaislammim@gmail.com</span></p>
          <p>Phone: +880 1873333***</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

   
        <div>
          <h3 className="text-2xl font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
            <FaKeyboard className="text-pink-400" /> Terms & Conditions
          </h3>
          <p className="hover:text-pink-300 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-pink-300 cursor-pointer">Refund Policy</p>
          <p className="hover:text-pink-300 cursor-pointer">User Agreement</p>
        </div>

   
        <div>
          <h3 className="text-2xl font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
            <FaDesktop className="text-pink-400" /> Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-5 text-pink-300 text-2xl">
            <a href="https://www.facebook.com/mahiya.rahman.540132" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://x.com/mahiya_rehman" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://www.instagram.com/mahiya_mimu/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram /></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

 
      <div className="text-center text-pink-300 mt-10 text-sm">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-pink-400">Flexora</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
