import { Outlet, Navigate } from "react-router-dom"

function Protect() {
    const user = false

    return(
        <div>
            {user ? <Outlet/> : <Navigate to="/"/>}
        </div>
    )
}
export default Protect;