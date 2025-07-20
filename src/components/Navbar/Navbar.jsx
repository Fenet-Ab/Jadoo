import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import dropdown from "../../assets/dropdown.png";

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'AM', label: 'Amharic' },
  { code: 'AF', label: 'Afanoromo' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const langRef = useRef();

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  return (
    <nav className="w-full relative flex items-center justify-between px-8 py-4 bg-white shadow-sm overflow-visible">
      {/* Orange background shape */}
      <div className="hidden md:block absolute right-0 -top-16 w-[320px] h-[400px] bg-orange-100 rounded-bl-[180px] z-0" style={{borderTopLeftRadius: '180px', borderBottomLeftRadius: '180px'}}></div>
      {/* Navbar Content */}
      <div className="w-full flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <p className=" font-bold text-gray-900 span-1">Jad <span className=" custom-o">o</span> <span className=" custom-o">o</span></p>
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-orange-600 cursor-pointer">Destinations</li>
          <li className="hover:text-orange-600 cursor-pointer">Hotels</li>
          <li className="hover:text-orange-600 cursor-pointer">Flights</li>
          <li className="hover:text-orange-600 cursor-pointer">Bookings</li>
        </ul>
        {/* Language Dropdown + Action Buttons */}
        <div className="hidden md:flex items-center space-x-6 mr-20">
          <button className="text-gray-700 font-medium hover:text-orange-600">Login</button>
          <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-orange-300 transition">Sign up</button>
          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              className="flex items-center px-3 py-1 rounded-md text-gray-900 font-semibold text-base focus:outline-none border border-transparent hover:border-orange-200 transition"
              onClick={() => setLangOpen((open) => !open)}
              type="button"
            >
              <span>{selectedLang.code}</span>
              <img src={dropdown} alt="dropdown" className="ml-2 w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-40 border border-gray-100">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 ${selectedLang.code === lang.code ? 'font-bold text-orange-600' : ''}`}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center z-20 ">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 w-56 bg-orange-100 rounded-xl shadow-lg flex flex-col items-start p-6 space-y-4 md:hidden z-30 animate-fade-in">
            <ul className="w-full space-y-3 text-gray-700 font-medium">
              <li className="hover:text-orange-600 cursor-pointer">Destinations</li>
              <li className="hover:text-orange-600 cursor-pointer">Hotels</li>
              <li className="hover:text-orange-600 cursor-pointer">Flights</li>
              <li className="hover:text-orange-600 cursor-pointer">Bookings</li>
            </ul>
            <button className="text-gray-700 font-medium hover:text-orange-600 w-full text-left">Login</button>
            <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-orange-300 transition w-full text-left">Sign up</button>
            {/* Mobile Language Dropdown */}
            <div className="relative w-full" ref={langRef}>
              <button
                className="flex items-center px-3 py-1 rounded-md text-gray-900 font-semibold text-base focus:outline-none border border-transparent hover:border-orange-200 transition w-full justify-between"
                onClick={() => setLangOpen((open) => !open)}
                type="button"
              >
                <span>{selectedLang.code}</span>
                <img src={dropdown} alt="dropdown" className="ml-2 w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-40 border border-gray-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 ${selectedLang.code === lang.code ? 'font-bold text-orange-600' : ''}`}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
