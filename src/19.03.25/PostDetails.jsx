import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function PostDetails() {
    const {id} = useParams()

        const [posts, setPosts] = useState(null)
        
        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
              .then((res) => res.json())
              .then((data) => setPosts(data))
              .catch((error) => console.error("404 not founded" + error));
          }, [id]);
    
    
          return(
            <div>
                <NavBar/>
                <Link to="/posts">Back</Link>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
            </div>
          )
}
export default PostDetails;