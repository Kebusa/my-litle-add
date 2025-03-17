import {useState, useEffect } from "react";
import "../exam 17.03.25/style.css";


function Rejoin() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [accaunts, setAccaunt] = useState(
    //     {name: "Admin", email: "Asu@gmail.com", password: "1234"}
    // )
    function RegisterToggle() {
        const user = {name, email, password}
        localStorage.setItem("user",JSON.stringify(user))
    }
    useEffect(() => {
        localStorage.getItem("user")
    })

    
    return(
        <div className="form-cont">
                <input value={name} type="text" placeholder="Enter name" required onChange={(e) => setName(e.target.value)} />
                <input value={email} type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                <input value={password} type="password" placeholder="Passsword" required onChange={(e) => setPassword(e.target.value)}  />
                 <button  onClick={() => RegisterToggle}>Register</button> 
        </div>

    )
}

export default Rejoin;
function Login(onLogin) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email == email && user.password == password) {
        onLogin(user);
      } else {
        alert("Email или пароль неверный");
      }
    };
  
    const handleGuestLogin = () => {
      onLogin({ name: "Guest" });
    };
  
    return (
      <div>
        <h2>Войти</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Войти</button>
        <button onClick={handleGuestLogin}>Войти как гость</button>
      </div>
    );
  }

