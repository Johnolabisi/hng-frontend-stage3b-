import React from "react";
import { Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ThemeProvider } from "styled-components/native";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import { lightTheme, darkTheme } from "../constants/theme";
import { ActivityIndicator, View } from "react-native";
import { ThemeProviderWrapper } from "../contexts/ThemeContext"; // import your context wrapper

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

export default function RootLayout() {
  const { theme, ready } = useThemeSwitcher(); // we don’t need initialParams anymore
  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider theme={selectedTheme}>
        <ThemeProviderWrapper>
          {" "}
          {/* provide toggleTheme + theme to all screens */}
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProviderWrapper>
      </ThemeProvider>
    </ConvexProvider>
  );
}
