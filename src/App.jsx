import AddTodo from './components/ToDo/addTodo'
import TodoList from './components/ToDo/todoList'


function App() { 
  return (
    <>
      <h1 className='text-xl text-center p-5 bg-black text-white'>Welcome to the ToDo Page</h1>
      {/* component for adding todos */}
      <AddTodo/>
      {/* component for listing todos */}
      <TodoList/>
    </>
  )
}

export default App
