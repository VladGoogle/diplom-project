import CartItem from "../components/cartItem/CartItem";
import React from "react";
import createAxiosInstance from "../utils/axios/instance";
import { useEffect } from "react";

const Cart = () => {

    const instance = createAxiosInstance();
    const [items, setItems] = React.useState([]);
    const [itemsTotal, setItemsTotal] = React.useState([]);

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
                    {items
                        .map((obj, id) => {
                            return (
                                <CartItem
                                    key={id}
                                    subTotalPrice={obj.subTotalPrice}
                                    onRemoveItem={handleRemoveItem}
                                    itemId={obj.id}
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
                    <button className="cart__button-buy">
                        BUY FOR <span className="cart__buttons-price">{itemsTotal.totalPrice ? itemsTotal.totalPrice.toFixed(2) : ''}$</span>
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