import React from "react";
import { useEffect } from "react"
import AxiosInstance from "../../../utils/axios/instance";
import "./style.css"
import Card from "../../card/Card";

const Wishlist = () => {

    const instance = AxiosInstance();
    const [items, setItems] = React.useState([]);
    const [wishlistId, setWishlistId] = React.useState(null);

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
      }, [wishlistId]);

      const handleAddToCart = async (item) => {
        try {
          await instance.post("/carts", { productId: item.productId, quantity: 1 });
        } catch (error) {
          console.log(error);
        }
      }

      const handleAddToWishlist = async (item) => {
        try {
          const response = await instance.post("/wishlists", { productId: item.productId });
          setWishlistId(response.data.id);
        } catch (error) {
          console.log(error); 
        }
      }
    
      const handleRemoveFromWishlist = async (wishlistItemId) => {
        try {
          await instance.patch("/wishlist/removeItem", { wishlistId: 1, wishlistItemId });
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
              const isInWishlist = items.some((item) => item.id === obj.id);
              return (
                <Card
                  key={id}
                  name={obj.product.name}
                  price={obj.product.price}
                  discountPrice={obj.product.discountPrice}
                  img={obj.product.productImages[0].url}
                  onAddToCart={ () => handleAddToCart(obj)}
                  onAddToWishlist={ () => handleAddToWishlist(obj)}
                  onRemoveFromWishlist={() => handleRemoveFromWishlist(obj.id)}
                  itsInWishlist={isInWishlist}
                />
              );
            })}
          </ul>
        </div>
     );
}
 
export default Wishlist;