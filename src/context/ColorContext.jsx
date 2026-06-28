import { createContext, useContext, useState, useEffect } from "react";

export const ACCENT_COLORS = [
  {
    id: "indigo",
    label: "Indigo",
    primary: "#6366f1",
    light: "#818cf8",
    dark: "#4338ca",
    glow: "rgba(99,102,241,0.35)",
    rgb: "99,102,241",
  },
  {
    id: "violet",
    label: "Violet",
    primary: "#8b5cf6",
    light: "#a78bfa",
    dark: "#6d28d9",
    glow: "rgba(139,92,246,0.35)",
    rgb: "139,92,246",
  },
  {
    id: "emerald",
    label: "Emerald",
    primary: "#10b981",
    light: "#34d399",
    dark: "#059669",
    glow: "rgba(16,185,129,0.35)",
    rgb: "16,185,129",
  },
  {
    id: "rose",
    label: "Rose",
    primary: "#f43f5e",
    light: "#fb7185",
    dark: "#e11d48",
    glow: "rgba(244,63,94,0.35)",
    rgb: "244,63,94",
  },
  {
    id: "cyan",
    label: "Cyan",
    primary: "#06b6d4",
    light: "#22d3ee",
    dark: "#0891b2",
    glow: "rgba(6,182,212,0.35)",
    rgb: "6,182,212",
  },
  {
    id: "amber",
    label: "Amber",
    primary: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
    glow: "rgba(245,158,11,0.35)",
    rgb: "245,158,11",
  },
];

const ColorContext = createContext(null);

export const ColorProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState(() => {
    const saved = localStorage.getItem("portfolio-accent-color");
    return ACCENT_COLORS.find((c) => c.id === saved) || ACCENT_COLORS[0];
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-dark-mode");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-primary", accentColor.primary);
    root.style.setProperty("--accent-light", accentColor.light);
    root.style.setProperty("--accent-dark", accentColor.dark);
    root.style.setProperty("--accent-glow", accentColor.glow);
    root.style.setProperty("--accent-rgb", accentColor.rgb);
    root.setAttribute("data-theme", accentColor.id);
    localStorage.setItem("portfolio-accent-color", accentColor.id);
  }, [accentColor]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
    } else {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
    }
    localStorage.setItem("portfolio-dark-mode", String(isDark));
  }, [isDark]);

  const toggleMode = () => setIsDark((v) => !v);

  return (
    <ColorContext.Provider value={{ accentColor, setAccentColor, ACCENT_COLORS, isDark, toggleMode }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const ctx = useContext(ColorContext);
  if (!ctx) throw new Error("useColor must be used inside ColorProvider");
  return ctx;
};
