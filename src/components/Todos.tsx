import React from "react";
import useStore from "../store";
import { MdMoreVert } from "react-icons/md";

const Todos = () => {
  const {
    todos,
    editIndex,
    editText,
    setEditText,
    setEditIndex,
    dropdownIndex,
    handleEdit,
    handleUpdate,
    handleDropdownClick,
    deleteTodo,
  } = useStore();

  return (
    <ul className="flex flex-col gap-3">
      {todos.map((todo, index) => (
        <li key={index} className="bg-white shadow rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center relative">
          {editIndex === index ? (
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center w-full">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button
                onClick={() => handleUpdate(index)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Update
              </button>
              <button
                onClick={() => setEditIndex(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="font-medium text-gray-800">{todo.text}</span>
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {todo.list && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {todo.list}
                    </span>
                  )}
                  {todo.workspace && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {todo.workspace}
                    </span>
                  )}
                </div>
              </div>

              {/* Dropdown */}
              <div className="relative mt-2 sm:mt-0">
                <MdMoreVert
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                  size={24}
                  onClick={() => handleDropdownClick(index)}
                />
                {dropdownIndex === index && (
                  <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10 w-32">
                    <button
                      onClick={() => handleEdit(index)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
