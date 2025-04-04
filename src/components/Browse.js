import {useDispatch} from "react-redux";
import {removeUser} from "../utils/userSlice";

const Browse = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Browse Page</h1>
        </div>
    )
}

export default Browse;