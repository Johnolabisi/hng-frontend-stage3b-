// hooks/useThemeSwitcher.ts
import { useEffect, useState } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "theme_preference";

export function useThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") {
          setTheme(saved);
        } else {
          // fallback to system preference
          const sys = Appearance.getColorScheme();
          setTheme(sys === "dark" ? "dark" : "light");
        }
     } finally {
        setReady(true);
      }
    })();
  }, []);

  const toggleTheme = async () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    await AsyncStorage.setItem(THEME_KEY, next);
  };

  return { theme, toggleTheme, ready };
}
