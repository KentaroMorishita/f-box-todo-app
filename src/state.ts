import { RBox } from "f-box-core"

export type Todo = {
  id: number
  text: string
  completed: boolean
  date: Date
}

export type FilterType = "all" | "completed" | "incomplete"

export const todosBox = RBox.pack<Todo[]>([])
export const filterBox = RBox.pack<FilterType>("all")

// Function for filtering todos based on the filter type
const todosFilter = (type: FilterType) => (todos: Todo[]) =>
  todos.filter((todo) => todo.completed === (type === "completed"))

// RBox to determine whether filtering is necessary
const shouldFilterBox = filterBox["<$>"]((type) => type !== "all")

// Derived RBox to get the filtered todos
export const filteredTodosBox = shouldFilterBox[">>="]((shouldFilter) =>
  shouldFilter
    ? // Apply filtering using an applicative style with the filter function
      RBox.pack(todosFilter)["<*>"](filterBox)["<*>"](todosBox)
    : // Return todosBox directly if no filtering is needed
      todosBox
)
