import { NavLink, useNavigate } from 'react-router-dom';
import './style.css';
import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../TokenContext';

function Navbar(props) {
  const { token } = useContext(TokenContext);
  const [showSettingsButton, setShowSettingsButton] = useState(!!token);
  const navigate = useNavigate();

  useEffect(() => {
    setShowSettingsButton(!!token);
  }, [token]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;

    const url = `/catalog?searchQuery=${encodeURIComponent(searchQuery)}`;
    navigate(url);
  };

  return (
    <header className="header">
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-items">
            <button
              onClick={props.onClickCatalog}
              className="header__bottom-catalog"
            >
              <svg
                alt="catalog"
                className="header__button-icon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.125 27H23.625V31.5H19.125V27ZM27 27H31.5V31.5H27V27ZM19.125 19.125H23.625V23.625H19.125V19.125ZM27 19.125H31.5V23.625H27V19.125Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M31.5 12.375H24.75V7.875C24.75 5.9625 23.2875 4.5 21.375 4.5H14.625C12.7125 4.5 11.25 5.9625 11.25 7.875V12.375H4.5C3.825 12.375 3.375 12.825 3.375 13.5V13.725L5.5125 27.3375C5.625 28.4625 6.6375 29.25 7.7625 29.25H16.875V27H7.7625L5.85 14.625H31.5V12.375ZM13.5 7.875C13.5 7.2 13.95 6.75 14.625 6.75H21.375C22.05 6.75 22.5 7.2 22.5 7.875V12.375H13.5V7.875Z"
                  fill="#FDFDFD"
                />
              </svg>
              <span>PRODUCT CATALOG</span>
              <svg
                alt="arrow"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 15L18 22.5L25.5 15H10.5Z" fill="#FDFDFD" />
              </svg>
            </button>
            <div className="header__search-field">
              <form onSubmit={handleSearchSubmit} method="get">
                <div className="header__search-box">
                  <button className="search-field__button">
                    <svg
                      alt="search"
                      className="search-field__image"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.25 21H22.065L21.645 20.595C23.1658 18.831 24.0017 16.579 24 14.25C24 12.3216 23.4282 10.4366 22.3568 8.83319C21.2855 7.22982 19.7627 5.98013 17.9812 5.24218C16.1996 4.50422 14.2392 4.31114 12.3479 4.68735C10.4566 5.06355 8.71927 5.99215 7.35571 7.35571C5.99215 8.71927 5.06355 10.4566 4.68735 12.3479C4.31114 14.2392 4.50422 16.1996 5.24218 17.9812C5.98013 19.7627 7.22982 21.2855 8.83319 22.3568C10.4366 23.4282 12.3216 24 14.25 24C16.665 24 18.885 23.115 20.595 21.645L21 22.065V23.25L28.5 30.735L30.735 28.5L23.25 21ZM14.25 21C10.515 21 7.5 17.985 7.5 14.25C7.5 10.515 10.515 7.5 14.25 7.5C17.985 7.5 21 10.515 21 14.25C21 17.985 17.985 21 14.25 21Z"
                        fill="#050630"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="header__search-input"
                  />
                  <button className="clear-field__button">
                    <svg
                      className="clear-field__image"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.7601 10.3983C26.8361 10.3223 26.8965 10.232 26.9376 10.1326C26.9788 10.0332 27 9.92669 27 9.81912C27 9.71155 26.9788 9.60504 26.9376 9.50566C26.8965 9.40628 26.8361 9.31598 26.7601 9.23991C26.684 9.16385 26.5937 9.10352 26.4943 9.06235C26.395 9.02119 26.2884 9 26.1809 9C26.0733 9 25.9668 9.02119 25.8674 9.06235C25.768 9.10352 25.6777 9.16385 25.6017 9.23991L18 16.8432L10.3983 9.23991C10.3223 9.16385 10.232 9.10352 10.1326 9.06235C10.0332 9.02119 9.92669 9 9.81912 9C9.71155 9 9.60504 9.02119 9.50566 9.06235C9.40628 9.10352 9.31598 9.16385 9.23991 9.23991C9.16385 9.31598 9.10352 9.40628 9.06235 9.50566C9.02119 9.60504 9 9.71155 9 9.81912C9 9.92669 9.02119 10.0332 9.06235 10.1326C9.10352 10.232 9.16385 10.3223 9.23991 10.3983L16.8432 18L9.23991 25.6017C9.0863 25.7553 9 25.9636 9 26.1809C9 26.3981 9.0863 26.6065 9.23991 26.7601C9.39353 26.9137 9.60188 27 9.81912 27C10.0364 27 10.2447 26.9137 10.3983 26.7601L18 19.1568L25.6017 26.7601C25.7553 26.9137 25.9636 27 26.1809 27C26.3981 27 26.6065 26.9137 26.7601 26.7601C26.9137 26.6065 27 26.3981 27 26.1809C27 25.9636 26.9137 25.7553 26.7601 25.6017L19.1568 18L26.7601 10.3983V10.3983Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </button>
                  <button type="submit" className="search__button">
                    Find
                  </button>
                </div>
              </form>
            </div>
            <div className="header__bottom-languages">
              <a className="header__button-language ukr-language">UKR</a>
              <svg
                alt="line"
                className="header__bottom-language_vertical-line vertical-line"
                width="2"
                height="35"
                viewBox="0 0 2 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V46" stroke="#D9D9D9" />
              </svg>
              <a className="header__button-language eng-language">ENG</a>
            </div>
            <nav className="header__bottom-links">
              <ul className="header__bottom-icons">
                <li className="header__bottom-item">
                  <NavLink
                    to="/settings/wishlist"
                    className="header__bottom-icon"
                  >
                    <svg
                      alt="Likes"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.0312 4.5C22.1273 4.5 19.5848 5.74875 18 7.85953C16.4152 5.74875 13.8727 4.5 10.9688 4.5C8.65719 4.50261 6.44106 5.42202 4.80654 7.05654C3.17202 8.69106 2.25261 10.9072 2.25 13.2188C2.25 23.0625 16.8455 31.0303 17.467 31.3594C17.6309 31.4475 17.814 31.4936 18 31.4936C18.186 31.4936 18.3691 31.4475 18.533 31.3594C19.1545 31.0303 33.75 23.0625 33.75 13.2188C33.7474 10.9072 32.828 8.69106 31.1935 7.05654C29.5589 5.42202 27.3428 4.50261 25.0312 4.5ZM18 29.0813C15.4322 27.585 4.5 20.7689 4.5 13.2188C4.50223 11.5038 5.18448 9.85976 6.39712 8.64712C7.60976 7.43448 9.25382 6.75223 10.9688 6.75C13.7039 6.75 16.0003 8.20688 16.9594 10.5469C17.0441 10.7532 17.1883 10.9297 17.3736 11.0539C17.5589 11.1781 17.7769 11.2444 18 11.2444C18.2231 11.2444 18.4411 11.1781 18.6264 11.0539C18.8117 10.9297 18.9559 10.7532 19.0406 10.5469C19.9997 8.20266 22.2961 6.75 25.0312 6.75C26.7462 6.75223 28.3902 7.43448 29.6029 8.64712C30.8155 9.85976 31.4978 11.5038 31.5 13.2188C31.5 20.7577 20.565 27.5836 18 29.0813Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </NavLink>
                </li>
                <li className="header__bottom-item header__account">
                  {showSettingsButton ? (
                    <NavLink
                      to="/settings/account"
                      className="header__bottom-icon"
                    >
                      {
                        <svg
                          className="header__bottom-icon open-popup"
                          alt="account"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6C19.5913 6 21.1174 6.63214 22.2426 7.75736C23.3679 8.88258 24 10.4087 24 12C24 13.5913 23.3679 15.1174 22.2426 16.2426C21.1174 17.3679 19.5913 18 18 18C16.4087 18 14.8826 17.3679 13.7574 16.2426C12.6321 15.1174 12 13.5913 12 12C12 10.4087 12.6321 8.88258 13.7574 7.75736C14.8826 6.63214 16.4087 6 18 6ZM18 21C24.63 21 30 23.685 30 27V30H6V27C6 23.685 11.37 21 18 21Z"
                            stroke="#1C7FF3"
                            strokeWidth="2"
                          />
                        </svg>
                      }
                    </NavLink>
                  ) : (
                    <>
                      {
                        <a
                          href="#"
                          className="header__bottom-icon open-popup"
                          onClick={props.onClickSignup}
                        >
                          <svg
                            alt="account"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6C19.5913 6 21.1174 6.63214 22.2426 7.75736C23.3679 8.88258 24 10.4087 24 12C24 13.5913 23.3679 15.1174 22.2426 16.2426C21.1174 17.3679 19.5913 18 18 18C16.4087 18 14.8826 17.3679 13.7574 16.2426C12.6321 15.1174 12 13.5913 12 12C12 10.4087 12.6321 8.88258 13.7574 7.75736C14.8826 6.63214 16.4087 6 18 6ZM18 21C24.63 21 30 23.685 30 27V30H6V27C6 23.685 11.37 21 18 21Z"
                              stroke="#FDFDFD"
                              strokeWidth="2"
                            />
                          </svg>
                        </a>
                      }
                    </>
                  )}
                </li>
                <li className="header__bottom-item">
                  <NavLink to="/cart" className="header__bottom-icon">
                    <svg
                      alt="cart"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.6169 9.42631C35.5138 9.27975 35.3769 9.16014 35.2178 9.07753C35.0588 8.99492 34.8822 8.95174 34.7029 8.95163H10.8271L9.01976 2.71913C8.31101 0.264938 6.62685 0 5.9361 0H1.11716C0.4995 0 0 0.500063 0 1.11713C0 1.73419 0.500063 2.23422 1.11713 2.23422H5.9355C6.08794 2.23422 6.55312 2.23422 6.87041 3.33053L13.0877 26.1798C13.2227 26.6619 13.662 26.9949 14.1632 26.9949H29.3496C29.821 26.9949 30.2417 26.6996 30.4009 26.2557L35.7537 10.4467C35.8768 10.1041 35.8257 9.72274 35.617 9.42631H35.6169ZM28.5634 24.7613H15.0111L11.455 11.1864H33.1146L28.5634 24.7613ZM26.3477 29.259C24.7941 29.259 23.5352 30.5179 23.5352 32.0715C23.5352 33.6251 24.7941 34.884 26.3477 34.884C27.9014 34.884 29.1602 33.6251 29.1602 32.0715C29.1602 30.5179 27.9014 29.259 26.3477 29.259ZM16.2227 29.259C14.6691 29.259 13.4102 30.5179 13.4102 32.0715C13.4102 33.6251 14.6691 34.884 16.2227 34.884C17.7764 34.884 19.0352 33.6251 19.0352 32.0715C19.0352 30.5179 17.7764 29.259 16.2227 29.259Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
