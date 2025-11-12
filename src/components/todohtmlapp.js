import { use, useEffect, useState } from "react";

export default function TodoListHTMLCSSApp(){

    const[inputValue,setInputValue]=useState("");
    const[todoList,setTodoList]=useState([]);

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList));
    },[todoList])

    useEffect(()=>{
        const savedTodos=JSON.parse(localStorage.getItem("todos")) || [];
        setTodoList(savedTodos);
    },[])


    function handleAddTodo(){
        if(inputValue.trim()==="")return;
        const newTodo={
            id:Date.now(),
            text:inputValue,
            completed:false,
        }
        setTodoList([...todoList,newTodo]);
        setInputValue("");
    }

    function handleDeleteTodo(id){
        const updatedTodos=todoList.filter((todo)=>todo.id!==id)
        setTodoList(updatedTodos);
    }

    function handleToggleComplete(id){
        const updatedTodos=todoList.map((todo)=>{
            return todo.id===id ?{...todo,completed:!todo.completed} : todo
        })
        setTodoList(updatedTodos);
    }
return(
    <>
    <div>
    <h1>Todo List</h1>
    </div>
    <div>
        <input onChange={(e)=> setInputValue(e.target.value)} value={inputValue}></input>
        <button onClick={handleAddTodo}>ADD</button>
    </div>
    <ul style={{display:'flex',flexDirection:'column',gap:'10px'}}>
      {todoList.map((todo)=>(
        <div key={todo.id} style={{display:'flex',flexDirection:'column',gap:'10px'}} >
         <input type="checkBox" checked={todo.completed} onChange={()=>{handleToggleComplete(todo.id)}}></input>
        <li >{todo.text}</li><button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
        </div>
    )) }
    </ul>
   
    </>
)
}