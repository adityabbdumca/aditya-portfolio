import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
