import { useRBox, set } from "f-box-react"
import type { Todo } from "../state"
import { todosBox, filteredTodosBox } from "../state"

const toggleComplete = (id: number) => (todo: Todo) =>
  todo.id === id ? { ...todo, completed: !todo.completed } : todo
const deleteTodo = (id: number) => (todo: Todo) => todo.id !== id

function TodoList() {
  const [filteredTodos] = useRBox(filteredTodosBox)
  const [todos] = useRBox(todosBox)
  const setTodos = set(todosBox)

  const handleToggle = (id: number) => setTodos(todos.map(toggleComplete(id)))
  const handleDelete = (id: number) => setTodos(todos.filter(deleteTodo(id)))

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <label className="todo-label">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <div>
              <div className="todo-text">{todo.text}</div>
              <div className="todo-date">{todo.date.toLocaleString()}</div>
            </div>
          </label>
          <button
            className="trash"
            onClick={() => handleDelete(todo.id)}
            aria-label="Delete"
          ></button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
