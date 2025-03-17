import { useState } from "react";
import "../11.03.25/dark.css"

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    

    return(<>
        <div className={isDark && "lightMode" || "darkMode"}>
        
        <button onClick={() => setIsDark(!isDark)}>{isDark && "Dark mode🌑" || "light mode☀️"}</button>
        </div>
        
        </>
    )



}

export default ThemeToggle;