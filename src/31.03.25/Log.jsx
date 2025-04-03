import { useState } from "react";



function Log() {
    const [name, setName] = useState("") 
    const [email, setEmail] = useState("") 
    const [password, setPAssword] = useState("") 
    const [password1, setPAssword1] = useState("") 
    const [error, setError] = useState("")  

    const sandar = ['1','2','3','4','5','6','7','8','9','0']

    function HandleSubmit(e) {
        e.preventDefault()
        if (password != password1) {
           setError("Parol birdey emes") 
            return
        }
        if (!email.includes("@")) {
            setError('@ jok') 
            return
        }
        if (password1.length<8) {
            setError("usyndygy 8 dan kop bolu kerek")
            return
        }
        for(u in name){
            if(sandar.includes(u)){
                setError('kate')
                return
            }
        }
            setError('')
            alert("Forma satti saktaldy")
       

    }
    return(
        <form onSubmit={HandleSubmit}>
            <input type="text" value={name} placeholder="Name:" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={email} placeholder="Email:" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password:" onChange={(e) => setPAssword(e.target.value)} />
            <input type="password" value={password1} placeholder="Repeat password:" onChange={(e) => setPAssword1(e.target.value)} />
            <button type="submit"> onSubmit </button>
            <p>{error}</p>

        </form>
    )
}

export default Log()