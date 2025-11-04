// components/ThemeToggle.tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { Moon, Sun } from "lucide-react-native";
import styled, { useTheme } from "styled-components/native";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

const ToggleButton = styled(TouchableOpacity)`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 10px;
  border-radius: 50px;
  elevation: 3;
`;

export default function ThemeToggle() {
  const { theme: mode, toggleTheme } = useThemeSwitcher();
  const theme = useTheme();

  return (
    <ToggleButton onPress={toggleTheme}>
      {mode === "light" ? (
        <Moon color={theme.colors.text} size={22} />
      ) : (
        <Sun color={theme.colors.text} size={22} />
      )}
    </ToggleButton>
  );
}
