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
  list: string;
  workspace: string;
}

interface AppState {
  list: List[];
  workspace: Workspace[];
  todos: Todo[];
  editIndex: number | null;
  dropdownIndex: number | null;
  isListModalOpen: boolean;
  isWorkspaceModalOpen: boolean;
  selectedList: string | null;
  selectedWorkspace: string | null;
  todoText: string;
  modalName: string;
  modalEmoji: string;
  modalType: "List" | "Workspace" | null;

  addList: (name: string, emoji: string) => void;
  addWorkspace: (name: string, emoji: string) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (index: number, updateTodo: Todo) => void;
}

const useStore = create<AppState>((set) => ({
  list: [],
  workspace: [],
  todos: [],
  editIndex: null,
  dropdownIndex: null,
  isListModalOpen: false,
  isWorkspaceModalOpen: false,
  selectedList: null,
  selectedWorkspace: null,
  todoText: "",
  modalName: "",
  modalEmoji: "",
  modalType: null,

  addList: (name, emoji) =>
    set((state) => ({
      list: [...state.list, { name, emoji }],
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
        todos: newTodos ,
        editIndex: null,
        editText:""
    };
    }),

    deleteTodo:(index)=>set((state)=>({
        todos:state.todos.filter((_,i)=>i!==index),
        dropdownIndex:null;
    })),

    handleEdit:(index)=>set((state)=>({
        editIndex:index,
        editText:state.todos[index].text,
        dropdownIndex:null,
        
    })),

    handleUpdate: (index: number) =>
  set((state) => {
    const updatedTodo = {
      ...state.todos[index],
      text: state.todoText, // assuming your store has `todoText` or `editText`
    };

    const newTodos = [...state.todos];
    newTodos[index] = updatedTodo;

    return { todos: newTodos, todoText: "" }; // reset edit text if needed
  }),
  
  handleDropdownClick :(index) => set((state)=>({
      dropdownIndex:index===state.dropdownIndex ? null:index
  }))


  setEditText :(text)=>set(editText:text),
  setEditIndex :(index)=>set(editIndex:index),
  openListModal:()=>set{
      isListModalOpen:true,
      modalName:"",
      modalEmoji:""
    }


}));

export default useStore;
