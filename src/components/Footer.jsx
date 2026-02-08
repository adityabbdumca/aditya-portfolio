import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">Aditya Gautam</span>
              </div>
              <p className="text-gray-400">
                1+ years experienced Frontend Developer specializing in
                React.js, TypeScript, and modern web technologies, delivering
                scalable, production-ready applications with optimized
                performance, reusable components, and clean architecture.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Skills", "Experience", "Projects", "Education"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400" />
                  <span className="text-gray-400">
                    adityagautam3112@gmail.com
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-green-400" />
                  <span className="text-gray-400">+91 8604507261</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span className="text-gray-400">Noida, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/adityabbdumca"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-gautam-711594234/"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:adityagautam3112@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Aditya Gautam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
