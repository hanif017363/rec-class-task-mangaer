import { useEffect, useState } from "react";

import "./App.css";
// const datas = [
//   {
//     id: 1,
//     task: "new task",
//     done: true,
//   },
//   {
//     id: 2,
//     task: "new task2",
//     done: true,
//   },
// ];

function App() {
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [inputTitle, setinpuTitle] = useState([]);
  const [editableTask, setEditableTask] = useState([]);

  const getFetch = () => {
    fetch(`http://localhost:3000/datas`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    getFetch();
  }, []);

  //prevent submmit reset
  const submmitHandler = (e) => {
    e.preventDefault();
    if (inputTitle.trim() === "") {
      return alert("please add valid input");
    }
    editMode ? handleEditTask() : createHandler();
  };
  //handle edit mode
  const handleEditMode = (task) => {
    setEditMode(true);
    setinpuTitle(task.task);
    setEditableTask(task);
  };
  // handle add

  const createHandler = () => {
    const addTask = {
      id: Date.now() + "",
      task: inputTitle,
      done: false,
    };

    fetch(`http://localhost:3000/datas`, {
      method: "POST",
      body: JSON.stringify(addTask),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      //re-fetch method
      getFetch();
      setinpuTitle(" ");
    });
    // setTasks([...tasks, addTask]);
  };
  // handle delete
  const handleDeleteTask = (taskid) => {
    fetch(`http://localhost:3000/datas/${taskid}`, {
      method: "DELETE",
    }).then(() => {
      getFetch();
    });
  };
  const handleEditTask = () => {
    // eslint-disable-next-line no-unused-vars
    const { id, ...rest } = editableTask;
    const updatedTask = { ...rest, task: inputTitle };
    fetch(`http://localhost:3000/datas/${editableTask.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTask),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      getFetch();
      setEditMode(false);
      setinpuTitle("");
    });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form action="" onSubmit={submmitHandler}>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => {
            setinpuTitle(e.target.value);
          }}
        />
        <button>{editMode ? "Update desu" : "Add Task"}</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.task}</span>
            <button onClick={() => handleEditMode(task)}>edit</button>
            <button
              onClick={() => {
                handleDeleteTask(task.id);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
