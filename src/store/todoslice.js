import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: nanoid(),
            text: "Sample Task added by Yashpal Puri",
            isCompleted: false
        }
    ]
}

export const todoSlice = createSlice(
    {
        name: "todo",  // a name used in the reducer, action and selector
        initialState,   // provide initial state
        reducers: {
            addToDo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                    isCompleted: false
                }
                state.todos.push(todo);
                localStorage.setItem('todos', JSON.stringify(state.todos))
            },
            removeToDo: (state, action) => {
                state.todos = state.todos.filter((todo) => (
                    todo.id !== action.payload
                ))
                localStorage.setItem('todos', JSON.stringify(state.todos))
            },
            toggleComplete: (state, action) => {
                state.todos = state.todos.map(
                    (prevtodo) => (
                        (prevtodo.id === action.payload) ? { ...prevtodo, isCompleted: !prevtodo.isCompleted } : prevtodo
                    )
                )
                localStorage.setItem('todos', JSON.stringify(state.todos))

            },
            setLocalTodos: (state,action)=>{
                state.todos=action.payload
            }
        }

    }
)

export const { addToDo, removeToDo, toggleComplete,setLocalTodos } = todoSlice.actions