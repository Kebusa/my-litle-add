import { useState } from "react";


function History() {
    
    const colors = []
    function color() {

        const randomColor = `#${Math.floor(Math.random() * 5592405).toString(16)}`
        document.body.style.background = randomColor
        colors.push(randomColor)
        if (colors.length == 6) {
            colors.shift() 
    
        }
        console.log(colors);
        
    }
    function Historyks() {
        if (colors.length == 5) {
            console.log(colors);
            
        }
    }
   




    return(
        <div>
            <button onClick={color}>Color</button>
            <button onClick={Historyks}>History</button>
            <h1>{}</h1>
        </div>
    )


}

export default History;