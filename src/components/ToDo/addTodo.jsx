import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {addToDo} from '../../store/todoslice'

const AddTodo = () => {
    const [input, setinput] = useState('');
    const Dispatch= useDispatch()
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(input)
            Dispatch(addToDo(input));
        setinput('');
    }
    return (
        <div className='w-full bg-black text-white p-5 text-center'>
            Add Your Work Here

            <form onSubmit={formSubmitHandler} className='flex m-3'>
                <input 
                    type="text"
                    placeholder='Add The ToDo here'
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={input}
                    onChange={(e)=>setinput(e.target.value)}
                />
                <br />
                <button
                    type='submit'
                    className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                >Submit</button>
            </form>

        </div>
    );
}

export default AddTodo;
