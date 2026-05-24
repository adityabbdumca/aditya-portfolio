import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Agent Onboarding Portal",
    company: "Prudential PLC",
    description:
      "A high-security, responsive web platform for agent recruitment, evaluation, and certification with complex multi-role dashboards.",
    technologies: [
      "React.js 18",
      "TypeScript",
      "Redux Toolkit",
      "React Hook Form",
      "Axios",
    ],
    icon: <FaReact className="text-indigo-400 text-2xl" />,
    achievements: [
      "Reduced dev cycle by 20% using reusable layouts.",
      "Engineered secure multi-tier authentication.",
      "Configured robust Redux-based form persistence.",
    ],
    color: "from-indigo-500 to-blue-500",
    shadow: "shadow-indigo-500/10 hover:border-indigo-500/30",
  },
  {
    title: "Motor Insurance Portal",
    company: "Hero Insurance",
    description:
      "A comprehensive digital portal enabling seamless vehicle policy retrieval, pricing calculations, and real-time quotation deliveries.",
    technologies: [
      "React.js 18",
      "Redux Toolkit",
      "MUI Components",
      "Bootstrap",
      "REST APIs",
    ],
    icon: <FaDatabase className="text-emerald-400 text-2xl" />,
    achievements: [
      "Synchronized policy actions with centralized state layers.",
      "Optimized load times utilizing lazy-loaded modal elements.",
      "Configured comprehensive input validations.",
    ],
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/10 hover:border-emerald-500/30",
  },
  {
    title: "Freelancer Fusion Platform",
    company: "Full Stack Platform",
    description:
      "A MERN stack networking tool matching freelancers with client contracts. Features real-time reviews and project management milestones.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: <FaNodeJs className="text-purple-400 text-2xl" />,
    achievements: [
      "Developed secure JWT session authentications.",
      "Configured dynamic review and ratings databases.",
      "Polished responsive custom dashboard profiles.",
    ],
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/10 hover:border-purple-500/30",
  },
  {
    title: "News Web Application",
    company: "Real-time News Aggregator",
    description:
      "A modern news client utilizing third-party REST engines. Provides customized category feeds, deep search indices, and offline fallbacks.",
    technologies: [
      "React.js",
      "NewsAPI",
      "Tailwind CSS",
      "Axios",
      "Context API",
    ],
    icon: <SiExpress className="text-pink-400 text-2xl" />,
    achievements: [
      "Integrated instant NewsAPI feed streams.",
      "Built dynamic, debounced search filters.",
      "Polished sleek dark mode interface layouts.",
    ],
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/10 hover:border-pink-500/30",
  },
];

const Projects = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Featured <span className="gradient-text animate-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto font-medium"
          >
            A showcase of client solutions and personal applications engineered with highly modular architectures.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-3xl overflow-hidden flex flex-col justify-between ${project.shadow}`}
            >
              
              {/* Sleek top colored border */}
              <div className={`h-[3px] bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                
                {/* Header Information */}
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-900/60">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                          {project.company}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-2">
                      <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-slate-950/80 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
                      >
                        <FaGithub size={16} />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-slate-950/80 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
                      >
                        <FaExternalLinkAlt size={14} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project description */}
                  <p className="text-slate-350 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 bg-slate-950/60 border border-slate-900/60 text-slate-300 rounded-xl text-xs font-bold tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="border-t border-slate-900/60 pt-5 mt-auto">
                  <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-2.5">
                    {project.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-medium text-slate-400 flex items-start leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects button */}
        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2.5 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:shadow-[0_0_35px_rgba(99,102,241,0.4)] transition-all cursor-pointer"
          >
            <span>View All Projects</span>
            <FaExternalLinkAlt size={12} />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
