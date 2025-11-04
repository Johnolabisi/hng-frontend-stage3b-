// convex/todos.ts
import { query, mutation } from "./_generated/server";
import { Id } from "./_generated/dataModel"; // ✅ import this

export const list = query(async ({ db }) => {
  return await db.query("todos").collect();
});

export const add = mutation(async ({ db }, { title, description, dueDate }) => {
  return await db.insert("todos", {
    title,
    description: description ?? "",
    dueDate: dueDate ?? null,
    completed: false,
    createdAt: Date.now(),
  });
});

export const toggle = mutation(async ({ db }, { id }: { id: Id<"todos"> }) => {
  // ✅ type the id properly
  const todo = await db.get(id);
  if (!todo) throw new Error("todo not found");
  await db.patch(id, { completed: !todo.completed });
  return true;
});

export const update = mutation(
  async (
    { db },
    {
      id,
      fields,
    }: {
      id: Id<"todos">;
      fields: Partial<{
        title: string;
        description: string;
        dueDate: number | null;
        completed: boolean;
      }>;
    }
  ) => {
    // ✅ typed
    await db.patch(id, fields);
    return true;
  }
);

export const remove = mutation(async ({ db }, { id }: { id: Id<"todos"> }) => {
  // ✅ typed
  await db.delete(id);
  return true;
});
