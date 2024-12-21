import { Link, useLoaderData } from "react-router-dom";

const Post = () => {
  const tasks = useLoaderData();

  return (
    <div>
      <h1>Task list</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/post/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
