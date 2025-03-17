import { useState } from "react";


function ToggleText() {
        const [show, setShow] = useState(false)
        return(
            <article>
                    <button onClick={() => setShow(!show)}>
                        {show ? "⏬ Show more" : "⏫ Show less"}
                    </button>
                    {show ? <p>Пикапы Ram 1500 TRX</p> : <p>Под капотом RAM 1500 TRX установлен 6,2-литровый V8 двигатель с механическим наддувом, который развивает мощность около 702 л.с. и 881 Нм крутящего момента. </p> }
            </article>
        )
}
export default ToggleText;