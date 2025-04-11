import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {options} from "../utils/API_KEY";

const Browse = () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies = async () => {
        const rawData = await fetch("https://api.themoviedb.org/3/movie/now_playing", options);
        const json_data = await rawData.json();
        console.log(json_data.results);
    }

    useEffect( () => {
        fetchNowPlayingMovies();
    }, [])

    return (
        <div>
            <h1>Browse Page</h1>
        </div>
    )
}

export default Browse;