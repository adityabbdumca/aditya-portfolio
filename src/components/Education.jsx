import {
  FaGraduationCap,
  FaUniversity,
  FaCalendar,
  FaAward,
  FaExternalLinkAlt,
  FaMedal,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Optimized local college logo references
const collegeLogos = {
  bbd: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTFZ-yvXf1PAJnXiUFULeZViImquDcU8mQZSChh00vA&s", // Babu Banarasi Das University logo
  prof: "/images/rjju.jpg", // Optimized local logo instead of a 40KB base64 string!
};

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Babu Banarasi Das University, Lucknow",
    shortName: "BBD University",
    duration: "2022 - 2024",
    description:
      "Advanced curriculum focused on software engineering, distributed database design, and modern frontend application development.",
    achievements: [
      "Advanced Web Technologies",
      "Software Engineering",
      "Database Management",
      "Project Development",
    ],
    color: "from-indigo-500 to-purple-600",
    logo: collegeLogos.bbd,
    website: "https://bbdu.ac.in",
    location: "Lucknow, Uttar Pradesh",
    highlights: [
      "Completed major project in React.js & Node.js.",
      "Successfully coordinated hackathons & tech events.",
      "Graduated with top academic placement.",
    ],
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj",
    shortName: "Prof. Rajendra Singh University",
    duration: "2019 - 2022",
    description:
      "Core computing foundations, programming algorithms, data structures, and standard web engineering principles.",
    achievements: [
      "Programming Fundamentals",
      "Data Structures",
      "Computer Networks",
      "Web Development",
    ],
    color: "from-emerald-500 to-teal-600",
    logo: collegeLogos.prof,
    website: "https://prsuniv.ac.in/",
    location: "Prayagraj, Uttar Pradesh",
    highlights: [
      "Class representative for two consecutive years.",
      "Organized technology and algorithm workshops.",
      "Graduated in the top 10% of the BCA cohort.",
    ],
  },
];

const Education = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  };

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Educational <span className="gradient-text animate-gradient">Background</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Strong academic credentials in computer sciences with industry-backed practical engineering experience.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                {/* Institution & Header Logo */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-14 h-14 bg-slate-950 p-2 rounded-2xl border border-slate-900 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={edu.logo}
                        alt={`${edu.shortName} logo`}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center">
                              <FaUniversity class="text-2xl text-indigo-400" />
                            </div>`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1.5">
                        <span className="text-sm font-semibold text-slate-400 leading-none">
                          {edu.shortName}
                        </span>
                        {edu.website && (
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-450 hover:text-indigo-350 transition-colors"
                          >
                            <FaExternalLinkAlt size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Calendar Duration */}
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-950/80 border border-slate-900 rounded-xl w-max self-start sm:self-auto">
                    <FaCalendar className="text-slate-500 text-xs" />
                    <span className="text-xs font-bold text-slate-300">{edu.duration}</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="mb-6 text-left">
                  <div className="flex items-center text-slate-400 text-xs font-semibold mb-3">
                    <svg className="w-3.5 h-3.5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-slate-350 text-sm leading-relaxed mb-4 font-medium">
                    {edu.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-xs font-medium text-slate-400">
                        <FaMedal className="text-amber-400 mr-2.5 text-xs flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Focus Tags */}
              <div className="border-t border-slate-900/60 pt-5 mt-4 text-left">
                <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <FaAward className="text-indigo-400" />
                  Key Academic Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 bg-slate-950/60 border border-slate-900/60 text-slate-300 rounded-xl text-xs font-bold transition-all duration-300 hover:border-slate-800"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Statistics cockpit section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-900/40 to-slate-950/40 backdrop-blur-md rounded-3xl p-8 border border-slate-800/80 shadow-[0_15px_50px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          
          <div className="relative grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
            {[
              {
                label: "Master's Degree",
                value: "MCA",
                sub: "Computer Applications",
                color: "from-indigo-400 to-purple-400",
              },
              {
                label: "Bachelor's Degree",
                value: "BCA",
                sub: "Computer Applications",
                color: "from-emerald-400 to-teal-400",
              },
              {
                label: "Verified Work Experience",
                value: "1+ Years",
                sub: "Frontend React JS Development",
                color: "from-pink-400 to-rose-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center pt-6 md:pt-0 first:pt-0 md:px-4"
              >
                <div className={`text-4xl md:text-5xl font-extrabold mb-1.5 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight`}>
                  {stat.value}
                </div>
                <p className="text-sm font-bold text-slate-300 mb-0.5">{stat.label}</p>
                <p className="text-xs text-slate-500 font-semibold">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Floaters for decoration */}
          <div className="absolute top-4 right-4 opacity-[0.03] text-white">
            <FaGraduationCap size={72} />
          </div>
          <div className="absolute bottom-4 left-4 opacity-[0.03] text-white">
            <FaUniversity size={72} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
