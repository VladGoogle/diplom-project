import CatalogPopup from '../catalogPopup/CatalogPopup';
import Navbar from '../navbar/Navbar';
import NavbarTop from '../navbar/NavbarTop';
import Login from '../signup/Login';
import Registration from '../signup/Signup';
import React from 'react';

const Header = () => {
  const [loginOpened, setLoginOpened] = React.useState(false);
  const [registrationOpened, setRegistrationOpened] = React.useState(false);
  const [catalogOpened, setCatalogOpened] = React.useState(false);
  
  const toggleCatalog = () => {
    setCatalogOpened(!catalogOpened);
  };

    return (
      <>
        {loginOpened && (
          <Login
            onCloseLogin={() => setLoginOpened(false)}
            onClickRegistration={() => {
              setRegistrationOpened(!registrationOpened);
              setLoginOpened(false);
            }}
          />
        )}
        <NavbarTop />
        <Navbar
          onClickCatalog={toggleCatalog}
          onClickSignup={() => {
            setRegistrationOpened(!registrationOpened);
            setLoginOpened(false);
          }}
        />
        {catalogOpened && (
        <CatalogPopup 
          onCloseCatalog={toggleCatalog}
        />
      )}
        {registrationOpened && (
          <Registration
            onCloseRegistration={() => setRegistrationOpened(false)}
            onClickAccount={() => {
              setLoginOpened(!loginOpened);
              setRegistrationOpened(false);
            }}
          />
        )}
      </>
    );
  };

export default Header;
