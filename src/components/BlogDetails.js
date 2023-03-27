import { useParams, useNavigate} from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, is_pending,} = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();
  
  const handleDelete = () => {
    console.log('Zehahahaha')
    fetch(`http://localhost:8000/blogs/${blog.id}`,{
      method: "DELETE"
    }).
    then(()=>{
      console.log(`Blog ${blog.id} deleted`);
      navigate("/");
    })
  }

  return (
    <div className="blog-details">
      {error && <div className="">{error}</div>}
      {is_pending && <div className="">Loading...</div>}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <h4>Written by {blog.author}</h4>
            <button onClick={(event) => {handleDelete()} }>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
