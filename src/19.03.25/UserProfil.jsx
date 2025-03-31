import {BrowserRouter,Route, Routes, useNavigate, useParams, Link} from 'react-router-dom'

function UserProfile() {
    return(
            <Routes>
                <Route path='/' element={<UserList/>}  />
                <Route path='/users/:id' element={<UserInfo/>}/>
            </Routes>
    )
}
export default UserProfile;


function UserList() {
    const users = [
        {id:1, name:"Asubek"},
        {id:2, name:"Aziza"},
        {id:3, name:"Azamat"}
    ]

    return(
        <div>
            <h1>🧑🏿‍🦱 User List</h1>
            {users.map((user) => (
                <p key={user.id}> 
                   {user.name} | <Link to={`/users/${user.id} `}>View profile</Link> 
                </p>
        ))}
        </div>
    )
}

function UserInfo() {
    const {id} = useParams()
    const navigate = useNavigate()
    return(
        <div>
            <h1>🧑🏿‍🦱 User Profile: {id}</h1>
            <button onClick={() => navigate("/")}>Back to Users List</button>
        </div>
    )
}