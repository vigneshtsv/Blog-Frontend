// import React, { useState, useEffect } from 'react';
// import { PenTool, Star, ArrowRight, BookOpen, Edit3, Heart, MessageCircle, Share2, Coffee, Zap, Sparkles, Feather, Globe, Users } from 'lucide-react';
// import Topbar from './TopBar';
// import { useNavigate } from 'react-router-dom';

// export default function BlogPoster() {
//   const [typedText, setTypedText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const navigate = useNavigate()
//   const texts = ["Amazing Stories", "Creative Ideas", "Inspiring Content", "Your Thoughts", "Dream Projects"];

//     const handleLogin = () => {
//         navigate('/login')
//     }
//     const handleSignup = () => {
//         navigate('/signup')
//     }

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const current = texts[currentIndex];

//       if (isDeleting) {
//         setTypedText(current.substring(0, typedText.length - 1));
//       } else {
//         setTypedText(current.substring(0, typedText.length + 1));
//       }

//       if (!isDeleting && typedText === current) {
//         setTimeout(() => setIsDeleting(true), 2000);
//       } else if (isDeleting && typedText === '') {
//         setIsDeleting(false);
//         setCurrentIndex((currentIndex + 1) % texts.length);
//       }
//     }, isDeleting ? 75 : 120);

//     return () => clearTimeout(timeout);
//   }, [typedText, isDeleting, currentIndex, texts]);

//   return (
//     <>
//     <Topbar />
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Floating blog elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Enhanced floating blog cards */}
//         <div className="absolute top-24 left-12 animate-bounce">
//           <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform rotate-12 hover:rotate-6 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
//             <div className="w-20 h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse">
//             </div>
//             <div className="w-16 h-2 bg-white/50 rounded-full mb-2"></div>
//             <div className="w-12 h-1.5 bg-white/30 rounded-full"></div>
//             <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
//               <Star className="w-3 h-3 text-white" />
//             </div>
//           </div>
//         </div>

//         <div className="absolute top-48 right-16 animate-pulse">
//           <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform -rotate-12 hover:rotate-3 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
//             <div className="w-20 h-16 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse">
//             </div>
//             <div className="w-18 h-2 bg-white/50 rounded-full mb-2"></div>
//             <div className="w-14 h-1.5 bg-white/30 rounded-full"></div>
//             <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-pulse">
//               <Sparkles className="w-3 h-3 text-white" />
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-40 left-1/4 animate-bounce">
//           <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform rotate-6 hover:-rotate-6 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
//             <div className="w-20 h-16 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse">
//             </div>
//             <div className="w-14 h-2 bg-white/50 rounded-full mb-2"></div>
//             <div className="w-18 h-1.5 bg-white/30 rounded-full"></div>
//             <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center animate-spin">
//               <Feather className="w-3 h-3 text-white" />
//             </div>
//           </div>
//         </div>

//         <div className="absolute top-1/3 right-1/3 animate-pulse">
//           <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform -rotate-6 hover:rotate-12 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
//             <div className="w-20 h-16 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse">
//             </div>
//             <div className="w-16 h-2 bg-white/50 rounded-full mb-2"></div>
//             <div className="w-10 h-1.5 bg-white/30 rounded-full"></div>
//             <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center animate-bounce">
//               <Globe className="w-3 h-3 text-white" />
//             </div>
//           </div>
//         </div>

//         {/* Enhanced floating icons with animations */}
//         <div className="absolute top-1/3 left-24 animate-bounce">
//           <div className="relative">
//             <Heart className="w-10 h-10 text-pink-400/70 animate-pulse" />
//             <div className="absolute inset-0 w-10 h-10 bg-pink-400/20 rounded-full animate-ping"></div>
//           </div>
//         </div>

//         <div className="absolute top-1/2 right-40 animate-bounce delay-200">
//           <div className="relative">
//             <MessageCircle className="w-10 h-10 text-blue-400/70 animate-pulse" />
//             <div className="absolute inset-0 w-10 h-10 bg-blue-400/20 rounded-full animate-ping"></div>
//           </div>
//         </div>

//         <div className="absolute bottom-1/3 left-1/2 animate-bounce delay-500">
//           <div className="relative">
//             <Share2 className="w-10 h-10 text-purple-400/70 animate-pulse" />
//             <div className="absolute inset-0 w-10 h-10 bg-purple-400/20 rounded-full animate-ping"></div>
//           </div>
//         </div>

//         <div className="absolute top-1/4 right-1/3 animate-bounce delay-700">
//           <div className="relative">
//             <Coffee className="w-10 h-10 text-yellow-400/70 animate-pulse" />
//             <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full animate-ping"></div>
//           </div>
//         </div>

//         <div className="absolute bottom-1/2 left-1/3 animate-bounce delay-1000">
//           <div className="relative">
//             <Zap className="w-10 h-10 text-green-400/70 animate-pulse" />
//             <div className="absolute inset-0 w-10 h-10 bg-green-400/20 rounded-full animate-ping"></div>
//           </div>
//         </div>

//         {/* Floating particles with variety */}
//         {[...Array(40)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute rounded-full ${
//               i % 5 === 0 ? 'w-4 h-4 bg-purple-400/40 animate-pulse' :
//               i % 5 === 1 ? 'w-3 h-3 bg-blue-400/50 animate-bounce' :
//               i % 5 === 2 ? 'w-2 h-2 bg-pink-400/60 animate-ping' :
//               i % 5 === 3 ? 'w-3 h-3 bg-cyan-400/50 animate-pulse' :
//               'w-1 h-1 bg-emerald-400/70 animate-bounce'
//             }`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 2}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
//         {/* Enhanced Logo with complex animation */}
//         <div className="mb-12 relative group">
//           <div className="w-36 h-36 bg-gradient-to-br from-purple-400 via-pink-400 via-blue-400 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-700 group-hover:scale-110 relative overflow-hidden animate-pulse">
//             <PenTool className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-500 animate-bounce" />
//           </div>

//           {/* Orbiting elements */}
//           <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-spin">
//             <Star className="w-6 h-6 text-yellow-800 animate-pulse" />
//           </div>
//           <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center animate-bounce">
//             <Zap className="w-5 h-5 text-white" />
//           </div>
//           <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center animate-pulse">
//             <Sparkles className="w-4 h-4 text-white" />
//           </div>
//           <div className="absolute bottom-0 -right-8 w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center animate-ping">
//             <Globe className="w-4 h-4 text-white" />
//           </div>

//           {/* Pulsing rings */}
//           <div className="absolute inset-0 w-36 h-36 border-2 border-purple-400/30 rounded-3xl animate-ping"></div>
//           <div className="absolute inset-0 w-36 h-36 border border-blue-400/20 rounded-3xl animate-pulse"></div>
//         </div>

//         {/* Enhanced Main heading */}
//         <div className="mb-8">

//           <div className="h-10 mt-6">
//             <span className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
//               Share {typedText}
//               <span className="animate-pulse">|</span>
//             </span>
//           </div>
//         </div>

//         {/* Enhanced Subheading with animation */}
//         <div className="relative mb-6">
//           <p className="text-2xl md:text-3xl text-gray-300">
//             Where Stories Come to Life
//             <span className="inline-block animate-bounce ml-2">✨</span>
//             <span className="inline-block animate-bounce delay-300">🚀</span>
//             <span className="inline-block animate-bounce delay-500">💫</span>
//           </p>
//         </div>

//         {/* Enhanced Description */}
//         <p className="text-xl text-gray-400 mb-16 max-w-3xl leading-relaxed">
//           Create, share, and discover amazing stories. Join our vibrant community of writers and readers
//           who are passionate about the art of storytelling and digital creativity. Your voice matters here.
//         </p>

//         {/* Enhanced Action buttons */}
//         <div className="flex flex-col sm:flex-row gap-6 items-center mb-20">
//           <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-purple-500/50 min-w-[220px] overflow-hidden animate-pulse" onClick={handleLogin()}>
//             <span className="relative z-10 flex items-center gap-3 text-lg">
//               <Edit3 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
//               Click to Login
//               <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
//             </span>
//           </button>

//           <button className="group px-12 py-6 bg-transparent border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-500 backdrop-blur-xl min-w-[220px] hover:scale-110 relative overflow-hidden animate-pulse delay-300" onClick={handleSignup()}>
//             <span className="flex items-center gap-3 text-lg relative z-10">
//               <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
//               Click to SignUp
//               <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
//             </span>
//           </button>
//         </div>

//         {/* Enhanced Statistics */}
//         <div className="flex flex-wrap justify-center gap-8">
//           <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group relative overflow-hidden animate-pulse">
//             <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 group-hover:animate-bounce relative z-10">10K+</div>
//             <div className="text-gray-400 flex items-center gap-3 relative z-10">
//               <Edit3 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
//               <span className="text-lg">Active Writers</span>
//             </div>
//           </div>

//           <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group relative overflow-hidden animate-pulse delay-200">
//             <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 group-hover:animate-bounce relative z-10">50K+</div>
//             <div className="text-gray-400 flex items-center gap-3 relative z-10">
//               <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
//               <span className="text-lg">Stories Published</span>
//             </div>
//           </div>

//           <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group relative overflow-hidden animate-pulse delay-500">
//             <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3 group-hover:animate-bounce relative z-10">1M+</div>
//             <div className="text-gray-400 flex items-center gap-3 relative z-10">
//               <Users className="w-5 h-5 group-hover:scale-125 transition-transform duration-300 animate-bounce" />
//               <span className="text-lg">Monthly Readers</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 320" className="w-full h-40 text-white/5 animate-pulse">
//           <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>
//     </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  PenTool,
  Star,
  ArrowRight,
  BookOpen,
  Edit3,
  Heart,
  MessageCircle,
  Share2,
  Coffee,
  Zap,
  Sparkles,
  Feather,
  Globe,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Topbar from "./TopBar";

export default function BlogPoster() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const texts = [
    "Amazing Stories",
    "Creative Ideas",
    "Inspiring Content",
    "Your Thoughts",
    "Dream Projects",
  ];

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (isDeleting) {
          setTypedText(current.substring(0, typedText.length - 1));
        } else {
          setTypedText(current.substring(0, typedText.length + 1));
        }

        if (!isDeleting && typedText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && typedText === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      },
      isDeleting ? 75 : 120
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex, texts]);

  return (
    <>
      <Topbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Floating blog elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced floating blog cards */}
          <div className="absolute top-24 left-12 animate-bounce">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform rotate-12 hover:rotate-6 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
              <div className="w-20 h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse"></div>
              <div className="w-16 h-2 bg-white/50 rounded-full mb-2"></div>
              <div className="w-12 h-1.5 bg-white/30 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          <div className="absolute top-48 right-16 animate-pulse">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform -rotate-12 hover:rotate-3 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
              <div className="w-20 h-16 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse"></div>
              <div className="w-18 h-2 bg-white/50 rounded-full mb-2"></div>
              <div className="w-14 h-1.5 bg-white/30 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-40 left-1/4 animate-bounce">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform rotate-6 hover:-rotate-6 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
              <div className="w-20 h-16 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse"></div>
              <div className="w-14 h-2 bg-white/50 rounded-full mb-2"></div>
              <div className="w-18 h-1.5 bg-white/30 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center animate-spin">
                <Feather className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          <div className="absolute top-1/3 right-1/3 animate-pulse">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform -rotate-6 hover:rotate-12 hover:scale-110 transition-all duration-500 hover:bg-white/10 group">
              <div className="w-20 h-16 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 rounded-lg mb-3 relative overflow-hidden group-hover:animate-pulse"></div>
              <div className="w-16 h-2 bg-white/50 rounded-full mb-2"></div>
              <div className="w-10 h-1.5 bg-white/30 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center animate-bounce">
                <Globe className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Enhanced floating icons with animations */}
          <div className="absolute top-1/3 left-24 animate-bounce">
            <div className="relative">
              <Heart className="w-10 h-10 text-pink-400/70 animate-pulse" />
              <div className="absolute inset-0 w-10 h-10 bg-pink-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="absolute top-1/2 right-40 animate-bounce delay-200">
            <div className="relative">
              <MessageCircle className="w-10 h-10 text-blue-400/70 animate-pulse" />
              <div className="absolute inset-0 w-10 h-10 bg-blue-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="absolute bottom-1/3 left-1/2 animate-bounce delay-500">
            <div className="relative">
              <Share2 className="w-10 h-10 text-purple-400/70 animate-pulse" />
              <div className="absolute inset-0 w-10 h-10 bg-purple-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="absolute top-1/4 right-1/3 animate-bounce delay-700">
            <div className="relative">
              <Coffee className="w-10 h-10 text-yellow-400/70 animate-pulse" />
              <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="absolute bottom-1/2 left-1/3 animate-bounce delay-1000">
            <div className="relative">
              <Zap className="w-10 h-10 text-green-400/70 animate-pulse" />
              <div className="absolute inset-0 w-10 h-10 bg-green-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Floating particles with variety */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 5 === 0
                  ? "w-4 h-4 bg-purple-400/40 animate-pulse"
                  : i % 5 === 1
                  ? "w-3 h-3 bg-blue-400/50 animate-bounce"
                  : i % 5 === 2
                  ? "w-2 h-2 bg-pink-400/60 animate-ping"
                  : i % 5 === 3
                  ? "w-3 h-3 bg-cyan-400/50 animate-pulse"
                  : "w-1 h-1 bg-emerald-400/70 animate-bounce"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          {/* Enhanced Logo with complex animation */}
          <div className="mb-12 relative group">
            <div className="w-36 h-36 bg-gradient-to-br from-purple-400 via-pink-400 via-blue-400 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-700 group-hover:scale-110 relative overflow-hidden animate-pulse">
              <PenTool className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-500 animate-bounce" />
            </div>

            {/* Orbiting elements */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-spin">
              <Star className="w-6 h-6 text-yellow-800 animate-pulse" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center animate-bounce">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="absolute bottom-0 -right-8 w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center animate-ping">
              <Globe className="w-4 h-4 text-white" />
            </div>

            {/* Pulsing rings */}
            <div className="absolute inset-0 w-36 h-36 border-2 border-purple-400/30 rounded-3xl animate-ping"></div>
            <div className="absolute inset-0 w-36 h-36 border border-blue-400/20 rounded-3xl animate-pulse"></div>
          </div>

          {/* Enhanced Main heading */}
          <div className="mb-8">
            <div className="h-10 mt-6">
              <span className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                Share {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Enhanced Subheading with animation */}
          <div className="relative mb-6">
            <p className="text-2xl md:text-3xl text-gray-300">
              Where Stories Come to Life
              <span className="inline-block animate-bounce ml-2">✨</span>
              <span className="inline-block animate-bounce delay-300">🚀</span>
              <span className="inline-block animate-bounce delay-500">💫</span>
            </p>
          </div>

          {/* Enhanced Description */}
          <p className="text-xl text-gray-400 mb-16 max-w-3xl leading-relaxed">
            Create, share, and discover amazing stories. Join our vibrant
            community of writers and readers who are passionate about the art of
            storytelling and digital creativity. Your voice matters here.
          </p>

          {/* Enhanced Action buttons - FIXED HERE */}
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-20">
            <button
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-purple-500/50 min-w-[220px] overflow-hidden animate-pulse"
              onClick={handleLogin}
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                <Edit3 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
                Click to Login
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            <button
              className="group px-12 py-6 bg-transparent border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-500 backdrop-blur-xl min-w-[220px] hover:scale-110 relative overflow-hidden animate-pulse delay-300"
              onClick={handleSignup}
            >
              <span className="flex items-center gap-3 text-lg relative z-10">
                <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
                Click to SignUp
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Enhanced Statistics */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group relative overflow-hidden animate-pulse">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 group-hover:animate-bounce relative z-10">
                10K+
              </div>
              <div className="text-gray-400 flex items-center gap-3 relative z-10">
                <Edit3 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
                <span className="text-lg">Active Writers</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group relative overflow-hidden animate-pulse delay-200">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 group-hover:animate-bounce relative z-10">
                50K+
              </div>
              <div className="text-gray-400 flex items-center gap-3 relative z-10">
                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
                <span className="text-lg">Stories Published</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group relative overflow-hidden animate-pulse delay-500">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3 group-hover:animate-bounce relative z-10">
                1M+
              </div>
              <div className="text-gray-400 flex items-center gap-3 relative z-10">
                <Users className="w-5 h-5 group-hover:scale-125 transition-transform duration-300 animate-bounce" />
                <span className="text-lg">Monthly Readers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-40 text-white/5 animate-pulse"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
