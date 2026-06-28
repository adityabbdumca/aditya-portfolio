import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { useColor } from "./context/ColorContext";

function App() {
  const { isDark } = useColor();

  return (
    <div
      className="min-h-screen text-slate-100 relative overflow-hidden font-sans selection:bg-indigo-500/30 selection:text-indigo-200"
      style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}
    >
      {/* Dynamic Ambient Neon Backdrop — visible in dark mode, subtle in light */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
        style={{ background: `rgba(var(--accent-rgb), ${isDark ? 0.1 : 0.04})` }}
      />
      <div
        className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
        style={{ background: `rgba(var(--accent-rgb), ${isDark ? 0.06 : 0.02})` }}
      />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
        style={{ background: isDark ? "rgba(16,185,129,0.05)" : "rgba(16,185,129,0.02)" }}
      />

      <Header />
      <main className="relative z-10">
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
