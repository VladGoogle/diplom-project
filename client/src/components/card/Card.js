import './style.css';
import React from 'react'
import createAxiosInstance from '../../utils/axios/instance';
import { NavLink } from 'react-router-dom';


function Card({ name, img, category, price, onAddToCart, onAddToWishlist, discountPrice, onRemoveFromWishlist, id }) {

  const instance = createAxiosInstance();
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = React.useState(false);
  const [isAddingToWishlist, setIsAddingToWishlist] = React.useState(false);
  const [isInWishlist, setIsInWishlist] = React.useState(false);
  



  const checkWishlist = () => {
    // Отправка GET-запроса на сервер для проверки наличия карточки в wishlist
    const response = instance.get(`/product/${id}`)
      .then(response => {
        // Проверка наличия карточки в wishlist
        const isInWishlist = response.data.wishlistItems.length > 0;
        setIsInWishlist(isInWishlist);
      })
      .catch(error => {
        // Обработка ошибки
        console.log(error);
      });
  };

  React.useEffect(() => {
    checkWishlist();
  }, []);

  const handleAddToCartClick = () => {
    if (!isAddingToCart) {
      setIsAddingToCart(true);
      onAddToCart()
        .then(() => {
          setIsAddedToCart(true);
          setIsAddingToCart(false);
        })
        .catch((error) => {
          console.error(error);
          setIsAddingToCart(false);
        });
    }
  };

  const handleAddToWishlistClick = () => {
    if (!isAddingToWishlist) {
      setIsAddingToWishlist(true);
      onAddToWishlist().then(() => {
        setIsAddedToWishlist(true);
        setIsAddingToWishlist(false);
        setIsInWishlist(true); // Обновление состояния isInWishlist
      });
    }
  };

  const handleRemoveFromWishlist = () => {
    if (isInWishlist) {
      if (!isAddingToWishlist) {
        setIsAddingToWishlist(true);
        onRemoveFromWishlist().then(() => {
          setIsAddedToWishlist(false);
          setIsAddingToWishlist(false);
          setIsInWishlist(false); // Обновление состояния isInWishlist
        });
      }
    }
  };



  return (
    <li className="products__card">
      <div className="products__card-top">
        {discountPrice ? (<span className="products-card__status">Discount</span>) : (<span className="products-card__status--regular">Regular</span>)}
        {isInWishlist ? 
        (
            <svg onClick={handleRemoveFromWishlist}
                  className="products__card-like" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.75 13.2188C33.75 23.0625 19.1545 31.0303 18.533 31.3594C18.3691 31.4475 18.186 31.4936 18 31.4936C17.814 31.4936 17.6309 31.4475 17.467 31.3594C16.8455 31.0303 2.25 23.0625 2.25 13.2188C2.25261 10.9072 3.17202 8.69106 4.80654 7.05654C6.44106 5.42202 8.65719 4.50261 10.9688 4.5C13.8727 4.5 16.4152 5.74875 18 7.85953C19.5848 5.74875 22.1273 4.5 25.0312 4.5C27.3428 4.50261 29.5589 5.42202 31.1935 7.05654C32.828 8.69106 33.7474 10.9072 33.75 13.2188Z" fill="#FDEB46"/>
           </svg>
        ) : (
          <svg onClick={handleAddToWishlistClick}
          className="products__card-like"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
            fill="#FDEB46"
          />
        </svg>
        )}
      </div>
      <div className="product__card-content">
        <div className="card__image-container">
          <NavLink to={`/product/${id}`} className="card__image-link">
            <img src={img} alt={name} className="products__card-image" />
          </NavLink>
        </div>
        <div className="products__card-bottom">
          <span className="products__category-title">{category}</span>
          <span className="product__title">{name}</span>
          <div className="product__prices">
          {discountPrice && <span className="product__price-old">{price.toFixed(2)}$</span>}
          <span className="product__price">{(discountPrice || price).toFixed(2)}$</span>
          </div>
          {!isAddedToCart ?
            (
              <button className="product__button" onClick={handleAddToCartClick}>Buy</button>
            )
            :
            (
              <button className="product__button" style={{ backgroundColor: '#57DC19', color: "#FDFDFD"}}>Thank you!</button>
            )
          }
        </div>
      </div>
    </li>
  );
};

export default Card;
