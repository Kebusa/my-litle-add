import { useContext, useState } from "react";


function Theme(){
    const [theme, setTheme] = useState("light")
    function Change(){
        setTheme(theme === "light"? "dark" : "light") 
    }

    return(
        <div style={{background: theme === "light" ? "#ffff" : "black" }}>
            <h1>Changing theme to light and dark</h1>
            <button onClick={Change}>Light/Dark</button>
        </div>
    )

}

export default Theme;