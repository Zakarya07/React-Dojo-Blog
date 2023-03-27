import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [is_pending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(blog) 
    }).then(()=>{
        console.log("new blog added");
        setIsPending(false);
        navigate("/")
    })

}

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form  onSubmit={handleSubmit}  noValidate="novalidate">
        {/* Title   */}
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {/* Body   */}
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        {/* Author   */}
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        { !is_pending && <button>Add a blog</button>}
        { is_pending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
