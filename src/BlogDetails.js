import React from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history= useHistory();
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  // https://jsonplaceholder.typicode.com/posts/
  const handleDelete=()=>{
    fetch("http://localhost:8000/blogs/" + blog.id,{
      method:"DELETE"
    }).then(()=>{
      console.log("Blog Deleted")
      history.push("/")
    })
  }
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div className="blog-details">
          <article>
            <h1>{blog.title} </h1>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
          </article>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
