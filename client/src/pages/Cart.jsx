import CartItem from "../components/cart/CartItem";
import React from "react";
import createAxiosInstance from "../utils/axios/instance";
import { useEffect, useState, useContext } from "react";
import { NavLink } from 'react-router-dom';
import { TokenContext } from "../TokenContext";
import SignedOutCart from "../components/cart/SignedOutCart";

const Cart = () => {

    const instance = createAxiosInstance();
    const [items, setItems] = React.useState([]);
    const [itemsTotal, setItemsTotal] = React.useState([]);
    const { token } = useContext(TokenContext);
    const [ShowCartItems, setShowCartItems] = useState(!!token);

    useEffect(() => {
        setShowCartItems(!!token);
    }, [token]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get("/cart/1");
                setItems(response.data.cartItems);
                setItemsTotal(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);


    const handleRemoveItem = async (itemId) => {
        try {
            await instance.patch('/cart/removeItem', {
                cartId: 1,
                cartItemId: itemId,
            });

            // Обновите список элементов в корзине после успешного удаления
            const updatedItems = items.filter((item) => item.id !== itemId);
            setItems(updatedItems);
        } catch (error) {
            console.log(error);
        }
    };

    const handleMakeAnOrder = async () => {
        try {
          await instance.post("/cart/1/confirm");
        } catch (error) {
          console.log(error);
        }
      }



    return (
        <section className="cart">
            {ShowCartItems ?
                (
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
                                {items
                                    .map((obj, id) => {
                                        return (
                                            <CartItem
                                                key={id}
                                                subTotalPrice={obj.subTotalPrice}
                                                onRemoveItem={handleRemoveItem}
                                                itemId={obj.id}
                                                price={obj.product.price}
                                                name={obj.product.name}
                                                subcategory={obj.product.subcategory.name}
                                                cartImage={obj.product.productImages[0]?.url}
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
                                        {itemsTotal.totalPrice ? itemsTotal.totalPrice.toFixed(2) : ''}$
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
                                <NavLink to="/checkout" className="logo">
                                    <button onClick={handleMakeAnOrder} className="cart__button-buy">
                                        BUY FOR <span className="cart__buttons-price">{itemsTotal.totalPrice ? itemsTotal.totalPrice.toFixed(2) : ''}$</span>
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
                    <SignedOutCart />
                )}

        </section>
    );
}

export default Cart;