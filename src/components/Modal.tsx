import React from 'react';
import useStore from '../store';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const {
    isListModalOpen,
    isWorkspaceModalOpen,
    modalName,
    modalEmoji,
    modalType,
    setModalName,
    setModalEmoji,
    closeListModal,
    closeWorkspaceModal,
    handleSaveModal,
  } = useStore();

  const isOpen = isListModalOpen || isWorkspaceModalOpen;

  if (!isOpen) return null;

  const handleClose = () => {
    if (modalType === "List") closeListModal();
    else if (modalType === "Workspace") closeWorkspaceModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">{`Create New ${modalType}`}</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Name Input */}
        <input
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          placeholder={`Enter ${modalType} name`}
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
        />

        {/* Emoji Input */}
        <input
          type="text"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          placeholder="Enter emoji (optional)"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
        />

        {/* Save Button */}
        <button
          onClick={handleSaveModal}
          className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
