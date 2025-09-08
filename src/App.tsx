
import Sidebar from "./components/Sidebar";
import Mainarea from "./components/Mainarea";
import Todos from "./components/Todos";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <Header />

        {/* Input / Add Todo Section */}
        <Mainarea />

        {/* Intro Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <Content />
        </div>

        {/* Todos List Section */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Todo List</h2>
          <Todos />
        </div>
      </div>

      {/* Modal */}
      <Modal />
    </div>
  );
};

export default App;
