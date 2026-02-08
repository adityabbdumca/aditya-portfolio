import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        scrolled ? "py-1" : "py-2"
      }`}
    >
      <nav className="section-padding py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo with animation */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="/images/aditya.png"
                alt="Aditya Gautam"
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              {/* Animated ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 group-hover:animate-ping transition-all duration-300"></div>
            </div>

            {/* Name with typing animation effect */}
            <div className="overflow-hidden">
              <span className="text-xl font-bold gradient-text inline-block">
                <span className="animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Aditya Gautam
                </span>
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 mt-1"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-blue-600 transition-colors font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                {/* Hover background effect */}
                <span className="absolute inset-0 -z-10 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></span>
              </a>
            ))}

            {/* Social icons with animations */}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
              {[
                {
                  href: "https://github.com/adityabbdumca",
                  icon: <FaGithub size={20} />,
                  color: "hover:text-gray-900",
                },
                {
                  href: "https://www.linkedin.com/in/aditya-gautam-711594234/",
                  icon: <FaLinkedin size={20} />,
                  color: "hover:text-blue-700",
                },
                {
                  href: "mailto:adityagautam3112@gmail.com",
                  icon: <FaEnvelope size={20} />,
                  color: "hover:text-red-600",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-2 text-gray-600 ${social.color} transition-all duration-300 group`}
                >
                  {social.icon}
                  {/* Floating background effect */}
                  <span className="absolute inset-0 bg-gray-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  {/* Tooltip effect */}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {index === 0
                      ? "GitHub"
                      : index === 1
                        ? "LinkedIn"
                        : "Email"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <button
            className="md:hidden relative p-2 text-gray-600 hover:text-blue-600 transition-colors group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="animate-spin-once" />
            ) : (
              <FaBars size={24} className="group-hover:animate-pulse" />
            )}
            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full bg-blue-100 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
          </button>
        </div>

        {/* Mobile Navigation with sliding animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium py-3 px-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Animated dot */}
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                {item.name}
                {/* Slide underline */}
                <span className="flex-1 h-px bg-gray-200 ml-3 group-hover:bg-blue-600 transition-colors duration-300"></span>
                {/* Arrow indicator */}
                <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-8 pt-6 animate-fade-in">
              {[
                {
                  href: "https://github.com/adityabbdumca",
                  icon: <FaGithub size={24} />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/aditya-gautam-711594234/",
                  icon: <FaLinkedin size={24} />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:adityagautam3112@gmail.com",
                  icon: <FaEnvelope size={24} />,
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 text-gray-600 hover:text-white transition-all duration-300 group"
                >
                  {social.icon}
                  {/* Background effect */}
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  {/* Label */}
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
