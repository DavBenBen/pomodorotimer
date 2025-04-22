import { useState } from "react";

function TaskMaker({ onAddTask }) {
  const [taskText, setTaskText] = useState(""); // State to hold the input value

  const handleAddTask = () => {
    if (taskText.trim() === "") return; // Prevent adding empty tasks
    onAddTask(taskText); // Call the parent function to add the task
    setTaskText(""); // Clear the input field
  };

  return (
    <div className="flex items-center space-x-4 p-2 rounded-lg shadow-md border-2 border-base-200 w-full">
      <input
        type="text"
        className="input input-bordered rounded-lg border-base-200 w-full"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Update the input value
      />
      <button
        className="btn btn-secondary rounded-lg"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskMaker;