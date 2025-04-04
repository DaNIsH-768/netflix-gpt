import Login from "./Login";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {removeUser, setUser} from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} =user;
                dispatch(setUser({uid, email, displayName}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        })
    }, [])

    return (
        <div>
            <Login/>
        </div>
    )
}

export default Body;