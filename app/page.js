"use client";

import { useState, useEffect } from "react";
import Timer from "@/component/timer";
import TimeSelector from "@/component/timeselector";
import TodoList from "@/component/todolist";
import TaskMaker from "@/component/taskmaker";

export default function Home() {
  const [todos, setTodos] = useState([]); // Initialize with an empty array
  const [timeMax, setTimeMax] = useState(0.1);

  // Load `todos` from localStorage on the client side
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save `todos` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false }; // Add `completed` property
    setTodos((prevTodos) => [...prevTodos, newTask]); // Add the new task to the list
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <div className="flex items-center justify-center h-screen">
        <div className="join w-1/2 h-4/6">
          {/* Left Side */}
          <div className="flex flex-col space-y-4 w-1/2 h-fill p-10 shadow-md border-2 border-base-200 rounded-l-xl">
            <div className="flex flex-col justify-center items-center h-full">
              <Timer initialTime={timeMax} />
              <TimeSelector timeMax={timeMax} setTimeMax={setTimeMax} />
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col space-y-4 w-1/2 h-fill p-10 shadow-md border-2 border-base-200 rounded-r-xl">
            <div className="flex flex-col justify-center items-center h-fit">
              <TaskMaker onAddTask={handleAddTask} />
              <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}