import Header from "./Header";
import {useRef, useState} from "react";
import {validateUser} from "../utils/validate";

const Login = () => {
    const [signup, setSignUp] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    const toggleSignUp = () => {
        setSignUp(!signup);
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = (e) => {
        const msg = validateUser(email.current.value, password.current.value);
        setErrMsg(msg);
    }

    return (
        <div>
        <Header/>
            <div className={"absolute"}>
                <img
                    alt={"background"}
                    src={"https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/GB-en-20250310-TRIFECTA-perspective_00a38f92-f3f2-4466-a761-2b221cc94749_small.jpg"}/>
            </div>
            <div
                className="bg-black bg-opacity-60 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8">
                <h1 className="text-white text-4xl font-bold mb-6 text-center">{signup? "Sign Up" : "Sign In"}</h1>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4">
                    {signup && <input
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
                    <p className={"italic font-bold text-lg px-3 text-red-500"}>{errMsg}</p>
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

        </div>
    )
}
export default Login;