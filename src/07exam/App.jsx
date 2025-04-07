import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import BookGallery from "./BookGallery";
import Home from "./Home"
import "./style.css"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/bookGallery" element={<BookGallery/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;