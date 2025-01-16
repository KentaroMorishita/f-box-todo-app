import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">TODO APP</h1>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  )
}

export default App
