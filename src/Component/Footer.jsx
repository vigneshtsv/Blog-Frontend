import React from 'react';
import { Mail, PhoneCall, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white">
      {/* Wave Separator */}
      <div className="relative h-16">
        <svg
          className="absolute bottom-0 w-full h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            transform: 'rotate(180deg)',
            fill: '#ffffff',
            width: '100%',
            height: '70px'
          }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">BlogApp</h3>
            <p className="text-gray-300 max-w-xs">
              Bringing you the latest insights, stories, and trends from across the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Contact
                </a>
              </li>
              
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-300 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  7/82 Eswaran kovil street,paramakudi
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-6 w-6 text-indigo-300 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 7373358187</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-300 mr-3 flex-shrink-0" />
                <span className="text-gray-300">vignesh@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-300 text-sm">
          <p>© {currentYear} BlogApp. All rights reserved.</p>
          <p className="mt-2">
            Designed with <b>vignesh❤️</b> for creative minds and passionate bloggers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;