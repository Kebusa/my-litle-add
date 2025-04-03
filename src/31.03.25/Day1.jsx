import { useState } from "react"

const Day_1 = () => {
    const [email, setEmail] = useState("")
    const [pass, setPAssword] = useState("")
    const [error, setError] = useState("")

    function HandleSubmit(e) {
        e.preventDefault()

        if (!email.includes("@")) {
            setError('@ jok') 
            return
        }
        if (pass.length > 6) {
            setError("usyndygy 6 dan kop bolu kerek")
            return
        }
       
            setError('')
            alert("Forma satti saktaldy")
       


    }

    return(
        <form onSubmit={HandleSubmit} >
            <label >Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            
            <label >Password:</label>
            <input type="password" value={pass} onChange={(e) => setPAssword(e.target.value)} />

            <button type="submit" > Kiru </button>

            <p>{error}</p>
        </form>
    )
}


export default Day_1