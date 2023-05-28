import "./style.css"
import Counter from "../counter/Counter";

function CartItem({ cartImage, subcategory, price, name, subTotalPrice, itemId, onRemoveItem }) {

    const handleRemove = () => {
        onRemoveItem(itemId);
      };
    

    return (
            <div className="cart__component">
                <li className="cart__item">
                    <div className="cart__item-inner">
                        <div className="cart__item-left">
                            <svg onClick={() => handleRemove()} className="cart__remove-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5666 4.56639C20.641 4.492 20.7 4.4037 20.7403 4.30652C20.7805 4.20934 20.8012 4.10518 20.8012 3.99999C20.8012 3.89479 20.7805 3.79063 20.7403 3.69345C20.7 3.59627 20.641 3.50797 20.5666 3.43358C20.4922 3.3592 20.4039 3.3002 20.3068 3.25995C20.2096 3.21969 20.1054 3.19897 20.0002 3.19897C19.895 3.19897 19.7909 3.21969 19.6937 3.25995C19.5965 3.3002 19.5082 3.3592 19.4338 3.43358L12.0002 10.8688L4.56663 3.43358C4.49225 3.3592 4.40395 3.3002 4.30676 3.25995C4.20958 3.21969 4.10542 3.19897 4.00023 3.19897C3.89504 3.19897 3.79088 3.21969 3.6937 3.25995C3.59651 3.3002 3.50821 3.3592 3.43383 3.43358C3.35945 3.50797 3.30045 3.59627 3.26019 3.69345C3.21994 3.79063 3.19922 3.89479 3.19922 3.99999C3.19922 4.10518 3.21994 4.20934 3.26019 4.30652C3.30045 4.4037 3.35945 4.492 3.43383 4.56639L10.869 12L3.43383 19.4336C3.28361 19.5838 3.19922 19.7875 3.19922 20C3.19922 20.2124 3.28361 20.4162 3.43383 20.5664C3.58405 20.7166 3.78779 20.801 4.00023 20.801C4.21267 20.801 4.41641 20.7166 4.56663 20.5664L12.0002 13.1312L19.4338 20.5664C19.584 20.7166 19.7878 20.801 20.0002 20.801C20.2127 20.801 20.4164 20.7166 20.5666 20.5664C20.7168 20.4162 20.8012 20.2124 20.8012 20C20.8012 19.7875 20.7168 19.5838 20.5666 19.4336L13.1314 12L20.5666 4.56639Z" fill="#050630" />
                            </svg>
                            <img src={cartImage} className="cart__image" alt="cart__image" />
                            <div className="cart__item-info">
                                <div className="cart__item-info--top">
                                    <span className="cart__item-category">
                                        {subcategory}
                                    </span>
                                    <span className="cart__item-title">
                                        {name}
                                    </span>
                                </div>
                                <div className="cart__item-info--bottom">
                                    <span className="cart__item-id">
                                        Product id:{itemId}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart__item-right">
                            <div className="cart__item-prices">
                                <span className="cart__item-price">
                                    {price}$
                                </span>
                                <div className="cart__item-quantity">
                                    <Counter />
                                </div>
                                <div className="cart__item-subtotal">
                                    {subTotalPrice.toFixed(2)}$
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
    );
}

export default CartItem;