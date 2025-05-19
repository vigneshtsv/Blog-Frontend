import React, { useState } from 'react';
import { Search, Menu, X, User } from 'lucide-react';

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search functionality here
  };

  return (
    <nav className="bg-white shadow-md pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Company Logo/Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">BlogApp</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
            {/* Search Box */}
            <div className="max-w-lg w-full lg:max-w-xs">
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search posts..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>

            {/* Navigation Links */}
            <div className="ml-6 flex items-center space-x-4">
              <a href="/home" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Blog
              </a>
              <a href="/footer" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Login
              </a>
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center cursor-pointer">
                  <User className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search posts..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            
            {/* Mobile Navigation Links */}
            <a href="/home" className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </a>
            <a href="footer" className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/" className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
              Login
            </a>
            
            {/* Mobile Profile */}
            <div className="flex items-center px-3 py-2">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="h-5 w-5 text-indigo-600" />
              </div>
              <span className="ml-3 text-base font-medium text-gray-600">Profile</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;