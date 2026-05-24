import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02050e] border-t border-slate-900/60 relative overflow-hidden select-none">
      
      {/* Subtle bottom glows */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-padding py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Biography Column */}
            <div className="text-left">
              <h3 className="text-xl font-extrabold text-white tracking-tight mb-5">
                Aditya Gautam
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-semibold">
                React JS Developer with a Master's in Computer Applications. Expert in building 
                validated forms, structured dashboards, and scalable layouts with optimal speed standards.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="text-left">
              <h3 className="text-sm font-extrabold text-slate-500 uppercase tracking-widest mb-5">
                Navigation
              </h3>
              <ul className="space-y-3">
                {["Home", "Skills", "Experience", "Projects", "Education"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center group"
                      >
                        <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="text-left">
              <h3 className="text-sm font-extrabold text-slate-500 uppercase tracking-widest mb-5">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3.5 group">
                  <div className="p-2 bg-pink-500/10 rounded-xl border border-pink-500/15 text-pink-400 group-hover:scale-105 transition-transform duration-300">
                    <FaEnvelope size={14} />
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-semibold">
                    adityagautam3112@gmail.com
                  </span>
                </li>
                <li className="flex items-center space-x-3.5 group">
                  <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/15 text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                    <FaPhone size={14} />
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-semibold">
                    +91 8604507261
                  </span>
                </li>
                <li className="flex items-center space-x-3.5 group">
                  <div className="p-2 bg-rose-500/10 rounded-xl border border-rose-500/15 text-rose-400 group-hover:scale-105 transition-transform duration-300">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-semibold">
                    Noida, Uttar Pradesh, IN
                  </span>
                </li>
              </ul>
            </div>

            {/* Connections Panel Column */}
            <div className="text-left">
              <h3 className="text-sm font-extrabold text-slate-500 uppercase tracking-widest mb-5">
                Connect With Me
              </h3>
              <div className="flex space-x-3">
                {[
                  {
                    href: "https://github.com/adityabbdumca",
                    icon: <FaGithub size={18} />,
                    color: "hover:text-white hover:bg-slate-800 border-slate-800/80 shadow-slate-900/40",
                  },
                  {
                    href: "https://www.linkedin.com/in/aditya-gautam-711594234/",
                    icon: <FaLinkedin size={18} />,
                    color: "hover:text-indigo-400 hover:bg-indigo-950/40 border-indigo-900/20 shadow-indigo-950/20",
                  },
                  {
                    href: "mailto:adityagautam3112@gmail.com",
                    icon: <FaEnvelope size={18} />,
                    color: "hover:text-pink-400 hover:bg-pink-950/40 border-pink-900/20 shadow-pink-950/20",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 bg-slate-950 border rounded-2xl flex items-center justify-center text-slate-400 shadow-xl transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

          {/* Copyright line */}
          <div className="border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs font-semibold">
              &copy; {currentYear} Aditya Gautam. All rights reserved. Built with React & Tailwind.
            </p>
            <div className="flex space-x-6 text-xs font-semibold text-slate-500">
              <a href="#home" className="hover:text-slate-400 transition-colors">Back to Top</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
