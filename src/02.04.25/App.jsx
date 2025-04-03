import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Search";
import MovieList from "./MovieList";
import "./style.css";

function App() {
    const [movies, setMovie] = useState([])
    return(
        <BrowserRouter>
        <div className="contain">
            <h1>Movie Search App</h1>
            <Search  onSearch={setMovie} />
            <Routes>
                <Route path="/" element={<MovieList  movies={movies}/>} />
                <Route path="/movie/:id" element={<MovieDetails/>} />
            </Routes>

        </div>

        </BrowserRouter> 
    )
}

export default App;