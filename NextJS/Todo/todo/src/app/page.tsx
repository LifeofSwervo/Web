"use client"

import { useState } from "react";
import TodoEntry from "../components/TodoEntry";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <main>
      <TodoEntry todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </main>
  );
}