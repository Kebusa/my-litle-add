import { useState, useEffect } from 'react'
import NavBar from './NavBar';
function Posts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }, []);

      return(
        <div>
            <NavBar/>
            <h1>All Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <Link to={`/posts/${post.id}`}>show more</Link>
                </div>
            ))}
        </div>
      )
}

export default Posts;