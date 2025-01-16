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

// フィルター関数
const todoFilter = (type: FilterType) => (todos: Todo[]) =>
  todos.filter(
    {
      all: () => true,
      completed: (todo: Todo) => todo.completed,
      incomplete: (todo: Todo) => !todo.completed,
    }[type]
  )

// アプリカティブスタイルで派生状態を作成
export const filteredTodosBox = RBox.pack(todoFilter)
  ["<*>"](filterBox)
  ["<*>"](todosBox)
