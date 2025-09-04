
import useStore from '../store'
import { FaPlus } from 'react-icons/fa'

const Mainarea = () => {
    const{lists,workspace,selectedList,selectedWorkspace,todoText,setSelectedList,
        setSelectedWorkspace, setTodoText,handleAddTodo} = useStore()
  return (
    <div className='flex-1 p-6'>
        <div className='mb-4'>
            <input type="text" 
            value={todoText} 
            onChange={(e) => setTodoText(e.target.value)}
            placeholder='Add a new todo'
            className='border border-gray-300  p-2
            rounded-lg w-full' />

            <div className="mt-2 flex items-center">
                <select 
                value={selectedList?? ""}
                onChange={(e) => setSelectedList(e.target.value)}
                className='border border-gray-300 p-2 rounded-lg mr-2'>
                <option value="" disabled>Select a list</option>
                 {lists.map((list,index)=>(
                        <option key={index} value={list.name}>
                          {list.emoji}  {list.name}
                        </option>
                    ))}
                </select>
                <select value={selectedWorkspace?? ""}
                onChange={(e) => setSelectedWorkspace(e.target.value)}
                 className='border border-gray-300 p-2 rounded-lg mr-2'>
                    <option value="" disabled>Select a workspace</option>
                    {workspace.map((workspace,index)=>(
                        <option key={index} value={workspace.name}>
                          {workspace.emoji}  {workspace.name}
                        </option>
                    ))}
                </select>
                
                    <button
                    onClick={handleAddTodo}
                    className="bg-black text-white px-4 py-2 rounded-lg ml-4 flex">
                        <FaPlus /> Add Todo
                    </button>
            
            </div>
        </div>
    </div>
  )
}

export default Mainarea