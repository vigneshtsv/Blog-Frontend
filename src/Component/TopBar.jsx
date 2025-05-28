// import React, { useEffect, useState } from "react";
// import { Search, Menu, X, User, LogOut, Sparkles } from "lucide-react";
// import UseLogout from "./UseLogout";

// const Topbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [authentication, setAuthentication] = useState(false);
//   const [user, setUser] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const logout = UseLogout();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     // const storedUser = JSON.parse(localStorage.getItem("user"))
//     const userData = localStorage.getItem("user");
//     const user = userData ? JSON.parse(userData) : null;

//     if (user) {
//       setUser(user);
//       setAuthentication(true);
//     }
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     setAuthentication(false);
//     setUser(null);
//   };

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//     // Add your search functionality here
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//       isScrolled
//         ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20'
//         : 'bg-gradient-to-r from-indigo-50 via-white to-purple-50'
//     }`}>
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 animate-pulse"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20">
//           {/* Company Logo/Name with glow effect */}
//           <div className="flex-shrink-0 flex items-center group">
//             <div className="relative">
//               <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-ping" />
//               <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
//                 BlogApp
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
//             {/* Futuristic Search Box */}
//             <div className="max-w-lg w-full lg:max-w-xs">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
//                 <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/40 shadow-xl">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Search className="h-5 w-5 text-indigo-500" />
//                   </div>
//                   <input
//                     className="block w-full pl-12 pr-4 py-3 bg-transparent rounded-2xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent sm:text-sm font-medium"
//                     placeholder="Discover amazing posts..."
//                     type="search"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Navigation Links with hover effects */}
//             <div className="ml-8 flex items-center space-x-2">
//               <a
//                 href="/home"
//                 className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-300 group"
//               >
//                 <span className="relative z-10">Blog</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//               </a>
//               <a
//                 href="/footer"
//                 className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-300 group"
//               >
//                 <span className="relative z-10">About</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//               </a>

//               {authentication ? (
//                 <button
//                   onClick={handleLogout}
//                   className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-semibold transition-all duration-300 group flex items-center"
//                 >
//                   <LogOut className="h-4 w-4 mr-2 group-hover:animate-pulse" />
//                   <span className="relative z-10">Logout</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                 </button>
//               ) : (
//                 <a
//                   href="/login"
//                   className="relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
//                 >
//                   Login
//                 </a>
//               )}

//               {/* Futuristic Profile Picture */}
//               {authentication && (
//                 <div className="flex-shrink-0 relative group ml-4">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
//                     <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center cursor-pointer border-2 border-white/50 shadow-xl hover:scale-110 transition-transform duration-300">
//                       <User className="h-6 w-6 text-indigo-600" />
//                     </div>
//                   </div>

//                   {/* Glassmorphism dropdown */}
//                   <div className="absolute right-0 mt-4 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
//                     <div className="px-4 py-3 border-b border-gray-200/50">
//                       <p className="text-sm font-semibold text-gray-800">Welcome back!</p>
//                       <p className="text-xs text-gray-500">{user?.email}</p>
//                     </div>
//                     <a href="/profile" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50/80 transition-colors duration-200">
//                       <User className="h-4 w-4 mr-3 text-indigo-500" />
//                       Your Profile
//                     </a>
//                     <button
//                       onClick={handleLogout}
//                       className="flex items-center w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50/80 transition-colors duration-200"
//                     >
//                       <LogOut className="h-4 w-4 mr-3 text-red-500" />
//                       Sign out
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile menu button with animation */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="relative inline-flex items-center justify-center p-3 rounded-2xl text-gray-600 hover:text-indigo-600 bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//             >
//               <span className="sr-only">
//                 {isMenuOpen ? "Close menu" : "Open menu"}
//               </span>
//               <div className="relative w-6 h-6">
//                 <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
//                 <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu with slide animation */}
//       <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//         isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//       }`}>
//         <div className="bg-white/95 backdrop-blur-xl border-t border-white/40 shadow-2xl">
//           <div className="px-4 pt-4 pb-6 space-y-3">
//             {/* Mobile Search */}
//             <div className="relative group mb-6">
//               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25"></div>
//               <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-indigo-500" />
//                 </div>
//                 <input
//                   className="block w-full pl-12 pr-4 py-3 bg-transparent rounded-2xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 sm:text-sm font-medium"
//                   placeholder="Discover amazing posts..."
//                   type="search"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                 />
//               </div>
//             </div>

//             {/* Mobile Navigation Links */}
//             <a
//               href="/home"
//               className="flex items-center px-4 py-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 font-semibold transition-all duration-300 hover:scale-105"
//             >
//               Blog
//             </a>
//             <a
//               href="/footer"
//               className="flex items-center px-4 py-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 font-semibold transition-all duration-300 hover:scale-105"
//             >
//               About
//             </a>

//             {authentication ? (
//               <div className="space-y-3 pt-4 border-t border-gray-200/50">
//                 {/* Mobile Profile */}
//                 <div className="flex items-center px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50">
//                   <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center border-2 border-white shadow-lg">
//                     <User className="h-5 w-5 text-indigo-600" />
//                   </div>
//                   <div className="ml-3">
//                     <span className="text-base font-semibold text-gray-800">Profile</span>
//                     <p className="text-xs text-gray-500">{user?.email}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center w-full px-4 py-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 font-semibold transition-all duration-300 hover:scale-105"
//                 >
//                   <LogOut className="h-5 w-5 mr-3 text-red-500" />
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <a
//                 href="/login"
//                 className="block w-full text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
//               >
//                 Login
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Topbar;

import React, { useEffect, useState } from "react";
import { Search, Menu, X, User, LogOut, Sparkles } from "lucide-react";
import useLogout from "./UseLogout";
import { toast } from "react-toastify";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [authentication, setAuthentication] = useState(false);
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const logout = useLogout();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Simulating user data since localStorage isn't available
    const mockUser = localStorage.getItem("Email");
    setUser(mockUser);
    setAuthentication(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthentication(true);
    }
  }, [authentication]);

  const handleLogout = () => {
    setAuthentication(false);
    setUser(null);
    logout();
  };

  const handleSearch = () => {
    toast.success("🔍 Search updates coming soon...");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20"
            : "bg-gradient-to-r from-indigo-50 via-white to-purple-50"
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Company Logo/Name with glow effect */}
            <div className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-ping" />
                <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                  BlogApp
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
              {/* Futuristic Search Box */}
              <div className="max-w-lg w-full lg:max-w-xs">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/40 shadow-xl">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      className="block w-full pl-12 pr-4 py-3 bg-transparent rounded-2xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent sm:text-sm font-medium"
                      placeholder="Discover amazing posts..."
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Links with hover effects */}
              <div className="ml-8 flex items-center space-x-2">
                <a
                  href="/footer"
                  className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-300 group"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>

                {authentication ? (
                  <>
                    <a
                      href="/home"
                      className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-300 group"
                    >
                      <span className="relative z-10">Blog</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </a>
                    <button
                      onClick={handleLogout}
                      className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-semibold transition-all duration-300 group flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      <span className="relative z-10">Logout</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
                  </>
                ) : (
                  <a
                    href="/login"
                    className="relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
                  >
                    Login
                  </a>
                )}

                {/* Futuristic Profile Picture */}
                {authentication && (
                  <div className="flex-shrink-0 relative group ml-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center cursor-pointer border-2 border-white/50 shadow-xl hover:scale-110 transition-transform duration-300">
                        <User className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>

                    {/* Glassmorphism dropdown */}
                    <div className="absolute right-0 mt-4 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="px-4 py-3 border-b border-gray-200/50">
                        <p className="text-sm font-semibold text-gray-800">
                          Welcome back!
                        </p>
                        <p className="text-xs text-gray-500">{user}</p>
                      </div>
                      <a
                        href="#"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50/80 transition-colors duration-200"
                      >
                        <User className="h-4 w-4 mr-3 text-indigo-500" />
                        Your Profile
                      </a>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50/80 transition-colors duration-200"
                      >
                        <LogOut className="h-4 w-4 mr-3 text-red-500" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button with animation */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-3 rounded-2xl text-gray-600 hover:text-indigo-600 bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close menu" : "Open menu"}
                </span>
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMenuOpen
                        ? "opacity-0 rotate-180"
                        : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMenuOpen
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-180"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-white/40 shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Mobile Search */}
              <div className="relative group mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-indigo-500" />
                  </div>
                  <input
                    className="block w-full pl-12 pr-4 py-3 bg-transparent rounded-2xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 sm:text-sm font-medium"
                    placeholder="Discover amazing posts..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}

              {authentication ? (
                <div className="space-y-3 pt-4 border-t border-gray-200/50">
                  {/* Mobile Profile */}
                  <div>
                    <a
                      href="/home"
                      className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-300 group"
                    >
                      <span className="relative z-10">Blog</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </a>
                    <a
                      href="/footer"
                      className="flex items-center px-4 py-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 font-semibold transition-all duration-300"
                    >
                      About
                    </a>
                  </div>
                  <div className="flex items-center px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center border-2 border-white shadow-lg">
                      <User className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <span className="text-base font-semibold text-gray-800">
                        Profile
                      </span>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 font-semibold transition-all duration-300"
                  >
                    <LogOut className="h-5 w-5 mr-3 text-red-500" />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <a
                    href="/footer"
                    className="flex items-center px-4 py-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 font-semibold transition-all duration-300"
                  >
                    About
                  </a>
                  <a
                    href="/login"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Login
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
