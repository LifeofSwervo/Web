"use client"


import TodoEntry from "../components/TodoEntry";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  /**
   * - Add Todo. Add a new todo to the list of todos.
   * @param todo - String. Add todo to the list of todos.
   */
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