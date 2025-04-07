import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function HandleSubmit(e) {
        e.preventDefault()
        if (!email.includes("@")) {
            setError("Еmail неверный!!!")
            return
        }
        if (password.length < 4) {
            setError("Слишком короткий пароль!")
            return
        }else{
            navigate("/home")
        }
    }


    return(
    <div className="login-contain">
        <form className="form-contain" onSubmit={HandleSubmit}>
            <div className="login-text">
            <h1>Welcome Back</h1>
            <b>Login to youre bookShelf account</b>
            <h2>{error}</h2>
            </div>
        <label>Email:</label> <input type="text" placeholder="@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="submitBtn" type="submit">Submit</button>
        </form>
    </div>
    )

}

export default LoginPage;