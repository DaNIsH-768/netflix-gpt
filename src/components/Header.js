import {signOut} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router";

const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {

        });
    }

    return (
        <div className={"flex justify-between absolute w-full px-8 py-2 z-10 bg-gradient-to-b from-black "}>
            <div>
                <img
                    className={"w-36"}
                    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="Logo"/>
            </div>
            {user && (<div className={"flex p-2"}>
                <img src={"https://occ-0-391-1168.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad"}
                    alt="usericon"
                    className="w-16 h-16 mx-2 rounded-lg"
                />
                <button className={"font-bold text-lg text-white"} onClick={handleSignOut}>(Sign Out)</button>
            </div>)}
        </div>
    )
}

export default Header;