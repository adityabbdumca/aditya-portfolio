import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaFigma, FaServer, FaMobileAlt } from "react-icons/fa";

const skills = [
  {
    category: "Frontend Technologies",
    icon: <SiReact className="text-blue-500 text-2xl" />,
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
    icon: <SiRedux className="text-purple-500 text-2xl" />,
    skills: ["Redux Toolkit", "Zustand", "TanStack Query"],
  },
  {
    category: "UI Libraries",
    icon: <SiTailwindcss className="text-teal-500 text-2xl" />,
    skills: ["Material UI", "Tailwind CSS", "Bootstrap", "Styled Components"],
  },
  {
    category: "Tools & Practices",
    icon: <SiGit className="text-orange-500 text-2xl" />,
    skills: ["Git/GitHub", "VS Code", "Vite", "npm", "Responsive Design"],
  },
  {
    category: "Methodologies",
    icon: <FaServer className="text-green-500 text-2xl" />,
    skills: [
      "Agile Development",
      "Component Reusability",
      "Performance Optimization",
    ],
  },
  {
    category: "API Integration",
    icon: <FaMobileAlt className="text-red-500 text-2xl" />,
    skills: ["REST APIs", "Axios", "React Hook Form", "Yup Validation"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks with focus on
            building scalable and maintainable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-bold text-gray-800">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20%</div>
              <p className="text-blue-100">Reduced Development Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Project Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Components Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
