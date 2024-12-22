import React from "react"

interface Props{
    todo:String,
    setTodo:React.Dispatch<React.SetStateAction<String>>,
    handleSubmit: (e: React.FormEvent) => void
}
const InputSearch:React.FC<Props> = ({todo,setTodo,handleSubmit}) => {
  return (
    
    <form className="justify-center items-center  flex" onSubmit={handleSubmit}>
    <input 
    className="p-3 border-2 border-blue-200 justify-center w-[50%]" 
    type ="input" 
    placeholder="enter the task name"  
    onChange={(e) => setTodo(e.target.value)} />
    <input 
    className="p-3 border-2 border-blue-200 justify-center w-[10%]" type="submit" 
    value="Add Task"/>
   </form>

  )
}

export default InputSearch
