import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useThemeContext } from "../../contexts/ThemeContext"; // use context now

// 🎨 styled components
const Background = styled(LinearGradient)`
  flex: 1;
`;
const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 20px;
`;
const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: white;
  letter-spacing: 10px;
`;
const ToggleButton = styled.TouchableOpacity`
  padding: 8px;
`;
const InputBox = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 14px 18px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  elevation: 4;
`;
const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;
const TodoCard = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 14px 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;
const TodoText = styled.Text<{ completed?: boolean }>`
  color: ${({ theme, completed }) =>
    completed ? theme.colors.textMuted : theme.colors.text};
  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"};
  font-size: 16px;
`;
const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 16px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const FilterTabs = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 14px 20px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
const FilterText = styled.Text<{ active?: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.textMuted};
  font-weight: ${({ active }) => (active ? "700" : "500")};
`;

// 📱 main component
export default function TodoScreen() {
  const theme = useTheme();
  const { theme: themeMode, toggleTheme } = useThemeContext(); // use context

  // ✅ Convex hooks
  const todos = useQuery(api.todos.list) || [];
  const addTodo = useMutation(api.todos.add);
  const toggleTodo = useMutation(api.todos.toggle);
  const removeTodo = useMutation(api.todos.remove);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos = todos.filter((t) =>
    filter === "completed"
      ? t.completed
      : filter === "active"
        ? !t.completed
        : true
  );

  const gradientColors = [theme.colors.gradientFrom, theme.colors.gradientTo];

  const handleAdd = async () => {
    if (!newTodo.trim()) return;
    await addTodo({ title: newTodo });
    setNewTodo("");
  };

  return (
    <Background colors={gradientColors}>
      <Container>
        {/* HEADER */}
        <Header>
          <Title>TODO</Title>
          <ToggleButton onPress={toggleTheme}>
            {themeMode === "light" ? (
              <Feather name="moon" size={24} color="#fff" />
            ) : (
              <Feather name="sun" size={24} color="#fff" />
            )}
          </ToggleButton>
        </Header>

        {/* INPUT */}
        <InputBox>
          <Feather
            name="circle"
            size={20}
            color={theme.colors.border}
            style={{ marginRight: 10 }}
          />
          <Input
            placeholder="Create a new todo..."
            placeholderTextColor={theme.colors.textMuted}
            value={newTodo}
            onChangeText={setNewTodo}
            onSubmitEditing={handleAdd}
            returnKeyType="done"
            blurOnSubmit={true}
          />
        </InputBox>

        {/* TODO LIST */}
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TodoCard>
              <TouchableOpacity
                onPress={async () => {
                  try {
                    await toggleTodo({ id: item._id });
                  } catch (e) {
                    console.log("Toggle error:", e);
                  }
                }}
              >
                {item.completed ? (
                  <Feather
                    name="check-circle"
                    size={20}
                    color={theme.colors.primary}
                  />
                ) : (
                  <Feather
                    name="circle"
                    size={20}
                    color={theme.colors.border}
                  />
                )}
              </TouchableOpacity>

              <TodoText completed={item.completed}>{item.title}</TodoText>

              <TouchableOpacity onPress={() => removeTodo({ id: item._id })}>
                <Feather name="x" size={20} color={theme.colors.textMuted} />
              </TouchableOpacity>
            </TodoCard>
          )}
        />

        {/* FOOTER */}
        <Footer>
          <TodoText>
            {todos.filter((t) => !t.completed).length} items left
          </TodoText>
          <TouchableOpacity
            onPress={() =>
              todos
                .filter((t) => t.completed)
                .forEach((t) => removeTodo({ id: t._id }))
            }
          >
            <TodoText>Clear Completed</TodoText>
          </TouchableOpacity>
        </Footer>

        {/* FILTERS */}
        <FilterTabs>
          {["All", "Active", "Completed"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setFilter(tab.toLowerCase() as any)}
            >
              <FilterText active={filter === tab.toLowerCase()}>
                {tab}
              </FilterText>
            </TouchableOpacity>
          ))}
        </FilterTabs>
      </Container>
    </Background>
  );
}
