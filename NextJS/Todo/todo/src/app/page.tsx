"use client"


import TodoEntry from "../components/TodoEntry";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      <TodoEntry />
      <TodoList />
    </main>
  );
}