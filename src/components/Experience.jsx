import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBriefcase,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "ITDOSE INFO",
    position: "React JS Developer",
    duration: "7 Apr 2026 - Present",
    location: "Noida, IN",
    website: "https://www.itdoseinfo.com/",
    description:
      "Developing high-performance user interfaces, optimizing layout responsiveness, and translating complex designs into modular React.js structures.",
    achievements: [
      "Integrating secure API endpoints and managing streamlined component state patterns.",
      "Optimizing application speed, core performance metrics, and responsive accessibility.",
      "Collaborating actively with cross-functional agile teams to deliver production-ready features.",
    ],
    projects: [],
  },
  {
    company: "FYN TUNE SOLUTION PVT LTD",
    position: "React JS Developer",
    duration: "Apr 2024 - Nov 2025",
    location: "Navi Mumbai, IN",
    website: "https://fyntune.com/",
    description:
      "Engineered core frontend features, customized dynamic UI architectures, and optimized application speeds at Fyn Tune Solution Private Limited.",
    achievements: [
      "Received exceptional manager recognition for sincerity and project dedication.",
      "Consistently achieved top-tier performance ratings throughout tenure.",
      "Delivered enthusiast-driven contributions to modern agile sprint teams.",
    ],
    projects: [
      {
        name: "Agent Onboarding Portal | Prudential PLC",
        points: [
          "Developed responsive web platforms for recruitment and certification using React.js 18 and TypeScript.",
          "Implemented robust role-based authentication and custom analytics dashboards.",
          "Managed modular client states using Redux Toolkit for seamless performance.",
          "Built reusable, validated forms with React Hook Form and Yup validation schemas.",
          "Integrated secure REST APIs using Axios and polished UX alerts with React Toastify.",
          "Reduced development time by 20% through smart component architecture patterns.",
        ],
      },
      {
        name: "Motor Insurance Portal | Hero Insurance",
        points: [
          "Engineered interactive policy management portals for vehicle quote retrieval.",
          "Built multi-step proposal forms with thorough inline validation mechanics.",
          "Synchronized decentralized API endpoints with Redux Toolkit middleware.",
          "Integrated complex secure RESTful services for instant quote retrieval.",
          "Styled visual UI components with highly interactive MUI components.",
          "Optimized slow network fetch indicators using elegant Skeleton screens.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Professional{" "}
            <span className="gradient-text animate-gradient">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto font-medium"
          >
            A proven history of engineering top-quality applications using
            modern libraries, modular states, and optimal speed standards.
          </motion.p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Neon vertical track */}
          <div className="absolute left-4 md:left-1/2 h-full w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 relative">
              <div
                className={`md:flex md:justify-between items-start ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center transform -translate-x-[14px] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.8)]">
                  <FaBriefcase className="text-indigo-400 text-xs" />
                </div>

                {/* Left/Right floating alignment box */}
                <div className="w-full md:w-[46%] ml-12 md:ml-0">
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className="glass-card p-6 md:p-8 rounded-3xl text-left"
                  >
                    {/* Header Area */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                          {exp.company}
                        </h3>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                            title={`Visit ${exp.company} website`}
                          >
                            <FaExternalLinkAlt
                              size={14}
                              className="inline ml-1"
                            />
                          </a>
                        )}
                      </div>
                      <span className="w-max px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold rounded-xl whitespace-nowrap uppercase tracking-wider">
                        {exp.position}
                      </span>
                    </div>

                    {/* Metadata Subheading */}
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-6 border-b border-slate-900 pb-4">
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-indigo-500" />
                        <span className="font-semibold">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-pink-500" />
                        <span className="font-semibold">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 font-medium mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="font-bold text-white text-base mb-3.5 tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-indigo-500 rounded-full"></span>
                        Key Tenure Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-sm" />
                            <span className="text-slate-300 text-sm leading-relaxed font-medium">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deep-dive Projects */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div className="space-y-6 mt-6 border-t border-slate-900/60 pt-6">
                        {exp.projects.map((project, pIndex) => (
                          <div
                            key={pIndex}
                            className="p-5 bg-slate-950/50 border border-slate-900 rounded-2xl hover:border-slate-800/80 transition-colors"
                          >
                            <h4 className="font-extrabold text-white text-base mb-3 leading-tight tracking-wide bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                              {project.name}
                            </h4>
                            <ul className="space-y-2.5">
                              {project.points.map((point, pointIdx) => (
                                <li
                                  key={pointIdx}
                                  className="text-sm text-slate-400 font-medium flex items-start leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-3.5 flex-shrink-0"></span>
                                  <span className="flex-1">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Visual empty block on wide screen for alignment */}
                <div className="hidden md:block w-[46%]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Verification status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-slate-800/60 shadow-xl max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 text-emerald-400 flex-shrink-0">
              <FaCheckCircle className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Experience Credentials Fully Verified
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Successfully concluded formal tenure at Fyn Tune Solution
                Private Limited with an exemplary rating in dedication, job
                efficiency, and client collaboration. Officially documented in
                tenure letters.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
