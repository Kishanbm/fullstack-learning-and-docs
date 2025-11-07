import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-slate-900 text-white shadow-lg relative z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <div className="text-xl font-semibold">
            Accrefin
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-300 transition duration-300">Home</a>
            <a href="#" className="hover:text-blue-300 transition duration-300">About</a>
            <a href="#" className="hover:text-blue-300 transition duration-300">Services</a>
          </div>

          {/* Hamburger Menu Button*/}
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-slate-700 transition duration-200"
              aria-label="Toggle sidebar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 bg-slate-900 text-white">
          <h2 className="text-lg font-semibold">Hi, Kishan</h2>
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-slate-700 transition duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-6">
          <div className="space-y-4">
            
            {/* Profile Section */}
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Profile</p>
                <p className="text-sm text-gray-500">Manage your account</p>
              </div>
            </div>

            {/* Settings Section */}
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Settings</p>
                <p className="text-sm text-gray-500">App preferences</p>
              </div>
            </div>

            {/* <div className="border-t pt-4 mt-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3"></h3>
              <div className="space-y-2">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-200">Profile</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-200">Settings</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-200">Services</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-200">Help</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};


export default Navbar;