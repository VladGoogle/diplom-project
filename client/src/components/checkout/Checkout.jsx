import './style.css';
import { useState, useEffect } from 'react';
import AxiosInstance from '../../utils/axios/instance';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AddedWallet from '../settingsTabs/Wallet/AddedWallet';
import WalletForm from '../settingsTabs/Wallet/WalletForm';
import MyOrdersSmall from './MyOrdersSmall';
import Select from 'react-select';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .lowercase()
    .trim()
    .max(255, 'Email must be at most 255 characters')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  confirmation: yup.boolean(),
});

const Checkout = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const instance = AxiosInstance();
  const defaultOption = { value: '', label: 'Pickup from Nova Poshta' };
  const [userInfo, setUserInfo] = useState({});
  const [card, setCard] = useState(null);
  const [items, setItems] = useState([]);
  const [itemsTotal, setItemsTotal] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/cart/1');
        setItems(response.data.cartItems);
        setItemsTotal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/user/getByToken');
        setUserInfo(response.data);
        setCard(response.data.card);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/checkoutCities');
        setCities(response.data);
        if (response.data.length > 0) {
          setAddresses(response.data[0].selfCheckoutSections);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await instance.patch('/account/userInfo', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cities.length > 0) {
      setSelectedCity({ value: cities[0].id, label: cities[0].city });
      setAddresses(cities[0].selfCheckoutSections);
    }
  }, [cities]);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    const selectedCityData = cities.find(
      (city) => city.id === selectedOption.value,
    );
    setAddresses(selectedCityData ? selectedCityData.selfCheckoutSections : []);
    setSelectedAddress(null); // Сбросить выбранный адрес
  };

  return (
    <div className="container">
      <div className="checkout__page-inner">
        <section className="checkout__section">
          <h1 className="checkout__title">Checkout</h1>
          <div className="checkout__top-inner">
            <div className="checkout__top--top">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z"
                  fill="#1C7FF3"
                />
                <path
                  d="M27.592 15.112H30.28C31.72 15.112 32.872 15.448 33.736 16.12C34.632 16.792 35.08 17.56 35.08 18.424V49C33.64 49 32.472 48.664 31.576 47.992C30.712 47.32 30.28 46.552 30.28 45.688V21.4C30.28 17.816 29.384 16.024 27.592 16.024C27.304 16.024 27.16 15.88 27.16 15.592C27.16 15.272 27.304 15.112 27.592 15.112Z"
                  fill="#FDFDFD"
                />
              </svg>
              <h4 className="checkout__topright--title">Personal info</h4>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="checkout__top--bottom"
            >
              <div className="checkout__top-fields_top">
                {userInfo.firstName && (
                  <div className="checkout_input-field--name">
                    <input
                      className="checkout_input-field checkout_input-mini"
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      {...register('firstName')}
                      defaultValue={userInfo.firstName}
                    />
                    {errors && errors.firstName && (
                      <p className="error-message">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                )}
                {userInfo.lastName && (
                  <div className="checkout_input-field--surname">
                    <input
                      className="checkout_input-field checkout_input-mini"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      {...register('lastName')}
                      defaultValue={userInfo.lastName}
                    />
                    {errors && errors.lastName && (
                      <p className="error-message">{errors.lastName.message}</p>
                    )}
                  </div>
                )}
              </div>
              {userInfo.email && (
                <div className="checkout__input-box">
                  <input
                    className="checkout_input-field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    {...register('email')}
                    defaultValue={userInfo.email}
                  />
                  {errors && errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>
              )}
              {userInfo.phone && (
                <div className="checkout__input-box">
                  <input
                    className="checkout_input-field"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    {...register('phone')}
                    defaultValue={userInfo.phone}
                  />
                  {errors && errors.phone && (
                    <p className="error-message">{errors.phone.message}</p>
                  )}
                </div>
              )}
              <div className="checkbox__container">
                <input
                  className="checkout_checkbox"
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                />
                <label
                  className="checkout_checkbox-label"
                  htmlFor="confirmation"
                >
                  Call me for confirmation
                </label>
              </div>
              <button type="submit" className="checkout_input-button">
                UPDATE
              </button>
            </form>
          </div>
          <div className="checkout__middle-inner">
            <div className="checkout__middle--top">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z"
                  fill="#1C7FF3"
                />
                <path
                  d="M22.32 44.632H39.84C40.64 44.632 41.344 45 41.952 45.736C42.592 46.472 42.912 47.56 42.912 49H23.328C22.528 49 21.808 48.632 21.168 47.896C20.56 47.16 20.256 46.072 20.256 44.632C20.256 42.968 20.864 41.304 22.08 39.64C23.328 37.976 24.816 36.472 26.544 35.128C28.304 33.752 30.048 32.424 31.776 31.144C33.536 29.832 35.024 28.456 36.24 27.016C37.488 25.544 38.112 24.136 38.112 22.792C38.112 20.712 37.68 19.112 36.816 17.992C35.952 16.872 34.768 16.312 33.264 16.312C30.288 16.312 26.848 18.264 22.944 22.168C22.688 22.392 22.432 22.424 22.176 22.264C21.792 22.136 21.648 21.912 21.744 21.592L22.32 19.432L23.184 15.832C23.248 15.544 23.376 15.336 23.568 15.208C23.792 15.048 24.032 15.048 24.288 15.208C24.352 15.24 24.576 15.512 24.96 16.024C25.376 16.504 25.808 16.68 26.256 16.552C28.528 15.464 30.896 14.92 33.36 14.92C36.112 14.92 38.416 15.608 40.272 16.984C42.128 18.328 43.056 20.264 43.056 22.792C43.056 24.968 42.336 27 40.896 28.888C39.488 30.744 37.76 32.328 35.712 33.64C33.696 34.952 31.664 36.184 29.616 37.336C27.6 38.488 25.872 39.688 24.432 40.936C23.024 42.184 22.32 43.416 22.32 44.632Z"
                  fill="#FDFDFD"
                />
              </svg>
              <h4 className="checkout__topright--title">
                Delivery information
              </h4>
            </div>
            <div className="checkout__middle--bottom">
              <Select
                className="checkout_input-field custom-select"
                name="city"
                id="city"
                options={cities.map((city) => ({
                  value: city.id,
                  label: city.city,
                }))}
                isSearchable={true}
                onChange={handleCityChange}
                value={selectedCity}
              />
              <Select
                className="checkout_input-field custom-select"
                name="delivery_type"
                id="delivery_type"
                options={[defaultOption]}
                defaultValue={defaultOption}
              />
              <Select
                className="checkout_input-field custom-select"
                name="addresses"
                id="addresses"
                type="text"
                placeholder="Choose the address"
                options={addresses.map((address) => ({
                  value: address.id,
                  label: address.sectionAddress,
                }))}
                isSearchable={true}
                value={selectedAddress} // Привязать выбранный адрес
                onChange={(selectedOption) =>
                  setSelectedAddress(selectedOption)
                }
              />
              <textarea
                className="delivery_comment"
                name="delivery_comment"
                id="delivery_comment"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="checkout__bottom-inner">
            <div className="checkout__bottom--top">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z"
                  fill="#1C7FF3"
                />
                <path
                  d="M36.624 31.768C38.256 32.184 39.664 32.84 40.848 33.736C42.032 34.6 42.896 35.592 43.44 36.712C43.984 37.8 44.304 38.968 44.4 40.216C44.528 41.432 44.304 42.632 43.728 43.816C43.184 44.968 42.4 46.024 41.376 46.984C40.384 47.912 39.024 48.648 37.296 49.192C35.6 49.768 33.68 50.056 31.536 50.056C26.768 50.056 23.424 48.808 21.504 46.312C20.192 44.648 19.872 42.968 20.544 41.272C21.504 39.64 22.944 38.76 24.864 38.632C24.48 39.72 24.368 40.872 24.528 42.088C24.688 43.272 24.992 44.36 25.44 45.352C25.888 46.312 26.64 47.112 27.696 47.752C28.784 48.392 30.064 48.712 31.536 48.712C33.392 48.712 34.928 48.152 36.144 47.032C37.392 45.88 38.144 44.504 38.4 42.904C38.688 41.272 38.704 39.656 38.448 38.056C38.192 36.456 37.504 35.096 36.384 33.976C35.296 32.824 33.968 32.248 32.4 32.248L32.448 31.288C33.824 31.288 35.008 30.776 36 29.752C37.024 28.696 37.696 27.432 38.016 25.96C38.336 24.456 38.416 22.968 38.256 21.496C38.128 19.992 37.584 18.728 36.624 17.704C35.696 16.648 34.48 16.12 32.976 16.12C30.768 16.12 29.088 16.776 27.936 18.088C26.816 19.368 26.24 21.064 26.208 23.176C26.208 24.232 25.84 24.76 25.104 24.76C24.72 24.76 24.352 24.616 24 24.328C23.648 24.008 23.408 23.624 23.28 23.176L21.36 16.936C21.296 16.648 21.408 16.44 21.696 16.312C21.952 16.152 22.192 16.184 22.416 16.408C23.376 17.464 24.128 17.992 24.672 17.992C24.864 17.992 25.056 17.944 25.248 17.848C27.104 15.896 29.664 14.92 32.928 14.92C34.912 14.92 36.672 15.272 38.208 15.976C39.744 16.68 40.896 17.576 41.664 18.664C42.464 19.752 42.96 20.968 43.152 22.312C43.376 23.624 43.28 24.904 42.864 26.152C42.48 27.368 41.744 28.504 40.656 29.56C39.568 30.584 38.224 31.32 36.624 31.768Z"
                  fill="#FDFDFD"
                />
              </svg>
              <h4 className="checkout__topright--title">Payment</h4>
            </div>
            <div className="checkout__bottom--bottom">
              <select
                className="checkout_input-field"
                name="payment_method"
                id="payment_method"
              >
                <option value="online_payment">Online Payment</option>
              </select>
              <div>
                <div className="checkout__bottom-bank_cards">
                  {card ? <AddedWallet card={card} /> : <WalletForm />}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="myorder__section">
          <h1 className="myorder__title">Your order</h1>
          <div className="myorder__titles">
            <div className="myorder__titles-left">
              <span className="myorder__titles-title">Title</span>
            </div>
            <div className="myorder__titles-right">
              <span className="myorder__price-title myorder-title">Price</span>
              <span className="myorder__quantity-title myorder-title">QTY</span>
              <span className="myorder__subtotal-title myorder-title">
                Subtotal
              </span>
            </div>
          </div>
          <ul className="myorder__list">
            {items.map((obj, id) => {
              return (
                <MyOrdersSmall
                  key={id}
                  subTotalPrice={obj.subTotalPrice}
                  itemId={obj.id}
                  price={obj.product.price}
                  name={obj.product.name}
                  subcategory={obj.product.subcategory.name}
                  cartImage={obj.product.productImages[0]?.url}
                  quantity={obj.quantity}
                />
              );
            })}
          </ul>
          <div className="myorder__summary">
            <div className="myorder__summary-top">
              <span className="myorder__summary-title">Summary:</span>
              <span className="myorder__summary-price">
                {itemsTotal.totalPrice ? itemsTotal.totalPrice.toFixed(2) : ''}$
              </span>
            </div>
            <div className="myorder__summary-bottom">
              <span className="delivery__title">Delivery:</span>
              <span className="delivery__price">10.00$</span>
            </div>
          </div>
          <button className="myorder__confirmation">CONFIRM THE ORDER</button>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
