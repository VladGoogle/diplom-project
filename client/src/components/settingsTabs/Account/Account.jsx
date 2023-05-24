import "./style.css"
import { useState } from "react";
import createAxiosInstance from "../../../utils/axios/instance";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    phone: yup.string(),
    email: yup.string()
  });

const Account = () => {

    
    const instance = createAxiosInstance();
    const [isOpen, setIsOpen] = useState([false, false]);
  
    const togglePanel = (index) => {
        setIsOpen(prevState => prevState.map((open, i) => i === index ? !open : open));
    };

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
      });

      const onSubmit = async (data) => {
        try {
          const response = await instance.patch("/account/userInfo", data);
          console.log(response.data); 
        } catch (error) {
          console.error(error);
        }
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
                            <form onSubmit={handleSubmit(onSubmit)} action="" className="account__content">
                                <div className="account__tab-inputs">
                                        <input id="firstName" name="firstName" placeholder="First name" type="text" className="account__tab-input" {...register('firstName')}/>
                                        <input id="lastName" name="lastName" placeholder="Last name" type="text" className="account__tab-input" {...register('lastName')}/>
                                </div>
                                <button type="submit" className="account__submit-button">
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
                            <form onSubmit={handleSubmit(onSubmit)} action="" className="account__content">
                                <div className="account__tab-inputs">
                                        <input placeholder="Phone number" type="text" className="account__tab-input" {...register('phone')}/>
                                        <input placeholder="Email" type="email" className="account__tab-input" {...register('email')}/>
                                </div>
                                <button type="submit" className="account__submit-button">
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