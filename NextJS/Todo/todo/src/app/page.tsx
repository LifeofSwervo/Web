"use client"


import TodoEntry from "../components/TodoEntry";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <main>
      <TodoEntry onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}