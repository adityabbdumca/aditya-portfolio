import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    company: "FYN TUNE SOLUTION PVT LTD",
    position: "React JS Developer",
    duration: "Apr 2024 - Nov 2025",
    location: "Navi Mumbai",
    description:
      "Worked as a React JS Developer at Fyn Tune Solution Private Limited from 28th April 2024 to 1st November 2025.",
    achievements: [
      "Received appreciation from reporting managers for dedication and sincerity",
      "Demonstrated excellent job performance throughout tenure",
      "Made enthusiastic contributions to team projects",
    ],
    projects: [
      {
        name: "Agent Onboarding Portal | Prudential PLC",
        points: [
          "Developed responsive web platform for agent recruitment and certification using React.js 18 and TypeScript",
          "Implemented multi-role authentication and role-based dashboards",
          "Managed application state using Redux Toolkit for optimal performance",
          "Built reusable form components with React Hook Form and Yup validation",
          "Integrated REST APIs with Axios and enhanced UX with React Toastify",
          "Reduced development time by 20% through component reusability",
        ],
      },
      {
        name: "Motor Insurance Portal | Hero Insurance",
        points: [
          "Engineered insurance portal for vehicle policy management using React.js 18",
          "Developed proposal and quotation forms with comprehensive validation",
          "Implemented centralized state management using Redux Toolkit",
          "Integrated RESTful APIs for secure data fetching and submission",
          "Enhanced UI/UX with MUI and Bootstrap components",
          "Improved user experience with loading skeletons and toast notifications",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proven track record of delivering high-quality web applications with
            modern technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div
                className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`md:w-5/12 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} ml-6 md:ml-0`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.company}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full">
                        {exp.position}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="mb-4 last:mb-0">
                        <h4 className="font-bold text-gray-800 mb-2">
                          {project.name}
                        </h4>
                        <ul className="space-y-1">
                          {project.points.map((point, pointIdx) => (
                            <li
                              key={pointIdx}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-blue-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Experience Letter Verified
              </h3>
              <p className="text-gray-600">
                Successfully completed tenure at Fyn Tune Solution Private
                Limited with excellent performance and dedication. Received
                formal experience letter dated 6th January 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
