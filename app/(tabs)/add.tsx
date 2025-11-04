import React, { useState, useMemo } from "react";
import { TextInput, TouchableOpacity, Text } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeSwitcher } from "../../hooks/useThemeSwitcher"; // use your context

// Styled components
const Background = styled(LinearGradient)`
  flex: 1;
  padding: 20px;
`;

const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
`;

const Input = styled(TextInput)`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 16px;
  font-size: 16px;
  margin-bottom: 12px;
`;

const SaveButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 14px;
  border-radius: 12px;
  align-items: center;
  margin-top: 8px;
`;

const SaveButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 16px;
`;

// Main component
export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const add = useMutation(api.todos.add);
  const router = useRouter();

  const { theme: themeMode } = useThemeSwitcher(); // react to theme changes
  const theme = useTheme();

  // recompute gradient when theme changes
  const gradientColors = useMemo(
    () => [theme.colors.gradientFrom, theme.colors.gradientTo],
    [themeMode, theme.colors.gradientFrom, theme.colors.gradientTo]
  );

  const handleSave = async () => {
    if (!title.trim()) return;
    await add({ title, description });
    router.back();
  };

  return (
    <Background colors={gradientColors}>
      <SafeAreaView style={{ flex: 1 }}>
        <Card>
          <Input
            placeholder="Create a new todo..."
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={title}
            onChangeText={setTitle}
          />
          <Input
            placeholder="Add a description..."
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={description}
            onChangeText={setDescription}
          />
          <SaveButton onPress={handleSave}>
            <SaveButtonText>Save Todo</SaveButtonText>
          </SaveButton>
        </Card>
      </SafeAreaView>
    </Background>
  );
}
