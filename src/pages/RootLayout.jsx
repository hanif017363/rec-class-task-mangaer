import { Link, Outlet } from "react-router-dom";
import "../App.css";

export default function RootLayout() {
  return (
    <>
      <div className="row">
        <div id="detail">
          <Outlet />
        </div>

        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <nav>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/about`}>about</Link>
              </li>
              <li>
                <Link to={`/TaskMangaer`}>TaskMangaer</Link>
              </li>
              <li>
                <Link to={`/all-post`}>Post</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
