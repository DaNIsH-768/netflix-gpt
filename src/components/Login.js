import Header from "./Header";
import {useRef, useState} from "react";
import {validateUser} from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import {useDispatch} from "react-redux";
import {setUser} from "../utils/userSlice";

const Login = () => {
    const [signup, setSignUp] = useState(false);
    const dispatch = useDispatch();

    const toggleSignUp = () => {
        setSignUp(!signup);
    }

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const handleButtonClick = (e) => {
        const msg = validateUser(email.current.value, password.current.value);
        if (msg) { enqueueSnackbar(msg); return;}

        if (signup) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    enqueueSnackbar("Sign Up successfull!", {
                        variant: "success"
                    });
                    updateProfile(user, {
                        displayName: fullName.current.value,
                    }).then(() => {
                        const {uid, email, displayName} = auth.currentUser;
                        dispatch(setUser({uid, email, displayName}));
                    }
                    ).catch((err) => {
                        console.log(err.message);
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    enqueueSnackbar(errorMessage, {
                        variant: "error",
                    })
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    enqueueSnackbar("Sign In successfull!", {
                        variant: "success"
                    })
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    enqueueSnackbar(errorMessage, {
                        variant: "error",
                    })
                });
        }

    }

    return (
        <div>
        <Header/>
            <div className={"absolute h-screen w-screen"}>
                <img
                    className={"h-screen w-screen"}
                    alt={"background"}
                    src={"https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/GB-en-20250310-TRIFECTA-perspective_00a38f92-f3f2-4466-a761-2b221cc94749_small.jpg"}/>
            </div>
            <div
                className="bg-black bg-opacity-60 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8">
                <h1 className="text-white text-4xl font-bold mb-6 text-center">{signup? "Sign Up" : "Sign In"}</h1>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4">
                    {signup && <input
                        ref={fullName}
                        className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                        type="text"
                        placeholder="Full Name"
                    />}
                    <input
                        ref={email}
                        className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        ref={password}
                        className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        onClick={handleButtonClick}
                        className="bg-red-600 text-white rounded-md p-3 hover:bg-red-700 transition-colors duration-200 focus:outline-none"
                        type="submit"
                    >
                        {signup ? "Sign Up" : "Login"}
                    </button>
                </form>
                <p className="text-center text-gray-400 text-sm mt-4">
                    <span>{signup ? "Already have an account?" : "New to Netflix?"} </span>
                    <span onClick={toggleSignUp} className="text-red-600 hover:underline cursor-pointer">{signup ? "Log in now" : "Sign up now"}</span>
                </p>
            </div>
            <SnackbarProvider anchorOrigin={{ vertical: "bottom", horizontal: "center" }} variant={"error"} preventDuplicate={true}/>
        </div>
    )
}
export default Login;