import { FaDownload, FaArrowRight } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/adityaNCV.pdf";
    link.download = "Aditya_Gautam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-500">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Frontend</span>
              <span className="gradient-text">Developer</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              1+ year experienced Frontend Developer with Master's in Computer
              Applications. Expert in React.js 18, TypeScript, and modern web
              technologies. Passionate about building responsive,
              high-performance applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group hover:scale-105"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Fixed CV Download Button */}
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 border-2 cursor-pointer border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 group hover:scale-105 active:scale-95"
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <SiReact className="text-blue-500 text-xl group-hover:text-blue-600 transition-colors duration-300" />
                <span className="font-medium">React</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <SiTailwindcss className="text-teal-500 text-xl group-hover:text-teal-600 transition-colors duration-300" />
                <span className="font-medium">Tailwind</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <SiTypescript className="text-blue-600 text-xl group-hover:text-blue-700 transition-colors duration-300" />
                <span className="font-medium">TypeScript</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 animate-float">
              <div className="bg-white rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Optimized Profile Image */}
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative overflow-hidden rounded-xl w-20 h-20 md:w-30 md:h-36 border-2 border-white">
                          <img
                            src="/images/aditya.png"
                            alt="Aditya Gautam"
                            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl">
                          Aditya Gautam
                        </h3>
                        <p className="text-sm text-gray-500">
                          React JS Developer
                        </p>
                      </div>
                    </div>
                    <div className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full animate-pulse">
                      Available
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-bold">1+ Years</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-bold">Noida Uttar Pradesh</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-2">
                      Skills Highlight
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React 18",
                        "TypeScript",
                        "Next.js",
                        "Tailwind",
                        "Redux",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-all duration-300 hover:scale-105 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
