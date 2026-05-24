import { FaDownload, FaArrowRight, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/adityaNCV.pdf";
    link.download = "Aditya_Gautam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="home" className="section-padding min-h-[90vh] flex items-center pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Introduction & Texts */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status Indicator */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2.5 mb-6 bg-emerald-950/30 border border-emerald-500/20 px-4 py-2 rounded-full w-max">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block text-white">Frontend</span>
              <span className="gradient-text tracking-wide animate-gradient">Developer</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
              1+ year experienced React JS Developer specializing in React.js 18, 
              TypeScript, Next.js, and modern web architectures. Passionate about 
              crafting hyper-responsive, high-performance UI systems with clean, production-ready code.
            </motion.p>

            {/* Action Buttons Group */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] transition-all duration-300 flex items-center space-x-2.5 group cursor-pointer"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>

              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 border border-slate-800 hover:border-indigo-500/50 bg-slate-950/60 hover:bg-indigo-950/20 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center space-x-2.5 group cursor-pointer"
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Micro Tech Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center border-t border-slate-900 pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Stack</span>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", icon: <SiReact className="text-indigo-400" /> },
                  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
                  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
                ].map((stack) => (
                  <div 
                    key={stack.name} 
                    className="flex items-center space-x-2 px-3.5 py-2 bg-slate-950/80 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors"
                  >
                    {stack.icon}
                    <span className="text-sm font-bold text-slate-300">{stack.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Technology Orbit Panel */}
          <div className="lg:col-span-5 flex items-center justify-center relative select-none">
            
            {/* Ambient Background Glowing spots */}
            <div className="absolute w-72 h-72 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
            
            {/* The Main Orbit Platform */}
            <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Outer Orbit Path & Orbiting Icons (Next.js & Redux) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 36 }}
                className="absolute w-[290px] h-[290px] md:w-[350px] md:h-[350px] rounded-full border border-slate-800/60 flex items-center justify-center"
              >
                {/* Orbiting Next.js */}
                <div className="absolute top-0 transform -translate-y-1/2 bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-white shadow-xl rotate-0 animate-pulse">
                  <SiNextdotjs size={20} />
                </div>
                {/* Orbiting Redux */}
                <div className="absolute bottom-0 transform translate-y-1/2 bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-purple-400 shadow-xl rotate-0">
                  <SiRedux size={20} />
                </div>
              </motion.div>

              {/* Inner Orbit Path & Orbiting Icons (Tailwind & TypeScript) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
                className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-slate-800/40 flex items-center justify-center"
              >
                {/* Orbiting TypeScript */}
                <div className="absolute left-0 transform -translate-x-1/2 bg-slate-950 border border-slate-800 p-2 rounded-xl text-blue-400 shadow-xl rotate-0">
                  <SiTypescript size={16} />
                </div>
                {/* Orbiting Tailwind */}
                <div className="absolute right-0 transform translate-x-1/2 bg-slate-950 border border-slate-800 p-2 rounded-xl text-cyan-400 shadow-xl rotate-0">
                  <SiTailwindcss size={16} />
                </div>
              </motion.div>

              {/* Central Glowing Portrait Module */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(99,102,241,0.25)]"
              >
                <div className="w-full h-full rounded-full bg-slate-950 p-2 relative group overflow-hidden">
                  
                  {/* Glowing mask on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-full"></div>
                  
                  <img
                    src="/images/aditya.png"
                    alt="Aditya Gautam"
                    className="w-full h-full rounded-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Floating Stat 1 (Experience) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-2 -left-4 md:-left-8 bg-slate-900/80 backdrop-blur-md border border-slate-800/80 px-4 py-2.5 rounded-2xl flex items-center space-x-2.5 shadow-2xl z-20"
              >
                <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <FaBriefcase size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Experience</span>
                  <span className="text-xs font-extrabold text-white">1+ Year</span>
                </div>
              </motion.div>

              {/* Floating Stat 2 (Location) */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 -right-4 md:-right-8 bg-slate-900/80 backdrop-blur-md border border-slate-800/80 px-4 py-2.5 rounded-2xl flex items-center space-x-2.5 shadow-2xl z-20"
              >
                <div className="p-1.5 bg-pink-500/10 rounded-lg text-pink-400">
                  <FaMapMarkerAlt size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</span>
                  <span className="text-xs font-extrabold text-white">Noida, IN</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
