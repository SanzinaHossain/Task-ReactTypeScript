import React from "react"

interface Props{
    todo:String,
    setTodo:React.Dispatch<React.SetStateAction<String>>,
}
const InputField:React.FC<Props> = ({todo,setTodo}:Props) => {
  return (
    
    <form className="justify-center items-center  flex">
    <input className="p-3 border-2 border-blue-200 justify-center w-[50%]" type ="input " placeholder="enter the task name" onChange={(e)=>setTodo(e.target.value)}/>
    <button className="p-3 border-2 border-blue-200 justify-center w-[10%]" type="submit" value="Add Task"/>
   </form>

  )
}

export default InputField
