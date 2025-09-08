import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const username = "Deepraj"; // You can make this dynamic later

  return (
    <header className="w-full bg-white shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">
        My Todo Dashboard
      </h1>

      {/* User Greeting */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600 hidden sm:inline">Hello, {username}</span>
        <FaUserCircle size={28} className="text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
