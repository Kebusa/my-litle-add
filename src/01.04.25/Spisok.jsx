import axios from "axios"
import { useEffect, useState } from "react"


function Spisok() {

    const [games, setGame] = useState([])
    const [error, setError] = useState('')


    function GameList() {
        useEffect(() => {
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setGame(response.data.slice(0, 5))
            })
            .catch((error) =>{
                setError('404 NOT FOUND')
            })
        },[])
    }



        return(
            <div>
                <button onClick={GameList}> Clicked </button>
                <p>
                {games.length === 0 ? (<p>Juktelude</p>): ( 
                 <ul>
                    {games.map((game) => (
                        <li key={game.id}>{game.title}</li>
                    ))}
                </ul>)}

                </p>
              
            </div>
        )

}
export default Spisok