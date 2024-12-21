import React, { useState } from "react";
import InputField from "./Components/InputField";

const App:React.FC=()=>{
  const [todoList,setTodoList]= useState<String>(" ")
  console.log(todoList)
  return (
    <div>
     <h1 className="text-center text-3xl text-blue-500 font-bold m-5">ToDo Task List</h1>
    <InputField todo={todoList} setTodo={setTodoList}/>
    <h1>{todoList}</h1>
    </div>
  );
}

export default App;
