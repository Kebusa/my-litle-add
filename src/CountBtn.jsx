import { useState } from "react"

function CountBtn(props) {
    const state = useState(0)
    const setCount = state[1]
    const number = state[0]
    function Add() {
        setCount(number + 1)
    }
    function Minus() {
        setCount(number -1)
    }
    if (number < 0) {
        alert("0-ден төмен болмауы керек!")
    }
    if (number == 10) {
        alert("10-ға жеттіңіз!")
    }
    
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={Add}>+</button>
            <button onClick={Minus}>-</button>
        </div>
    )
}


export default CountBtn;