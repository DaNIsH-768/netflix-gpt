import {IMAGE_URL} from "../utils/API_KEY";

const MovieItem = ({image}) => {
    return (
        <div>
            <div className="w-52 mr-4">
                <img src={IMAGE_URL+image} alt={"poster"}/>
            </div>
        </div>
    )
}

export default MovieItem;