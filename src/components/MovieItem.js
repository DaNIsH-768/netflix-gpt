import {IMAGE_URL} from "../utils/API_KEY";

const MovieItem = ({image}) => {
    return (
        <div >
            <div className=" w-52 mr-4 hover:cursor-pointer transition-all duration-300 ease-out hover:scale-125">
                <img src={IMAGE_URL+image} alt={"poster"}
                className="rounded-md"/>
            </div>
        </div>
    )
}

export default MovieItem;