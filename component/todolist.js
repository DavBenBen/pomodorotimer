import Task from "./task";

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full mt-4 p-4 border-2 border-base-200 rounded-lg shadow-md">
      <ul className="w-full">
        {todos.map((todo) => (
          <Task
            key={todo.id}
            task={todo}
            onDelete={onDelete}
            onToggle={onToggle} // Pass the `onToggle` function
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;