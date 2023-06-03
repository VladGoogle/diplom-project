import React from "react";
import { useEffect } from "react"
import AxiosInstance from "../../../utils/axios/instance";
import "./style.css"
import Card from "../../card/Card";

const Wishlist = () => {

    const instance = AxiosInstance();
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await instance.get("/wishlist/getByToken");
            setItems(response.data.wishlistItems);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const handleAddToCart = async (item) => {
        try {
          await instance.post("/carts", { productId: item.id, quantity: 1 });
        } catch (error) {
          console.log(error);
        }
      }

    return ( 
        <div className="wishlist__settings">
            <h1 className="wishlist__title">
                Wishlist
            </h1>
            <ul className="products-card-list">
            {items
            .map((obj, id) => {
              return (
                <Card
                  key={id}
                  name={obj.product.name}
                  price={obj.product.price}
                  discountPrice={obj.product.discountPrice}
                  img={obj.product.productImages[0].url}
                  onAddToCart={ () => handleAddToCart(obj)}
                />
              );
            })}
          </ul>
        </div>
     );
}
 
export default Wishlist;