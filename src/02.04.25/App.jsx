import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Search";
import MovieList from "./MovieList";
import "./style.css";

function App() {
    const [movie, setMovie] = useState([])
    return(
        <BrowserRouter>
        <div className="contain">
            <h1>Movie Search App</h1>
            <Search  />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route />
            </Routes>

        </div>

        </BrowserRouter>
    )
}

export default App;