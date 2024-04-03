import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {removeToDo,toggleComplete,setLocalTodos} from '../../store/todoslice'

const TodoList = () => {
    const localtodos= JSON.parse(localStorage.getItem("todos"))
    const  todos =useSelector((state) => state.todos);
    const Dispatch=useDispatch();
    useEffect(()=>{
        localtodos && localtodos.length > 1 ? Dispatch(setLocalTodos(localtodos)) : null;
    },[])
    
    
    return (
        <div className='p-5 text-white'>
            <h1 className='text-center m-2'>These are the Todos Listed in our state</h1>
            <div>
                {
                    todos.map(todo=>(
                        <div key={todo.id} 
                        className={`flex border border-black/10 rounded-lg px-3 my-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                            todo.isCompleted ? "bg-green-700" : "bg-[#9746d4]"
                        }`}
                        >
                            <input
                                type="checkbox"
                                className="cursor-pointer"
                                checked={todo.isCompleted}
                                onChange={()=>Dispatch(toggleComplete(todo.id))}
                            />
                           <input value={todo.text}
                           className="outline-none w-full bg-transparent rounded-lg text-white"
                           disabled/>                           
                           <button onClick={()=>Dispatch(removeToDo(todo.id))}
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"

                           >❌</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList;
