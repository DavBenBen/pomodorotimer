import { FaTrashCan } from "react-icons/fa6";

function Task({ task, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between w-full p-2 border-b border-base-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox checkbox-error hover:bg-error transition-colors duration-200"
          checked={task.completed} // Bind the checkbox to the `completed` property
          onChange={() => onToggle(task.id)} // Call the `onToggle` function when the checkbox is toggled
        />
        <span
          className={`ml-4 ${task.completed ? "line-through text-base-300" : ""}`}
        >
          {task.text}
        </span>
      </div>
      <button
        className="btn btn-error rounded-lg group shadow-lg"
        onClick={() => onDelete(task.id)}
      >
        <FaTrashCan className="scale-110 group-hover:fill-white group-hover:scale-160 transition-all duration-200" />
      </button>
    </li>
  );
}

export default Task;