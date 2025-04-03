import { useState } from "react";


function Check() {
    const [name, setName] = useState('')
    const [order,setOrder] = useState('')



    return(
        <form>
            <h1>Заказ Пиццы!!!</h1>
            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />


        </form>
    )
}