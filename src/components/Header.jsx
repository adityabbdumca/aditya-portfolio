import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl rounded-2xl border transition-all duration-500 ${
        scrolled
          ? "py-2 bg-slate-950/75 border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-md shadow-indigo-500/5"
          : "py-4 bg-slate-950/40 border-white/5 backdrop-blur-md shadow-lg"
      }`}
    >
      <nav className="px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Brand/Logo Area */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:animate-pulse"></div>
              <img
                src="/images/aditya.png"
                alt="Aditya Gautam"
                className="relative w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-white/10 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-6"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent group-hover:animate-gradient">
                Aditya Gautam
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase group-hover:text-indigo-400 transition-colors">
                React Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-xl transition-colors duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-white/5 border border-white/5 rounded-xl -z-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Social Links Panel */}
          <div className="hidden md:flex items-center space-x-3 pl-4 border-l border-slate-800">
            {[
              {
                href: "https://github.com/adityabbdumca",
                icon: <FaGithub size={18} />,
                color: "hover:text-white hover:bg-slate-800/80",
                tooltip: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/aditya-gautam-711594234/",
                icon: <FaLinkedin size={18} />,
                color: "hover:text-indigo-400 hover:bg-indigo-950/40",
                tooltip: "LinkedIn",
              },
              {
                href: "mailto:adityagautam3112@gmail.com",
                icon: <FaEnvelope size={18} />,
                color: "hover:text-pink-400 hover:bg-pink-950/40",
                tooltip: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-2.5 text-slate-400 rounded-xl border border-transparent hover:border-slate-800/50 transition-all duration-300 ${social.color} group`}
              >
                {social.icon}
                {/* Custom Tooltip */}
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-800 text-[10px] text-slate-300 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                  {social.tooltip}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Action trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-indigo-400 hover:bg-slate-900/60 rounded-xl border border-transparent hover:border-slate-800/80 transition-all duration-300"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden mt-4 pt-4 border-t border-slate-900"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {navItems.map((item, index) => (
                  <motion.a
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center text-slate-300 hover:text-white p-3 rounded-xl hover:bg-slate-900/60 border border-transparent hover:border-slate-800/40 transition-all duration-300 font-semibold group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Social Action Buttons */}
                <div className="flex justify-around pt-4 border-t border-slate-900/60">
                  {[
                    {
                      href: "https://github.com/adityabbdumca",
                      icon: <FaGithub size={22} />,
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/aditya-gautam-711594234/",
                      icon: <FaLinkedin size={22} />,
                      label: "LinkedIn",
                    },
                    {
                      href: "mailto:adityagautam3112@gmail.com",
                      icon: <FaEnvelope size={22} />,
                      label: "Email",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center space-y-1 p-2 text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                    >
                      {social.icon}
                      <span className="text-[10px] font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
