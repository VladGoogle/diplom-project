import "./style.css"
import React from "react";
import mastercard from "../../../img/mastercard_big.svg"
import WalletForm from "./WalletForm";
import { useState, useEffect } from "react";
import AxiosInstance from "../../../utils/axios/instance";

const AddedWallet = () => {

    const instance = AxiosInstance();
    const [items, setItems] = React.useState({});
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await instance.get("/user/getByToken");
            setItems(response.data.card);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const handleRemoveWallet = async () => {
        try {
            await instance.delete('/account/card/1');
            setItems({});
            setShowForm(true);
        } catch (error) {
            console.log(error);
        }
    };



        
      const maskCardNumber = (number) => {
        if (!number) {
          return ""; // Возвращаем пустую строку, если номер карточки не определен или пустой
        }
        
        const maskedNumber = number.substring(0, 12).replace(/./g, "*") + number.substring(12);
        return maskedNumber;
      };

    return ( 
        <>
        {showForm ? (
            <WalletForm />
        ) : (
        <div className="added__wallet">
            <div className="added__wallet-top">
                <span className="added__wallet-bankname">
                    Monobank
                </span>
                <img src={mastercard} alt="mastercard" />
            </div>
            <span className="added__wallet-middle">
            {maskCardNumber(items.number)}
            </span>
            <div className="added__wallet-bottom">
                <span className="added__wallet-change">
                    Change
                </span>
                <svg onClick={() => handleRemoveWallet()} className="added__wallet-delete" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#ED2D2D" fill-opacity="0.7"/>
                </svg>
            </div>
        </div>
        )}
        </>
     );
}
 
export default AddedWallet;