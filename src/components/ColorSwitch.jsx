import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useColor } from "../context/ColorContext";

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const PaletteIcon = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a2.5 2.5 0 002.5-2.5c0-.617-.233-1.175-.617-1.592a.25.25 0 01.192-.408H16a6 6 0 006-6c0-5.523-4.477-10-10-10z" />
    <circle cx="8.5" cy="7.5" r="1.5" fill={color} stroke="none" />
    <circle cx="13.5" cy="6.5" r="1.5" fill={color} stroke="none" />
    <circle cx="17.5" cy="10.5" r="1.5" fill={color} stroke="none" />
    <circle cx="6.5" cy="12.5" r="1.5" fill={color} stroke="none" />
  </svg>
);

const ColorSwitch = () => {
  const { accentColor, setAccentColor, ACCENT_COLORS, isDark, toggleMode } = useColor();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex items-center gap-1.5">
      {/* ── Dark / Light Mode Toggle ── */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleMode}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="relative p-2.5 rounded-xl border border-transparent transition-all duration-300"
        style={{
          color: isDark ? "#fbbf24" : "#6366f1",
          background: isDark ? "rgba(251,191,36,0.1)" : "rgba(99,102,241,0.1)",
          borderColor: isDark ? "rgba(251,191,36,0.2)" : "rgba(99,102,241,0.2)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* ── Palette Trigger Button ── */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setIsOpen((v) => !v)}
        title="Change accent color"
        className="relative p-2.5 rounded-xl border transition-all duration-300"
        style={{
          borderColor: isOpen
            ? accentColor.primary
            : "rgba(255,255,255,0.08)",
          background: isOpen ? `${accentColor.primary}18` : "transparent",
        }}
      >
        <span
          className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isOpen ? 1 : 0,
            boxShadow: `0 0 12px 2px ${accentColor.glow}`,
          }}
        />
        <PaletteIcon color={accentColor.light} />
      </motion.button>

      {/* ── Dropdown Palette ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -8 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="absolute right-0 top-full mt-3 z-50"
            style={{ minWidth: "200px" }}
          >
            <div
              className="rounded-2xl p-3 border shadow-2xl"
              style={{
                background: isDark
                  ? "rgba(15,23,42,0.92)"
                  : "rgba(255,255,255,0.95)",
                borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                backdropFilter: "blur(24px)",
                boxShadow: isDark
                  ? `0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)`
                  : `0 20px 50px rgba(0,0,0,0.12)`,
              }}
            >
              {/* Header label */}
              <p
                className="text-[10px] font-bold uppercase tracking-widest px-1 pb-2 mb-1"
                style={{
                  color: isDark ? "#475569" : "#94a3b8",
                  borderBottom: isDark
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                Accent Color
              </p>

              {/* Swatches Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {ACCENT_COLORS.map((color) => {
                  const isActive = accentColor.id === color.id;
                  return (
                    <motion.button
                      key={color.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => {
                        setAccentColor(color);
                        setIsOpen(false);
                      }}
                      title={color.label}
                      className="flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-200"
                      style={{
                        background: isActive ? `${color.primary}20` : "transparent",
                        outline: isActive
                          ? `2px solid ${color.primary}`
                          : "2px solid transparent",
                      }}
                    >
                      <span
                        className="w-7 h-7 rounded-full transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${color.light}, ${color.dark})`,
                          boxShadow: isActive
                            ? `0 0 10px 4px ${color.glow}`
                            : `0 2px 6px ${color.glow.replace("0.35", "0.2")}`,
                        }}
                      />
                      <span
                        className="text-[9px] font-bold tracking-wide"
                        style={{
                          color: isActive
                            ? color.light
                            : isDark
                            ? "#64748b"
                            : "#94a3b8",
                        }}
                      >
                        {color.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorSwitch;
