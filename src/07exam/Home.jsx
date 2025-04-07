import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home-contain">
            <header className="home-header">
                <div className="logo">
                <img src="https://pngimg.com/d/book_PNG51088.png" alt="" />
                <h1>Book Shelf</h1>
                </div>
                <span className="home-link">
                 <Link to="/home" className="home-link">Home </Link>
                 <Link to="/bookGallery" className="gallery-link">Book Gallery</Link>
                </span>
            </header>
            <h1 className="welcome-text">Welcome user!!!</h1>
        </div>
    )
}
export default Home;