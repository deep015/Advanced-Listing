import React from 'react';
import useStore from '../store';
import { FaPlus } from 'react-icons/fa';

const Mainarea = () => {
  const {
    lists,
    workspace,
    selectedList,
    selectedWorkspace,
    todoText,
    setSelectedList,
    setSelectedWorkspace,
    setTodoText,
    handleAddTodo,
  } = useStore();

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8">
      {/* Input Section */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        {/* Todo Input */}
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo..."
          className="border border-gray-300 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
        />

        {/* List Dropdown */}
        <select
          value={selectedList ?? ""}
          onChange={(e) => setSelectedList(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="">Select List</option>
          {lists.map((list, index) => (
            <option key={index} value={list.name}>
              {list.emoji} {list.name}
            </option>
          ))}
        </select>

        {/* Workspace Dropdown */}
        <select
          value={selectedWorkspace ?? ""}
          onChange={(e) => setSelectedWorkspace(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          <option value="">Select Workspace</option>
          {workspace.map((ws, index) => (
            <option key={index} value={ws.name}>
              {ws.emoji} {ws.name}
            </option>
          ))}
        </select>

        {/* Add Button */}
        <button
          onClick={handleAddTodo}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center justify-center w-full sm:w-auto transition"
        >
          <FaPlus className="mr-2" /> Add Todo
        </button>
      </div>
    </div>
  );
};

export default Mainarea;
