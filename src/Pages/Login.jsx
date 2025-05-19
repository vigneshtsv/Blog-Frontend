import React from 'react';
import { useState } from 'react';
import { LogIn, Eye, EyeOff, Fingerprint, Mail, Lock, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    try {
      setIsLoading(true);
      
      const response = await fetch('http://localhost:5000/api/auth/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      setSuccessMessage('Login successful!');
      navigate('/home')
      
      // Store the token in localStorage if rememberMe is checked
      if (rememberMe && data.token) {
        localStorage.setItem('authToken', data.token);
      } else if (data.token) {
        sessionStorage.setItem('authToken', data.token);
      }
      
      
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="w-full max-w-md z-10">
        {/* Card with glassmorphism effect */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white border-opacity-20">
          {/* Logo/Brand Section */}
          <div className="p-8 pb-4 text-center relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-br-full opacity-20"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-l from-blue-500 to-indigo-500 rounded-bl-full opacity-20"></div>
            
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 mb-6 shadow-lg">
              <Fingerprint className="text-white" size={36} />
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Welcome Back
            </h1>
            <p className="text-gray-300 mt-3">Sign in to access your account</p>
          </div>
          
          {/* Form Section */}
          <form onSubmit={handleLogin} className="p-6">
            <div className="space-y-6">
              {/* Success Message */}
              {successMessage && (
                <div className="bg-green-500 bg-opacity-20 border border-green-400 text-green-200 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{successMessage}</span>
                </div>
              )}
              
              {/* Error Message */}
              {error && (
                <div className="bg-red-500 bg-opacity-20 border border-red-400 text-red-200 px-4 py-3 rounded relative flex items-start">
                  <AlertTriangle className="mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span className="block">{error}</span>
                </div>
              )}
            
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="mt-1 relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full pl-10 px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500 text-white transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="mt-1 relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full pl-10 px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500 text-white pr-10 transition-all duration-300"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-indigo-600 focus:ring-indigo-500 transition-colors"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Login Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-70"
                >
                  <span className="inline-flex items-center">
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <LogIn className="mr-2" size={18} />
                    )}
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </span>
                </button>
              </div>
            </div>
            
            {/* Enhanced Sign Up Link with CTA */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?
              </p>
              <a 
                href="/signup" 
                className="mt-2 inline-block px-6 py-2 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white hover:bg-opacity-20 transition-all duration-300 text-sm font-medium"
              >
                Create an account
              </a>
            </div>
          </form>
        </div>
        
        {/* Bottom text */}
        <div className="mt-4 text-center text-gray-400 text-xs">
          © 2025 Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
}