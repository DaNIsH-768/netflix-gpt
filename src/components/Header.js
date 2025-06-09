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
        <div
            className="flex absolute justify-between items-center w-full px-8 py-4 bg-gradient-to-b from-black z-10">
            {/* Logo */}
            <div>
                <img
                    className="w-32 sm:w-40"
                    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="Netflix Logo"
                />
            </div>

            {/* User Section */}
            {user && (
                <div className="flex items-center space-x-4">
                    <img
                        src="https://occ-0-391-1168.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad"
                        alt="User Icon"
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded"
                    />
                    <button
                        onClick={handleSignOut}
                        className="text-white font-semibold text-sm sm:text-base hover:underline"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>

    )
}

export default Header;