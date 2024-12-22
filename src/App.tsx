import React, { useState } from "react";
import InputSearch from "./Components/InputSearch";

interface Todo {
  id: String;
  todo: String;
  isDone: boolean;
}

const App:React.FC=()=>{
  const [todo,setTodo]=useState<String>(" ")
  const [todoList,setTodoList]= useState<Todo[]>([])
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0"); 
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; 
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = Date.now();
    const date= formatDate(timestamp);
    if(todo)
    {
      setTodoList([...todoList, { id: date.toString(),todo,isDone:false}])
    }
    setTodo("")
  };

  return (
    <div>
    <h1 className="text-center text-3xl text-blue-500 font-bold m-5">ToDo Task List</h1>
    <InputSearch todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
    <div>
        {todoList.map((task) => (
          <div >
            <h1>{task.todo}</h1>
            <h1>{task.id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

