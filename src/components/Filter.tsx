import { useRBox, set } from "f-box-react"
import type { FilterType } from "../state"
import { filterBox } from "../state"

const filterTypes: FilterType[] = ["all", "completed", "incomplete"]

function Filter() {
  const [filter] = useRBox(filterBox)
  const setFilter = set(filterBox)

  return (
    <div className="filter-container">
      {filterTypes.map((type) => (
        <button
          key={type}
          className={`filter-button ${filter === type ? "active" : ""}`}
          onClick={() => setFilter(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default Filter
