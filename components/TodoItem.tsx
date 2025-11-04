// src/components/TodoItem.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: any;
  onToggle: () => void;
  onDelete: () => void;
}) {
  return (
    <View
      style={{
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onToggle} style={{ flex: 1 }}>
        <Text
          style={{
            textDecorationLine: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Text>
        {todo.description ? (
          <Text style={{ color: "#6b7280" }}>{todo.description}</Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text style={{ color: "#ef4444", marginLeft: 12 }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
