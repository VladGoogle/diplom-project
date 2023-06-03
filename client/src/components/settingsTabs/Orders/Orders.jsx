import "./style.css"
import Order from "../../order/Order.jsx"
import React from 'react';
import { useState, useEffect } from 'react';
import createAxiosInstance from "../../../utils/axios/instance";


const Orders = () => {

  const instance = createAxiosInstance();
  const [ordersTotal, setOrdersTotal] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/account/orders");
        setOrdersTotal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="orders__settings">
        <h1 className="orders__title">
          My orders
        </h1>
        <div className="orders__search-field">
          <form action="/search" method="get">
            <div className="orders__search-box">
              <div className="orders__input-box">
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
                  className="orders__search-input"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.7601 10.3983C26.8361 10.3223 26.8965 10.232 26.9376 10.1326C26.9788 10.0332 27 9.92669 27 9.81912C27 9.71155 26.9788 9.60504 26.9376 9.50566C26.8965 9.40628 26.8361 9.31598 26.7601 9.23991C26.684 9.16385 26.5937 9.10352 26.4943 9.06235C26.395 9.02119 26.2884 9 26.1809 9C26.0733 9 25.9668 9.02119 25.8674 9.06235C25.768 9.10352 25.6777 9.16385 25.6017 9.23991L18 16.8432L10.3983 9.23991C10.3223 9.16385 10.232 9.10352 10.1326 9.06235C10.0332 9.02119 9.92669 9 9.81912 9C9.71155 9 9.60504 9.02119 9.50566 9.06235C9.40628 9.10352 9.31598 9.16385 9.23991 9.23991C9.16385 9.31598 9.10352 9.40628 9.06235 9.50566C9.02119 9.60504 9 9.71155 9 9.81912C9 9.92669 9.02119 10.0332 9.06235 10.1326C9.10352 10.232 9.16385 10.3223 9.23991 10.3983L16.8432 18L9.23991 25.6017C9.0863 25.7553 9 25.9636 9 26.1809C9 26.3981 9.0863 26.6065 9.23991 26.7601C9.39353 26.9137 9.60188 27 9.81912 27C10.0364 27 10.2447 26.9137 10.3983 26.7601L18 19.1568L25.6017 26.7601C25.7553 26.9137 25.9636 27 26.1809 27C26.3981 27 26.6065 26.9137 26.7601 26.7601C26.9137 26.6065 27 26.3981 27 26.1809C27 25.9636 26.9137 25.7553 26.7601 25.6017L19.1568 18L26.7601 10.3983V10.3983Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </button>
              </div>
              <button type="submit" className="search__button">
                Find
              </button>
            </div>
          </form>
        </div>
        <ul className="orders__list">
        {ordersTotal.map((ordersTotal, id) => {
              return (
                <Order
                  key={id}
                  total={ordersTotal.amount}
                  firstName={ordersTotal.user.firstName}
                  lastName={ordersTotal.user.lastName}
                  email={ordersTotal.user.email}
                  subTotalPrice={ordersTotal.orderItems.subTotalPrice}
                  quantity={ordersTotal.orderItems.quantity}
                />
              );
            })}
        </ul>
      </section>
    </div>
  );
}

export default Orders;
