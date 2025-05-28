// import React from 'react';
// import { useState } from 'react';
// import { LogIn, Eye, EyeOff, Fingerprint, Mail, Lock, AlertTriangle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMessage('');

//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }

//     try {
//       setIsLoading(true);

//       const response = await fetch('https://blog-backend-lo51.onrender.com/api/auth/loginuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       setSuccessMessage('Login successful!');

//       navigate('/home')
//       console.log(response);
//       // Store the token in localStorage if rememberMe is checked
//       // if (data.rest.email) {
//       //   localStorage.setItem('authToken', data.token);
//       //   localStorage.setItem('userEmail', data.rest.email);
//       //   localStorage.setItem('user', data.rest);
//       // }

//     } catch (err) {
//       setError(err.message || 'An error occurred during login');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">

//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//         <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//       </div>

//       <div className="w-full max-w-md z-10">
//         {/* Card with glassmorphism effect */}
//         <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white border-opacity-20">
//           {/* Logo/Brand Section */}
//           <div className="p-8 pb-4 text-center relative">
//             {/* Decorative elements */}
//             <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-br-full opacity-20"></div>
//             <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-l from-blue-500 to-indigo-500 rounded-bl-full opacity-20"></div>

//             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 mb-6 shadow-lg">
//               <Fingerprint className="text-white" size={36} />
//             </div>
//             <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
//               Welcome Back
//             </h1>
//             <p className="text-gray-300 mt-3">Sign in to access your account</p>
//           </div>

//           {/* Form Section */}
//           <form onSubmit={handleLogin} className="p-6">
//             <div className="space-y-6">
//               {/* Success Message */}
//               {successMessage && (
//                 <div className="bg-green-500 bg-opacity-20 border border-green-400 text-green-200 px-4 py-3 rounded relative">
//                   <span className="block sm:inline">{successMessage}</span>
//                 </div>
//               )}

//               {/* Error Message */}
//               {error && (
//                 <div className="bg-red-500 bg-opacity-20 border border-red-400 text-red-200 px-4 py-3 rounded relative flex items-start">
//                   <AlertTriangle className="mr-2 mt-0.5 flex-shrink-0" size={18} />
//                   <span className="block">{error}</span>
//                 </div>
//               )}

//               {/* Email Field */}
//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//                   Email Address
//                 </label>
//                 <div className="mt-1 relative rounded-lg shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail size={18} className="text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="appearance-none block w-full pl-10 px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500 text-white transition-all duration-300"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div className="space-y-2">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//                   Password
//                 </label>
//                 <div className="mt-1 relative rounded-lg shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock size={18} className="text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     autoComplete="current-password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="appearance-none block w-full pl-10 px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500 text-white pr-10 transition-all duration-300"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300 transition-colors"
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={() => setRememberMe(!rememberMe)}
//                     className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-indigo-600 focus:ring-indigo-500 transition-colors"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm">
//                   <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>

//               {/* Login Button */}
//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-70"
//                 >
//                   <span className="inline-flex items-center">
//                     {isLoading ? (
//                       <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                     ) : (
//                       <LogIn className="mr-2" size={18} />
//                     )}
//                     {isLoading ? 'Signing in...' : 'Sign in'}
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Enhanced Sign Up Link with CTA */}
//             <div className="mt-8 text-center">
//               <p className="text-sm text-gray-400">
//                 Don't have an account?
//               </p>
//               <a
//                 href="/signup"
//                 className="mt-2 inline-block px-6 py-2 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white hover:bg-opacity-20 transition-all duration-300 text-sm font-medium"
//               >
//                 Create an account
//               </a>
//             </div>
//           </form>
//         </div>

//         {/* Bottom text */}
//         <div className="mt-4 text-center text-gray-400 text-xs">
//           © 2025 Your Company. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Store auth data in memory instead of localStorage
  const [authData, setAuthData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSignup = () => {
    // In a real app, this would navigate to signup page
    navigate("/signup");
    setSuccess("Redirecting to signup page...");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      // Simulate API call for demo purposes
      const response = await fetch(
        "https://blog-backend-lo51.onrender.com/api/auth/loginuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data.user);

      if (response.ok) {
        // Store data in memory instead of localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("Email", data.user.email);
        localStorage.setItem("User", data.user);
        //  localStorage.setItem('user', JSON.stringify(data.user));

        const userData = {
          token: data.token,
          userEmail: data.user.email,
          user: data.user,
        };
        setAuthData(userData);

        setSuccess("Login successful! Welcome back!");
        toast.success("Login Successfull Welcome back!");
        console.log("Stored auth data:", userData);

        // In a real app, you would redirect here
        setTimeout(() => {
          navigate("/home");
          setSuccess("Redirecting to home page...");
        }, 1500);
      } else {
        setError(
          data.message || "Login failed. Please check your credentials."
        );
      }
    } catch (err) {
      // For demo purposes, show a mock success since the API endpoint won't exist
      setError(
        "Demo mode: API endpoint not available. This would normally connect to your backend."
      );
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
    setError("");
    setSuccess("Going back...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Login Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-300">Sign in to continue your journey</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-300 text-sm backdrop-blur-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-300 text-sm backdrop-blur-sm">
                {success}
              </div>
            )}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300 cursor-pointer">
                <input type="checkbox" className="sr-only" />
                <div className="relative">
                  <div className="w-5 h-5 bg-white/10 border border-white/20 rounded-md"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-sm opacity-0 transition-opacity"></div>
                  </div>
                </div>
                <span className="ml-3">Remember me</span>
              </label>
              <button
                type="button"
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Don't have an account?{" "}
              <button
                className="text-purple-300 hover:text-purple-200 font-semibold transition-colors"
                onClick={handleSignup}
              >
                Sign up now
              </button>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="flex justify-between mt-6 p-4 bg-black/20 border border-white/10 rounded-2xl backdrop-blur-sm">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
          >
            Back
          </button>
          <button
            onClick={handleSignup}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white hover:shadow-lg transition-all duration-300"
          >
            Signup
          </button>
        </div>

        {/* Debug Info - Show stored auth data */}
        {authData && (
          <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-2xl backdrop-blur-sm">
            <p className="text-green-300 text-sm font-semibold mb-2">
              Auth Data Stored in Memory:
            </p>
            <pre className="text-green-200 text-xs overflow-auto">
              {JSON.stringify(authData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
