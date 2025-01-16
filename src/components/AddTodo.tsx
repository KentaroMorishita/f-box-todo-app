import { useRBox, set } from "f-box-react"
import { todosBox } from "../state"

const createTodo = (text: string) => ({
  id: Date.now(),
  text,
  completed: false,
  date: new Date(),
})

function AddTodo() {
  const [text, textBox] = useRBox("")
  const setText = set(textBox)

  const addTodo = () => {
    if (text.trim() === "") return
    todosBox.setValue((todos) => [...todos, createTodo(text)])
    setText("")
  }

  return (
    <div className="add-todo-container">
      <input
        type="text"
        className="add-todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button className="add-todo-button" onClick={addTodo}>
        Add
      </button>
    </div>
  )
}

export default AddTodo
