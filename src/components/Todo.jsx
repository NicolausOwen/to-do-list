import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i} style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.text}
            <button onClick={() => toggleDone(i)}>✔</button>
            <button onClick={() => deleteTask(i)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
