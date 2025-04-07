import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BookGallery() {
        const [books, setBooks] = useState([])


        useEffect(() => {
         axios 
         .get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books`)
         .then((response) => {
            setBooks(response.data)
         })
         .catch((error) => {
            console.error(error);
         })
        })



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

        <div className="books-cont">
                {books.map((book) => (
                <div className="card" key={book.id}>
                    <img src={book.image} alt="🖼️" />
                    <button >View details</button>
                </div>
                ))}
        </div>
    </div>
    )
}
export default BookGallery