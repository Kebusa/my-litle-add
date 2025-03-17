import "../style.css"

function Profile(props) {
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <button>Logout</button>
            <button>Delete </button>
        </div>
    )
}

export default Profile;