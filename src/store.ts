import { create } from "zustand";

interface List {
  name: string;
  emoji: string;
}

interface Workspace {
  name: string;
  emoji: string;
}

interface Todo {
  text: string;
  list: string | null;
  workspace: string | null;
}

interface AppState {
  lists: List[];
  workspace: Workspace[];
  todos: Todo[];
  editIndex: number | null;
  isListModalOpen: boolean;
  isWorkspaceModalOpen: boolean;
  dropdownIndex: number | null;
  selectedList: string | null;
  selectedWorkspace: string | null;
  todoText: string;
  modalName: string;
  modalEmoji: string;
  modalType: "List" | "Workspace" | null;
  editText: string;
 
    

  addList: (name: string, emoji: string) => void;
  addWorkspace: (name: string, emoji: string) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (index: number, updatedTodo: Todo) => void;
  deleteTodo: (index: number) => void;
  handleEdit: (index: number) => void;
  handleUpdate: (index: number) => void;
  handleDropdownClick: (index: number) => void;

  setEditText: (text: string) => void;
  setEditIndex: (index: number | null) => void;
  openListModal: () => void;
  openWorkspaceModal: () => void;
  closeListModal: () => void;
  closeWorkspaceModal: () => void;
  setSelectedList: (list: string | null) => void;
  setSelectedWorkspace: (workspace: string | null) => void;
  setTodoText: (text: string) => void;
  handleAddTodo: () => void;

  setModalName: (name: string) => void;
  setModalEmoji: (emoji: string) => void;
  setModalType: (type: "List" | "Workspace" | null) => void;
  handleSaveModal: () => void;
}

const useStore = create<AppState>((set) => ({
  lists: [],
  workspace: [],
  todos: [],
  editIndex: null,
  dropdownIndex: null,
  selectedList: null,
  selectedWorkspace: null,
  todoText: "",
  modalName: "",
  modalEmoji: "",
  modalType: null,
  editText: "",
  
 isListModalOpen: false,
  isWorkspaceModalOpen: false, 
  addList: (name, emoji) =>
    set((state) => ({
      lists: [...state.lists, { name, emoji }],
    })),

  addWorkspace: (name, emoji) =>
    set((state) => ({
      workspace: [...state.workspace, { name, emoji }],
    })),

  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),

  updateTodo: (index, updatedTodo) =>
    set((state) => {
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;
      return {
        todos: newTodos,
        editIndex: null,
        editText: "",
      };
    }),

  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
      dropdownIndex: null,
    })),

  handleEdit: (index) =>
    set((state) => ({
      editIndex: index,
      editText: state.todos[index].text,
      dropdownIndex: null,
    })),

  handleUpdate: (index) =>
    set((state) => {
      const updatedTodo = {
        ...state.todos[index],
        text: state.editText,
      };
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;

      return { todos: newTodos, editText: "", editIndex: null };
    }),

  handleDropdownClick: (index) =>
    set((state) => ({
      dropdownIndex: index === state.dropdownIndex ? null : index,
    })),

  setEditText: (text) => set(() => ({ editText: text })),
  setEditIndex: (index) => set(() => ({ editIndex: index })),

  openListModal: () =>
    set(() => ({
      isListModalOpen: true,
      modalType: "List",
      modalName: "",
      modalEmoji: "",
    })),
  openWorkspaceModal: () =>
    set(() => ({
      isWorkspaceModalOpen: true,
      modalType: "Workspace",
      modalName: "",
      modalEmoji: "",
    })),
  closeListModal: () =>
    set(() => ({
      isListModalOpen: false,
      modalName: "",
      modalEmoji: "",
    })),
  
    closeWorkspaceModal() {
      set(() => ({
        isWorkspaceModalOpen: false,
        modalName: "",
        modalEmoji: "",
      }));
    },
  setSelectedList: (list) => set(() => ({ selectedList: list })),
  setSelectedWorkspace: (workspace) => set(() => ({ selectedWorkspace: workspace })),
  setTodoText: (text) => set(() => ({ todoText: text })),

  handleAddTodo: () =>
    set((state) => {
      const { todoText, selectedList, selectedWorkspace } = state;

      if (todoText.trim() === "") {
        window.alert("Please enter a todo");
        return state;
      }

      const newTodo: Todo = {
        text: todoText,
        list: selectedList,
        workspace: selectedWorkspace,
      };

      return {
        todos: [...state.todos, newTodo],
        todoText: "",
        selectedList: null,
        selectedWorkspace: null,
      };
    }),

  setModalName: (name) => set(() => ({ modalName: name })),
  setModalEmoji: (emoji) => set(() => ({ modalEmoji: emoji })),
  setModalType: (type) => set(() => ({ modalType: type })),

  handleSaveModal: () =>
    set((state) => {
      const { modalName, modalEmoji, modalType } = state;

      if (modalName.trim() === "") {
        window.alert("Please enter a name");
        return state;
      }

      if (modalType === "List") {
        state.addList(modalName, modalEmoji);
      } else if (modalType === "Workspace") {
        state.addWorkspace(modalName, modalEmoji);
      }

      return {
        modalName: "",
        modalEmoji: "",
        modalType: null,
        isListModalOpen: false,
        isWorkspaceModalOpen: false,
      };
    }),
}));

export default useStore;
