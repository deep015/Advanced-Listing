import React from 'react';
import useStore from '../store';
import { FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  const { lists, workspace, openListModal, openWorkspaceModal } = useStore();

  return (
    <div className="w-full sm:w-60 bg-[#F9F9F9] flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        {/* Lists */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Lists</h3>
          <ul>
            {lists.map((list, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center mt-2"
              >
                <span className="mr-2">{list.emoji}</span>
                {list.name}
              </li>
            ))}
          </ul>
          <button
            onClick={openListModal}
            className="mt-3 flex items-center justify-center text-sm sm:text-base font-medium text-white bg-black px-3 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <FaPlus className="mr-2" /> Add List
          </button>
        </div>

        {/* Workspaces */}
        <div className="p-4 border-t border-gray-300 mt-4">
          <h3 className="text-lg font-semibold mb-2">Workspaces</h3>
          <ul>
            {workspace.map((ws, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center mt-2"
              >
                <span className="mr-2">{ws.emoji}</span>
                {ws.name}
              </li>
            ))}
          </ul>
          <button
            onClick={openWorkspaceModal}
            className="mt-3 flex items-center justify-center text-sm sm:text-base font-medium text-white bg-black px-3 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <FaPlus className="mr-2" /> Add Workspace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
