import axios from "axios"
import { useState } from "react"



function Search({onSearch}) {
        const [inLength, setINLength] = useState('')
        const [isLoading, setIsLoading] = useState(false)
        
        async function SearchMovies(e) {
            e.preventDefault()
            if(!inLength.trim()){
                return
            }
            setIsLoading(true);
            try{
                const response = await  axios
                .get(`https://www.omdbadi.com/?apikey=17dec6d0&s=${inLength}`)
                
                if (response.data.Response === 'False') {
                onSearch([])
                }
                else{
                    onSearch(response.data.Search)
                }
            }   
            catch(error){
                console.error("404" + error);
                
            }finally{
                setIsLoading(false)
            }
           
        }
        return(
            <div>
            <form className="search-form" onSubmit={SearchMovies}>
            <input type="text" className="search-input" value={inLength} onChange={(e) => setINLength(e.target.value)} disabled={isLoading} aria-label="фильм шздеу өрісі" placeholder="Фильмнің фтын енгіз" />
            <button type="submit" className="search-button" disabled={isLoading}>{isLoading ? "Іздеу... " : "Табу"}</button>
            </form>
            
            </div>
        )
        
}

export default Search;