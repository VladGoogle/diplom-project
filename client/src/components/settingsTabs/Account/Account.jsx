import "./style.css"
import { useState } from "react";

const Account = () => {

    const [isOpen, setIsOpen] = useState([false, false]);
  
    const togglePanel = (index) => {
        setIsOpen(prevState => prevState.map((open, i) => i === index ? !open : open));
    };

    return (
        <div>
            <section className="account__settings">
                <h1 className="account__title">
                    Account
                </h1>
                <ul className="account__tabs">
                    <li className="account__tab">
                        <div className="account__tab-top" onClick={() => togglePanel(0)}>
                            <h2 className="account__tab-title">
                                Personal info
                            </h2>
                            <svg className="account__tab-button--open" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {isOpen [0] ? (
                                <path d="M14 28L24 18L34 28H14Z" fill="#1C7FF3"/>
                                ) : (
                                <path d="M14 20L24 30L34 20H14Z" fill="#050630"/>
                                )}
                            </svg>           
                        </div>
                        {isOpen [0] && (
                        <div className="account__tab-content">
                            <form action="" className="account__content">
                                <div className="account__tab-inputs">
                                    <input id="firstName" name="firstName" placeholder="First name" type="text" className="account__tab-input" />
                                    <input id="firstName" name="firstName" placeholder="Last name" type="Last name" className="account__tab-input" />
                                </div>
                                <button className="account__submit-button">
                                    SAVE
                                </button>
                            </form>
                        </div>
                        )}
                    </li>
                    <li className="account__tab">
                        <div className="account__tab-top" onClick={() => togglePanel(1)}>
                            <h2 className="account__tab-title">
                                Contacts
                            </h2>
                            <svg className="account__tab-button--open" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {isOpen [1] ? (
                                <path d="M14 28L24 18L34 28H14Z" fill="#1C7FF3"/>
                                ) : (
                                <path d="M14 20L24 30L34 20H14Z" fill="#050630"/>
                                )}
                            </svg>
                        </div>
                        {isOpen[1] && (
                        <div className="account__tab-content">
                            <form action="" className="account__content">
                                <div className="account__tab-inputs">
                                    <input placeholder="Phone number" type="tel" className="account__tab-input" />
                                    <input placeholder="Email" type="email" className="account__tab-input" />
                                </div>
                                <button className="account__submit-button">
                                    SAVE
                                </button>
                            </form>
                        </div>
                        )}
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Account;