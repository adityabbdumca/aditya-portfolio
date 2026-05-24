import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaServer, FaMobileAlt, FaBolt, FaTrophy, FaCube } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Technologies",
    icon: <SiReact className="text-indigo-400 text-3xl" />,
    color: "group-hover:border-indigo-500/40 hover:shadow-indigo-500/5",
    badgeColor: "hover:border-indigo-500/30 hover:text-indigo-300",
    skills: [
      "React.js 18",
      "JavaScript (ES6+)",
      "TypeScript",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "State Management",
    icon: <SiRedux className="text-purple-400 text-3xl" />,
    color: "group-hover:border-purple-500/40 hover:shadow-purple-500/5",
    badgeColor: "hover:border-purple-500/30 hover:text-purple-300",
    skills: ["Redux Toolkit", "Zustand", "TanStack Query"],
  },
  {
    category: "UI Libraries",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    color: "group-hover:border-cyan-500/40 hover:shadow-cyan-500/5",
    badgeColor: "hover:border-cyan-500/30 hover:text-cyan-300",
    skills: ["Material UI", "Tailwind CSS", "Bootstrap", "Styled Components"],
  },
  {
    category: "Tools & Practices",
    icon: <SiGit className="text-orange-400 text-3xl" />,
    color: "group-hover:border-orange-500/40 hover:shadow-orange-500/5",
    badgeColor: "hover:border-orange-500/30 hover:text-orange-300",
    skills: ["Git/GitHub", "VS Code", "Vite", "npm", "Responsive Design"],
  },
  {
    category: "Methodologies",
    icon: <FaServer className="text-emerald-400 text-3xl" />,
    color: "group-hover:border-emerald-500/40 hover:shadow-emerald-500/5",
    badgeColor: "hover:border-emerald-500/30 hover:text-emerald-300",
    skills: [
      "Agile Development",
      "Component Reusability",
      "Performance Optimization",
    ],
  },
  {
    category: "API Integration",
    icon: <FaMobileAlt className="text-pink-400 text-3xl" />,
    color: "group-hover:border-pink-500/40 hover:shadow-pink-500/5",
    badgeColor: "hover:border-pink-500/30 hover:text-pink-300",
    skills: ["REST APIs", "Axios", "React Hook Form", "Yup Validation"],
  },
];

const Skills = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Technical <span className="gradient-text animate-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Proficient in modern web technologies and frameworks with a special focus on
            building scalable, modular, and maintainable applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`glass-card p-7 rounded-2xl group flex flex-col justify-between ${skillGroup.color}`}
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900 group-hover:scale-110 transition-transform duration-300">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3.5 py-1.5 bg-slate-950/40 border border-slate-900 text-slate-300 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:bg-slate-950 cursor-default ${skillGroup.badgeColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Statistics cockpit section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="relative bg-gradient-to-br from-slate-900/40 to-slate-950/40 backdrop-blur-md rounded-3xl p-10 border border-slate-800/80 shadow-[0_15px_50px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          
          {/* Subtle Glows inside Stats Cockpit */}
          <div className="absolute top-[-30%] right-[-10%] w-60 h-60 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[-30%] left-[-10%] w-60 h-60 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center md:px-6 pt-6 md:pt-0 first:pt-0">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 mb-4 border border-indigo-500/15">
                <FaBolt size={22} className="animate-pulse" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">20%</span>
              </div>
              <p className="text-sm font-bold text-slate-300">Reduced Development Time</p>
              <p className="text-xs text-slate-500 mt-1 max-w-[200px]">Achieved via modular React architecture and component reusability patterns.</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center md:px-6 pt-6 md:pt-0">
              <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 mb-4 border border-emerald-500/15">
                <FaTrophy size={22} />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">100%</span>
              </div>
              <p className="text-sm font-bold text-slate-300">Project Success Rate</p>
              <p className="text-xs text-slate-500 mt-1 max-w-[200px]">Successful feature delivery on agency-client portals under tight deadlines.</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center md:px-6 pt-6 md:pt-0">
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 mb-4 border border-purple-500/15">
                <FaCube size={22} />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</span>
              </div>
              <p className="text-sm font-bold text-slate-300">Components Built</p>
              <p className="text-xs text-slate-500 mt-1 max-w-[200px]">Robust, validated forms and dashboards engineered with React & Tailwind.</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
