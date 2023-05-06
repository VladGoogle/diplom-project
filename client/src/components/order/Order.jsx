import './style.css'
import { useState } from 'react';

const Order = ({ status, title, img, orderStatusImg, quantity, price, pickup, delivery, total }) => {

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <li className="orders__tab" onClick={toggleContent}>
      <div className="orders__top">
        <div className="orders__tab-left">
          <img src={orderStatusImg} alt="order status" className="orders__tab-status--image" />
          <div className="orders__tab-status--info">
            <span className="order__tab-status--id">
              454534
            </span>
            <h3 className="orders__tab-status--title">
              {status}
            </h3>
          </div>
        </div>
        {!showContent && (
          <div className="orders__tab-middle">
            <span className="orders__tab-price--title">
              Order price
            </span>
            <h3 className="orders__tab-price">
              {price}
            </h3>
          </div>
        )}
        <div className="orders__tab-right">
          {!showContent ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10H7Z" fill="#050630" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14L12 9L17 14H7Z" fill="#1C7FF3" />
            </svg>
          )}
        </div>
      </div>
      {showContent && (
        <div className="orders__content">
          <div className="orders__content-left">
            <div className="delivery__info">
              <h4 className="delivery__info-title">
                Information about delivery
              </h4>
              <p className="delivery__company">
                {delivery}
              </p>
              <button className="delivery__pickup">
                {pickup}
              </button>
              <div className="delivery__schedule">
                <h4 className="delivery__schedule-title">
                  Schedule:
                </h4>
                <p className="delivery__schedule-workdays">
                  Mn-St: 09:00-20:00
                </p>
                <p className="delivery__schedule-weekends">
                  Sunday: 10:00-18:00
                </p>
              </div>
            </div>
            <div className="delivery__info-personal">
              <div className="delivery__info-receiver">
                <p className="delivery__info-reveiver--name">
                  John Doe
                </p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 16V16.01M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#1C7FF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p className="delivery__info-receiver-tel">
                +380325003405
              </p>
              <p className="delivery__info-receiver-email">
                LaPigeon@gmail.com
              </p>
            </div>
            <div className="delivery__info-links">
              <button className="delivery__info-receipt">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 22C5.16667 22 4.45833 21.7083 3.875 21.125C3.29167 20.5416 3 19.8333 3 19V17C3 16.7166 3.096 16.479 3.288 16.287C3.48 16.095 3.71733 15.9993 4 16H6V2.72495C6 2.57495 6.06667 2.48328 6.2 2.44995C6.33333 2.41662 6.46667 2.46662 6.6 2.59995L7.5 3.49995L8.65 2.34995C8.75 2.24995 8.86667 2.19995 9 2.19995C9.13333 2.19995 9.25 2.24995 9.35 2.34995L10.5 3.49995L11.65 2.34995C11.75 2.24995 11.8667 2.19995 12 2.19995C12.1333 2.19995 12.25 2.24995 12.35 2.34995L13.5 3.49995L14.65 2.34995C14.75 2.24995 14.8667 2.19995 15 2.19995C15.1333 2.19995 15.25 2.24995 15.35 2.34995L16.5 3.49995L17.65 2.34995C17.75 2.24995 17.8667 2.19995 18 2.19995C18.1333 2.19995 18.25 2.24995 18.35 2.34995L19.5 3.49995L20.4 2.59995C20.5333 2.46662 20.6667 2.41228 20.8 2.43695C20.9333 2.46162 21 2.55762 21 2.72495V19C21 19.8333 20.7083 20.5416 20.125 21.125C19.5417 21.7083 18.8333 22 18 22H6ZM18 20C18.2833 20 18.521 19.9039 18.713 19.712C18.905 19.52 19.0007 19.2826 19 19V4.99995H8V16H16C16.2833 16 16.521 16.096 16.713 16.288C16.905 16.48 17.0007 16.7173 17 17V19C17 19.2833 17.096 19.521 17.288 19.7129C17.48 19.9049 17.7173 20.0006 18 20ZM9.975 8.99995C9.69167 8.99995 9.45833 8.90395 9.275 8.71195C9.09167 8.51995 9 8.28262 9 7.99995C9 7.71662 9.096 7.47895 9.288 7.28695C9.48 7.09495 9.71733 6.99928 10 6.99995H14C14.2833 6.99995 14.521 7.09595 14.713 7.28795C14.905 7.47995 15.0007 7.71728 15 7.99995C15 8.28328 14.904 8.52095 14.712 8.71295C14.52 8.90495 14.2827 9.00062 14 8.99995H9.975ZM9.975 12C9.69167 12 9.45833 11.904 9.275 11.712C9.09167 11.52 9 11.2826 9 11C9 10.7166 9.096 10.479 9.288 10.287C9.48 10.095 9.71733 9.99928 10 9.99995H14C14.2833 9.99995 14.521 10.096 14.713 10.288C14.905 10.48 15.0007 10.7173 15 11C15 11.2833 14.904 11.521 14.712 11.713C14.52 11.905 14.2827 12.0006 14 12H9.975ZM17 8.99995C16.7167 8.99995 16.479 8.90395 16.287 8.71195C16.095 8.51995 15.9993 8.28262 16 7.99995C16 7.71662 16.096 7.47895 16.288 7.28695C16.48 7.09495 16.7173 6.99928 17 6.99995C17.2833 6.99995 17.521 7.09595 17.713 7.28795C17.905 7.47995 18.0007 7.71728 18 7.99995C18 8.28328 17.904 8.52095 17.712 8.71295C17.52 8.90495 17.2827 9.00062 17 8.99995ZM17 12C16.7167 12 16.479 11.904 16.287 11.712C16.095 11.52 15.9993 11.2826 16 11C16 10.7166 16.096 10.479 16.288 10.287C16.48 10.095 16.7173 9.99928 17 9.99995C17.2833 9.99995 17.521 10.096 17.713 10.288C17.905 10.48 18.0007 10.7173 18 11C18 11.2833 17.904 11.521 17.712 11.713C17.52 11.905 17.2827 12.0006 17 12ZM6 20H15V18H5V19C5 19.2833 5.096 19.521 5.288 19.7129C5.48 19.9049 5.71733 20.0006 6 20Z" fill="#1C7FF3" />
                </svg>
                Electronic receipt
              </button>
              <button className="delivery__info-history">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11.78 7H11.72C11.32 7 11 7.32 11 7.72V12.44C11 12.79 11.18 13.12 11.49 13.3L15.64 15.79C15.98 15.99 16.42 15.89 16.62 15.55C16.6702 15.469 16.7036 15.3788 16.7182 15.2846C16.7328 15.1905 16.7283 15.0943 16.705 15.002C16.6817 14.9096 16.64 14.8229 16.5824 14.7469C16.5249 14.671 16.4526 14.6074 16.37 14.56L12.5 12.26V7.72C12.5 7.32 12.18 7 11.78 7Z" fill="#1C7FF3" />
                </svg>
                History
              </button>
            </div>
          </div>
          <div className="orders__content-right">
            <div className="orders__products">
              <h4 className="orders__products-title">
                Products
              </h4>
              <div className="orders__product">
                <img src={img} alt="Product image" />
                <button className="orders__product-link">
                  {title}
                </button>
                <div className="orders__product-price">
                  <h4 className="orders__product-price--title">
                    Price
                  </h4>
                  <span className="orders__product-price--text">
                    {price}
                  </span>
                </div>
                <div className="orders__product-quantity">
                  <h4 className="orders__product-quantity--title">
                    Quantity
                  </h4>
                  <span className="orders__product-quantity--text">
                    {quantity}
                  </span>
                </div>
                <div className="orders__product-total">
                  <h4 className="orders__product-total--title">
                    Total
                  </h4>
                  <span className="orders__product-total--text">
                    299.99$
                  </span>
                </div>
              </div>
            </div>
            <div className="orders__payment">
              <h4 className="orders__payment--title">
                Payment
              </h4>
              <button className="orders__payment--button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 7.125H5.25C4.95163 7.125 4.66548 7.00647 4.4545 6.7955C4.24353 6.58452 4.125 6.29837 4.125 6C4.125 5.70163 4.24353 5.41548 4.4545 5.2045C4.66548 4.99353 4.95163 4.875 5.25 4.875H18C18.0995 4.875 18.1948 4.83549 18.2652 4.76516C18.3355 4.69484 18.375 4.59946 18.375 4.5C18.375 4.40054 18.3355 4.30516 18.2652 4.23484C18.1948 4.16451 18.0995 4.125 18 4.125H5.25C4.75272 4.125 4.27581 4.32254 3.92417 4.67417C3.57254 5.02581 3.375 5.50272 3.375 6V18C3.375 18.4973 3.57254 18.9742 3.92417 19.3258C4.27581 19.6775 4.75272 19.875 5.25 19.875H20.25C20.5484 19.875 20.8345 19.7565 21.0455 19.5455C21.2565 19.3345 21.375 19.0484 21.375 18.75V8.25C21.375 7.95163 21.2565 7.66548 21.0455 7.4545C20.8345 7.24353 20.5484 7.125 20.25 7.125ZM20.625 18.75C20.625 18.8495 20.5855 18.9448 20.5152 19.0152C20.4448 19.0855 20.3495 19.125 20.25 19.125H5.25C4.95163 19.125 4.66548 19.0065 4.4545 18.7955C4.24353 18.5845 4.125 18.2984 4.125 18V7.5C4.44911 7.74427 4.84415 7.87595 5.25 7.875H20.25C20.3495 7.875 20.4448 7.91451 20.5152 7.98483C20.5855 8.05516 20.625 8.15054 20.625 8.25V18.75ZM17.625 13.125C17.625 13.2733 17.581 13.4183 17.4986 13.5417C17.4162 13.665 17.2991 13.7611 17.162 13.8179C17.025 13.8747 16.8742 13.8895 16.7287 13.8606C16.5832 13.8316 16.4496 13.7602 16.3447 13.6553C16.2398 13.5504 16.1684 13.4168 16.1394 13.2713C16.1105 13.1258 16.1253 12.975 16.1821 12.838C16.2389 12.7009 16.335 12.5838 16.4583 12.5014C16.5817 12.419 16.7267 12.375 16.875 12.375C17.0739 12.375 17.2647 12.454 17.4053 12.5947C17.546 12.7353 17.625 12.9261 17.625 13.125Z" fill="#1C7FF3" />
                </svg>
                Bank card online
              </button>
            </div>
            <div className="orders__status">
              <h4 className="orders__status-title">
                Status
              </h4>
              <span className="orders__status-text">
                Paid
              </span>
            </div>
            <div className="orders__delivery">
              <h4 className="orders__delivery-title">
                Delivery
              </h4>
              <span className="orders__delivery-text">
                Free
              </span>
            </div>
            <div className="orders__total">
              <h4 className="orders__total-title">
                Total
              </h4>
              <span className="orders__total-text">
                {total}
              </span>
            </div>
            <button className="orders__button">
              REORDER
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Order;