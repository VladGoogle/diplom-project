import { logout } from "../../../features/userSlice";
import { useNavigate } from "react-router-dom";

import "./style.css"
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
    }
    
    return (
        <div className="container">
            <div className="logout">
                <h1 className="logout__screen-title">
                    You're going <br/> to log out
                </h1>
                <p className="logout__screen-text">
                    You'll have to re-enter your information to come back.
                </p>
                <button className="logout__button" onClick={(e) => handleLogout(e)}>
                    LOG OUT
                </button>
            </div>
        </div>
    );
}

export default Logout;