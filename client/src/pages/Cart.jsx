import CartItem from "../components/cartItem/CartItem";
import React from "react";

const Cart = () => {

    const [cartItems, setCartItems] = React.useState([]);

    return ( 
        <section className="cart">
        <div className="container">
          <h2 className="cart__header">Your shopping cart</h2>
          <div className="cart__titles">
                <div className="cart__titles-left">
                    <span className="cart__titles-title cart__title">
                        Title
                    </span>
                </div>
                <div className="cart__titles-right">
                    <span className="cart__price-title cart__title">
                        Price
                    </span>
                    <span className="cart__quantity-title cart__title">
                        QTY
                    </span>
                    <span className="cart__subtotal-title cart__title">
                        Subtotal
                    </span>
                </div>
            </div>
            <ul className="cart-list">
            {cartItems
            .map((obj, id) => {
              return (
                <CartItem
                  key={id}
                  name={obj.name}
                  price={obj.price}
                />
              );
            })}
            </ul>
        <div className="cart__summary">
            <div className="cart__summary-top">
                <span className="cart__summary-title">
                    Summary:
                </span>
                <span className="cart__summary-price">
                    1799.95$
                </span>
            </div>
            <div className="cart__summary-bottom">
                <span className="delivery__title">
                    Delivery:
                </span>
                <span className="delivery__price">
                    10.00$
                </span>
            </div>
        </div>
        <div className="cart__buttons">
            <button className="cart__button-buy">
                BUY FOR <span className="cart__buttons-price">1799.95$</span>
            </button>
            <button className="cart__button-continue">
                CONTINUE SHOPPING
            </button>
        </div>
        </div>
      </section>
     );
}
 
export default Cart;