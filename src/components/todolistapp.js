// Problem Statement
// Create a Todo List app where users can:
// Add todo
// Mark todo as completed
// Delete todo
// Persist data in localStorage

import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodoList(savedTodos);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

 
  function addTodo() {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputValue("");
  }


  function toggleComplete(id) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedTodos);
  }

  function deleteTodo(id) {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-gray-900 rounded-2xl shadow-lg text-white">
      <h1 className="text-2xl font-bold text-center mb-5"> Todo List</h1>


      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todoList.length === 0 && (
          <p className="text-center text-gray-400">No todos yet!</p>
        )}
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg"
          >
            <div className="flex items-center gap-2 flex-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="cursor-pointer"
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-400 hover:text-red-500 transition"
            >
             Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
