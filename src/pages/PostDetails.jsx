/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  console.log(id, "from post details");
  return (
    <div>
      <h1>post details of post id {id}</h1>
      <p>post Title : {post?.title}</p>
      <p>status: {post?.body}</p>
    </div>
  );
}

export default PostDetails;
