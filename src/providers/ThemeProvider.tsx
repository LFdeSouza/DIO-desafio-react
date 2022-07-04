import React, { createContext, useState } from "react";
import { Theme, Props } from "../Types";

const initialTheme = [Theme.dark, () => {}];

export const ThemeContext = createContext<typeof initialTheme>(initialTheme);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  const toggleTheme = () => setTheme(Theme.dark ? Theme.light : Theme.dark);

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
