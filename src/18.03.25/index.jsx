import { BrowserRouter, Routes , Route,Link, useNavigate} from "react-router-dom";
import CountBtn from "./CountBtn";
function Add() {
    return( <BrowserRouter>
                    {/* <NavBar/>   */}
        <Routes>
 
                {/* <Route path="/" element={<CountBtn/>}/> */}
                {/* <Route path="/home" element={<Home/>}/> */}
                <Route path="/about" element={<About/>}/>
                {/* <Route path="/contact" element={<Contact/>}/> */}
                {/* <Route path="*" element={<NotFound/>}/> */}
                {/* <Route path="/next" element={<NextVideo/>}/> */}
        </Routes>
    
    
    </BrowserRouter>

    )
}
export default Add;

// function NavBar() {
//     const navigate = useNavigate()
//     return(
//         <nav>
//             <Link to="/">Home</Link>{"    |    "}
//             <Link to='/about'>About</Link>{"    |    "}
//             <Link to="/contact">Contact</Link>{"    |    "}
//             <a href="https://www.imdb.com/title/tt10986410/" target="_blank">a Ted</a>
//             <button onClick={() => navigate("/next")}>Youtube</button>
//             <button onClick={() => navigate(-1)}>Back</button>
//             <button onClick={() => navigate(+1)}>Forward</button>
//         </nav>
//     )
// }
// function NextVideo() {
//     return(
//         <h1>Next Video</h1>
//     )
// }

// function Home() {
//     return(
//         <h1>Home page</h1>
//     )
// }
// function About() {
//     return(
//         <h1>About us</h1>
//     )
// }
// function Contact() {
//     return <h1>Contact</h1>
// }
// function NotFound() {
//     return(
//         <h1>404 NOT FOUNDED!!!</h1>
//     )
// }



// import { useState, useEffect } from "react";

// function Navbar() {
//   const [theme, setTheme] = useState("white");

//   useEffect(() => {
//     localStorage.setItem("color", "black")
//   }, []);

//   const toggleTheme = () => {
//     setTheme(localStorage.getItem("color"))
//   };

//   return (
//     <nav style={{ backgroundColor: theme, padding: "10px" }}>
//       <button onClick={toggleTheme}>Түсін өзгерту</button>
//     </nav>
//   );
// }

// export default Navbar;

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Contact() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => {
//         navigate("*")
//     }, 2000);
//   }, []);

//   return <h1>Contact Us</h1>;
// }

// import { useState, useEffect } from "react";

// function About() {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     localStorage.setItem("About", favorites)
//   }, []);

//   const addToFavorites = () => {
//     const newFavorites = [...favorites, "About"];
//     setFavorites(newFavorites);
//     localStorage.getItem(newFavorites)
//   };

//   return (
//     <div>
//       <h1>About Us</h1>
//       <button onClick={addToFavorites}>Менің сүйікті бетім</button>
//     </div>
//   );
// }

