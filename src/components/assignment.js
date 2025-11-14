import { useEffect, useState } from "react";

 function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleAddToDoList() {
    if (inputValue.trim() === "") return;
    const newTodolist = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodoList([...todoList, newTodolist]);
    setInputValue("");
  }

  function handleDeleteToDoList(id) {
    const updateTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updateTodoList);
  }

  function handleCompleteToDolist(id) {
    const updateToDoList = todoList.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setTodoList(updateToDoList);
  }

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("todolist")) || [];
    setTodoList(store);
  },[]);

  return (
    <>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button onClick={handleAddToDoList}>Add</button>
      </div>
      <div>
        <ul>
          {todoList.map((item) => {
            return (
              <div
                key={item.id}
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkBox"
                  checked={item.completed}
                  onChange={() => {
                    handleCompleteToDolist(item.id);
                  }}
                ></input>
                <div>{item.text}</div>
                <button
                  onClick={() => {
                    handleDeleteToDoList(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}


export default {ToDoList};