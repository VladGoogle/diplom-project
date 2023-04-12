import Navbar from "components/navbar/Navbar";
import Login from "components/signup/Login";
import Registration from "components/signup/Signup";
import React from "react";


const Header = () => {

    const [loginOpened, setLoginOpened] = React.useState(false)
    const [registrationOpened, setRegistrationOpened] = React.useState(false)
    return (
        <>
            {loginOpened && (
            <Login onCloseLogin={() => setLoginOpened(false)} 
                onClickRegistration={() => {
                    setRegistrationOpened(!registrationOpened);
                    setLoginOpened(false);
            }}
            
            />)}
            <Navbar
                onClickSignup={() => {
                    setRegistrationOpened(!registrationOpened);
                    setLoginOpened(false);
                }}
            />
            {registrationOpened && (
                <Registration onCloseRegistration={() => setRegistrationOpened(false)}
                    onClickAccount={() => {
                        setLoginOpened(!loginOpened);
                        setRegistrationOpened(false);
                    }} />
            )}
        </>
    );
};

export default Header;