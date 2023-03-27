import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {


  const {data : blogs, is_pending, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div className="">{error}</div>}
      {is_pending && <div className="">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
