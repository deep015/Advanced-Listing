import useStore from '../store'
import { FaTimes } from 'react-icons/fa'

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
    handleSaveModal,
    closeWorkspaceModal,
  } = useStore()

  const handleClose = () => {
    if (modalType === "List") {
      closeListModal()
    } else if (modalType === "Workspace") {
      closeWorkspaceModal()
    }
  }

  const handleSave = () => {
    handleSaveModal()
  }

  if (!isListModalOpen && !isWorkspaceModalOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {`Create New ${modalType}`}
          </h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
            <FaTimes />
          </button>
        </div>

        {/* Name input */}
        <input
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          placeholder={`Enter ${modalType} name`}
          className="border border-gray-300 p-2 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Emoji input */}
        <input
          type="text"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          placeholder="Enter emoji (optional)"
          className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Save button */}
        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Modal
