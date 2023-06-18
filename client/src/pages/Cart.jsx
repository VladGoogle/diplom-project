import CartItem from '../components/cart/CartItem';
import React from 'react';
import AxiosInstance from '../utils/axios/instance';
import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TokenContext } from '../TokenContext';
import SignedOutCart from '../components/cart/SignedOutCart';
import EmptyCart from '../components/cart/EmptyCart';

const Cart = () => {
  const instance = AxiosInstance();
  const [items, setItems] = useState([]);

  const { loggedIn } = useContext(TokenContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/cart/getByToken');
        setItems(response.data.cartItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const totalPrice = items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const handleRemoveItem = async (itemId, cartId) => {
    try {
      await instance.patch('/cart/removeItem', {
        cartId: cartId,
        cartItemId: itemId,
      });

      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="cart">
      {loggedIn ? (
        <>
          {items.length > 0 ? (
            <>
              <div className="container">
                <h2 className="cart__header">Your shopping cart</h2>
                <div className="cart__titles">
                  <div className="cart__titles-left">
                    <span className="cart__titles-title cart__title">
                      Title
                    </span>
                  </div>
                  <div className="cart__titles-right">
                    <span className="cart__price-title cart__title">Price</span>
                    <span className="cart__quantity-title cart__title">
                      QTY
                    </span>
                    <span className="cart__subtotal-title cart__title">
                      Subtotal
                    </span>
                  </div>
                </div>
                <ul className="cart-list">
                  {items.map((obj, id) => {
                    return (
                      <CartItem
                        key={id}
                        cartId={obj.cartId}
                        subTotalPrice={obj.subTotalPrice}
                        onRemoveItem={handleRemoveItem}
                        itemId={obj.id}
                        price={obj.product.price}
                        name={obj.product.name}
                        subcategory={obj.product.subcategory.name}
                        cartImage={obj.product.productImages[0]?.url}
                        quantity={obj.quantity}
                        onQuantityChange={handleQuantityChange}
                      />
                    );
                  })}
                </ul>
                <div className="cart__summary">
                  <div className="cart__summary-top">
                    <span className="cart__summary-title">Summary:</span>
                    <span className="cart__summary-price">
                      {totalPrice.toFixed(2)}$
                    </span>
                  </div>
                  <div className="cart__summary-bottom">
                    <span className="delivery__title">Delivery:</span>
                    <span className="delivery__price">10.00$</span>
                  </div>
                </div>
                <div className="cart__buttons">
                  <NavLink to="/checkout" className="logo">
                    <button className="cart__button-buy">
                      BUY FOR{' '}
                      <span className="cart__buttons-price">
                        {totalPrice.toFixed(2)}$
                      </span>
                    </button>
                  </NavLink>
                  <NavLink to="/" className="logo">
                    <button className="cart__button-continue">
                      CONTINUE SHOPPING
                    </button>
                  </NavLink>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart /> // Отобразить EmptyCart, если корзина пуста
          )}
        </>
      ) : (
        <div className="cart__full-screen">
          <SignedOutCart />
        </div>
      )}
    </section>
  );
};

export default Cart;
