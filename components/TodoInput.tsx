// src/components/TodoInput.tsx
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function TodoInput({
  onAdd,
}: {
  onAdd: (t: string, d?: string) => void;
}) {
  const [text, setText] = useState("");

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add a todo..."
        style={{
          flex: 1,
          padding: 12,
          backgroundColor: "#fff",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#e5e7eb",
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          onAdd(text);
          setText("");
        }}
      />
    </View>
  );
}
