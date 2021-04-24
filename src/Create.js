import React, { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const history =useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (title && body && author) {
      const blog = { title, body, author };
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("blog added");
        setIsLoading(false);
        // backward
        // history.go(-1);
        // forward
        // history.go(1);

        history.push("/")
      });
      setTitle("");
      setBody("");
      setAuthor("mario");
    }
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isLoading ? (
          <button type="submit">Submit</button>
        ) : (
          <button disabled>Adding Blog...</button>
        )}
      </form>
    </div>
  );
};

export default Create;
