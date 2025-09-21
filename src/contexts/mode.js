import { createContext, useEffect, useState } from "react";

export const ThemeMode = createContext();
export function ThemeModeProvider({ children }) {
  const [theme, setMode] = useState("light");
  const changeMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <ThemeMode.Provider value={{ theme, changeMode }}>
      {children}
    </ThemeMode.Provider>
  );
}
