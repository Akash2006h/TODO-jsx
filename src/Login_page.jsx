import { useState } from "react";

const Todo_list = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const HandleAdd = () =>{
    if(inputValue.trim() ==="") return;
    setTodos([...todos, inputValue]);
    setInputValue("");

  
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <div className="text-3xl font-bold mb-6">TODO-LIST</div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="add item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            onClick = {HandleAdd}
          >
            Add
          </button>
        </div>
        <ul className = "space-y-2">
          {todos.map((item, index) =>(
            <li key = {index}
            className = "bg-gray-800 px-4 py-2 rounded-md border border-gray-700">
             {item}
          </li>

          ))}
         
        </ul>
      </div>
    </div>
  );
};

export default Todo_list;

