import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const projects = [
  {
    title: "Agent Onboarding Portal",
    company: "Prudential PLC",
    description:
      "Responsive web platform for agent recruitment and certification with multi-role authentication",
    technologies: [
      "React.js 18",
      "TypeScript",
      "Redux Toolkit",
      "React Hook Form",
      "Axios",
    ],
    icon: <FaReact className="text-blue-500 text-2xl" />,
    achievements: [
      "Reduced dev time by 20%",
      "Multi-role auth system",
      "Reusable components",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Motor Insurance Portal",
    company: "Hero Insurance",
    description:
      "Comprehensive insurance portal for vehicle policy management with real-time quotations",
    technologies: [
      "React.js 18",
      "Redux Toolkit",
      "MUI",
      "Bootstrap",
      "REST APIs",
    ],
    icon: <FaDatabase className="text-green-500 text-2xl" />,
    achievements: [
      "Centralized state management",
      "Enhanced UX",
      "Secure API integration",
    ],
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Freelancer Fusion Platform",
    description:
      "Full-stack platform connecting freelancers with clients using MERN stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: <FaNodeJs className="text-green-600 text-2xl" />,
    achievements: ["Project management", "Rating system", "Secure auth"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "News Web Application",
    description:
      "Responsive news aggregator with customizable categories and real-time updates",
    technologies: [
      "React.js",
      "NewsAPI",
      "Tailwind CSS",
      "Axios",
      "Context API",
    ],
    icon: <SiExpress className="text-gray-700 text-2xl" />,
    achievements: [
      "Real-time content",
      "Search functionality",
      "Responsive design",
    ],
    color: "from-orange-500 to-red-600",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and applications built with modern
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${project.color.replace("to", "to/20").replace("from", "from/10")}`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {project.title}
                      </h3>
                      {project.company && (
                        <p className="text-sm text-gray-500">
                          {project.company}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <FaGithub className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <FaExternalLinkAlt className="text-gray-600" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all font-medium"
          >
            <span>View All Projects</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
