import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <img src="https://source.unsplash.com/1900x1080/?boussole"/>
            <div className="text">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to={"/"}>Back to the homepage</Link>
            </div>
        </div>
    );
}
 
export default NotFound;