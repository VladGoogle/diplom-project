import "./style.css"

function MyOrdersSmall ({cartImage, subcategory, price, name, itemId, quantity, subTotalPrice}) {

    return (
        <div className="my_order-small__component">
            <li className="my_order-small__item">
                <div className="my_order-small__item-inner">
                    <div className="my_order-small__item-left">
                        <img src={cartImage} className="my_order-small__image" alt="my_order-small__image" />
                        <div className="my_order-small__item-info">
                            <div className="my_order-small__item-info--top">
                                <span className="my_order-small__item-category">
                                    {subcategory}
                                </span>
                                <span className="my_order-small__item-title">
                                    {name}
                                </span>
                            </div>
                            <div className="my_order-small__item-info--bottom">
                                <span className="my_order-small__item-id">
                                    Product id:{itemId}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="my_order-small__item-right">
                        <div className="my_order-small__item-prices">
                            <span className="my_order-small__item-price">
                                {price}$
                            </span>
                            <div className="my_order-small__item-quantity">
                                {quantity}
                            </div>
                            <div className="my_order-small__item-subtotal">
                                {subTotalPrice.toFixed(0)}$
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ div>

    );
}

export default MyOrdersSmall;