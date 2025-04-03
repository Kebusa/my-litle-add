import axios from "axios";
import { useState, useEffect} from "react";

function WeatherApp() {
    const [weather, setWeather] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        axios
        .get("https://api.example.com/weather")
        .then((response) => {
            setWeather(response)
        })
        .catch((error) =>{
            setError('404 NOT FOUND')
        })
    },[])

        return(
            <div>
                <p>aya-rayi: {weather || 'Zagruzka....'}</p>

                {error && <p>{error}</p>}
            </div>
        )

}

export default WeatherApp;