import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import { TokenContext } from "../../../TokenContext";


const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useContext(TokenContext);

    const handleLogout = () => {
        logout(); 
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
                <button className="logout__button" onClick={handleLogout}>
                    LOG OUT
                </button>
            </div>
        </div>
    );
}

export default Logout;