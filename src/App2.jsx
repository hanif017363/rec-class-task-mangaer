/* eslint-disable no-undef */

const datas = [
  {
    id: 1,
    task: "new task",
    done: true,
  },
  {
    id: 2,
    task: "new task",
    done: true,
  },
];

function App() {
  const [inpuTitles, setinpuTitle] = useState();
  const [tasks, setTasks] = useState(datas);
  const [editMode, satEditmode] = useState(false);
  const [editbleNote, setEditableNote] = useState(null);
  const handleDeleteTask = (taskid) => {
    setTasks(tasks.filter((t) => t.id !== taskid));
  };

  const submmitHandler = (e) => {
    e.preventDefault();
    if (inpuTitles.trim() === " ") {
      return alert("please provide valid title");
    }
    editMode ? updateHandler() : createHandler();
  };
  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      task: inpuTitles,
      done: false,
    };
    setTasks([...tasks, newNote]);
    setinpuTitle("");
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  const id = ["kola", "apeple", "d4c"];
  const editHandler = (task) => {
    satEditmode(true);
    setEditableNote(task);
    setinpuTitle(task.task);
  };
  const updateHandler = () => {
    const updatedNotes = tasks.map((item) => {
      if (item.id === editbleNote.id) {
        return {
          ...item,
          task: inpuTitles,
        };
      }
      return item;
    });
    setTasks(updatedNotes);
    satEditmode(false);
    setinpuTitle("");
  };
  return (
    <>
      <h2>All notes</h2>
      <form action="" onSubmit={submmitHandler}>
        <input
          ref={inputRef}
          type="text"
          value={inpuTitles}
          onChange={(e) => {
            setinpuTitle(e.target.value);
          }}
        />
        <button>{editMode ? "Update Task" : "Add Task"}</button>
      </form>
      <div className="note-list">
        <p style={{ fontSize: "2rem" }}>{id.join(",")}</p>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.task}</span>
              <button onClick={() => editHandler(task)}>Edit</button>
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
    </>
  );
}

export default App;
