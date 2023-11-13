import ProductsSlider from '../components/swiper/Slider';
import { useState, useEffect, useContext } from 'react';
import AxiosInstance from '../utils/axios/instance';
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Comment from '../components/comment/Comment';
import { TokenContext } from '../TokenContext';

const Product = () => {

  const instance = AxiosInstance();
  const { loggedIn } = useContext(TokenContext);
  const [productInfo, setProductInfo] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [commentInfo, setCommentInfo] = useState([]);
  const { id } = useParams();
  const discountPercentage = ((productInfo.price - productInfo.discountPrice) / productInfo.price) * 100;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/product/${id}`);
        if (loggedIn) {
          setProductInfo(response.data.product);
          setProductImages(response.data.product.productImages);
        } else {
          setProductInfo(response.data);
          setProductImages(response.data.productImages);
        }
  
        // Сохраняем данные в localStorage

      } catch (error) {
        console.log(error);
      }
    };
  
    // При загрузке компонента проверяем наличие сохраненных данных в localStorage
    const storedProductInfo = localStorage.getItem(`productInfo_${id}`);
    const storedProductImages = localStorage.getItem(`productImages_${id}`);
    
    if (storedProductInfo && storedProductImages) {
      setProductInfo(JSON.parse(storedProductInfo));
      setProductImages(JSON.parse(storedProductImages));
    } else {
      fetchData();
    }
  }, [id, loggedIn]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/product/${id}/comments`);
        setCommentInfo(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = async (item) => {
    try {
      await instance.post("/carts", { productId: item.id, quantity: 1 });
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddToCartClick = async () => {
    if (!isAddingToCart) {
      setIsAddingToCart(true);
      try {
        await handleAddToCart(productInfo); // Используйте await для дожидания завершения операции
        setIsAddedToCart(true);
      } catch (error) {
        console.error(error);
      }
      setIsAddingToCart(false);
    }
  };



  return (
    <>
      <section className="goods">
        <div className="container">
          <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item breadcrumbs__item-home">
                <NavLink to="/" className="breadcrumbs__link">
                  <svg
                    alt="home"
                    className="home__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_148_1167)">
                      <path
                        d="M22.4733 11.5266L12.4733 1.52663C12.3484 1.40246 12.1795 1.33276 12.0033 1.33276C11.8272 1.33276 11.6583 1.40246 11.5333 1.52663L1.53335 11.5266C1.42413 11.6542 1.36706 11.8182 1.37354 11.986C1.38002 12.1538 1.44958 12.3129 1.56831 12.4317C1.68704 12.5504 1.8462 12.62 2.01398 12.6264C2.18177 12.6329 2.34582 12.5758 2.47335 12.4666L12 2.93996L21.5267 12.4733C21.6542 12.5825 21.8183 12.6396 21.9861 12.6331C22.1538 12.6266 22.313 12.5571 22.4317 12.4383C22.5505 12.3196 22.62 12.1604 22.6265 11.9927C22.633 11.8249 22.5759 11.6608 22.4667 11.5333L22.4733 11.5266Z"
                        fill="#1C7FF3"
                      />
                      <path
                        d="M18.6667 21.3334H15.3333V14.6668H8.66667V21.3334H5.33333V12.0001L4 13.3334V21.3334C4 21.687 4.14048 22.0262 4.39052 22.2762C4.64057 22.5263 4.97971 22.6668 5.33333 22.6668H10V16.0001H14V22.6668H18.6667C19.0203 22.6668 19.3594 22.5263 19.6095 22.2762C19.8595 22.0262 20 21.687 20 21.3334V13.1734L18.6667 11.8401V21.3334Z"
                        fill="#1C7FF3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_148_1167">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    alt="arrow"
                    className="breadcrumbs__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </NavLink>
              </li>
              {productInfo.category && (
                <li className="breadcrumbs__item">
                  <a href="#" className="breadcrumbs__link">
                    <span className="breadcrumbs__text">
                      {productInfo.category.name}
                    </span>
                    <svg
                      alt="arrow"
                      className="breadcrumbs__icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </a>
                </li>
              )}
              {productInfo.subcategory && (
                <li className="breadcrumbs__item">
                  <a href="#" className="breadcrumbs__link">
                    <span className="breadcrumbs__text">{productInfo.subcategory.name}</span>
                    <svg
                      alt="arrow"
                      className="breadcrumbs__icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </a>
                </li>
              )}
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  <span className="breadcrumbs__text">{productInfo.name}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="goods__inner">
            <div className="goods__left">
              {productImages && productImages.length > 0 && (
                <div>
                  <ProductsSlider images={productImages} />
                </div>
              )}
              <p className="goods__description">
                {productInfo.description}
              </p>
            </div>
            <div className="goods__right">
              <div className="goods__name">
                <div className="goods__name-top">
                  <div className="goods__company">{productInfo.subcategory && productInfo.subcategory.name}</div>
                  <div className="goods__id">
                    Article №: <b>{productInfo.id}</b>
                  </div>
                </div>
                <div className="goods__name-bottom">
                  <div className="goods__title">{productInfo.name}</div>
                </div>
              </div>
              <div className="goods__price-top">
                {productInfo.discountPrice &&
                  <div className="goods__price-old">
                    <span className="goods__price-old--title goods__price-title">
                      Old price
                    </span>
                    <span className="goods__price-old--text">{productInfo.price}$</span>
                  </div>
                }
                <div className="goods__delivery-cost">
                  <span className="goods__delivery-cost--text">
                    The cost of delivery goods to{' '}
                    <b className="goods__delivery-cost--city">Odesa - 10$</b>
                  </span>
                </div>
              </div>
              <div className="goods__price-bottom">
                <div className="goods__new-price">
                  {productInfo.discountPrice ?
                    (
                      <span className="goods__price-new--title goods__price-title">
                        New price
                      </span>
                    ) : (
                      <span className="goods__price-new--title goods__price-title">
                        Price
                      </span>
                    )
                  }
                  {productInfo.discountPrice ?
                    (
                      <span className="goods__price-new--text_red">{(productInfo.discountPrice ? productInfo.discountPrice.toFixed(2) : productInfo.price)}$</span>
                    ) : (
                      <span className="goods__price-new--text">{(productInfo.discountPrice ? productInfo.discountPrice.toFixed(2) : productInfo.price)}$</span>
                    )}
                </div>
                <svg
                  alt="line"
                  className="vertical-line"
                  width="2"
                  height="60"
                  viewBox="0 0 2 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V46" stroke="#D9D9D9" />
                </svg>

                <>
                  <div className="goods__new-discount">
                    <span className="goods__discount-title goods__price-title">
                      Discount
                    </span>
                    {productInfo.discountPrice ?
                      (
                        <span className="goods__discount-text goods__price-text">
                          {discountPercentage.toFixed(0)}%[{productInfo.price - productInfo.discountPrice.toFixed(2)}$]
                        </span>
                      ) : (
                        <span className="goods__discount-text goods__price-text">
                          Soon!
                        </span>
                      )}
                  </div>
                  <svg
                    alt="line"
                    className="vertical-line"
                    width="2"
                    height="60"
                    viewBox="0 0 2 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 0V46" stroke="#D9D9D9" />
                  </svg>
                  <div className="goods__likes-box">
                    <svg className='goods__likes-icon' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M41.7188 7.5C36.8789 7.5 32.6414 9.58125 30 13.0992C27.3586 9.58125 23.1211 7.5 18.2812 7.5C14.4287 7.50434 10.7351 9.0367 8.0109 11.7609C5.2867 14.4851 3.75434 18.1787 3.75 22.0313C3.75 38.4375 28.0758 51.7172 29.1117 52.2656C29.3848 52.4125 29.69 52.4894 30 52.4894C30.31 52.4894 30.6152 52.4125 30.8883 52.2656C31.9242 51.7172 56.25 38.4375 56.25 22.0313C56.2457 18.1787 54.7133 14.4851 51.9891 11.7609C49.2649 9.0367 45.5713 7.50434 41.7188 7.5ZM30 48.4688C25.7203 45.975 7.5 34.6148 7.5 22.0313C7.50372 19.173 8.64079 16.4329 10.6619 14.4119C12.6829 12.3908 15.423 11.2537 18.2812 11.25C22.8398 11.25 26.6672 13.6781 28.2656 17.5781C28.4069 17.922 28.6472 18.2162 28.956 18.4232C29.2648 18.6302 29.6282 18.7407 30 18.7407C30.3718 18.7407 30.7352 18.6302 31.044 18.4232C31.3528 18.2162 31.5931 17.922 31.7344 17.5781C33.3328 13.6711 37.1602 11.25 41.7188 11.25C44.577 11.2537 47.3171 12.3908 49.3381 14.4119C51.3592 16.4329 52.4963 19.173 52.5 22.0313C52.5 34.5961 34.275 45.9727 30 48.4688Z" fill="#FDEB46" />
                    </svg>
                    <div className="goods__likes-right">
                      <span className="goods__likes-title goods__price-title">Added to wishlist</span>
                      <span className="goods__likes-text goods__price-text">{productInfo.wishlistCount}{" "}times!</span>
                    </div>
                  </div>
                </>


              </div>
              <span className="goods__in-stock">In stock: {productInfo.qtyInStock}</span>
              <div className="goods__buttons">
                {!isAddedToCart ?
                  (
                    <button className="goods__buttons-add" onClick={handleAddToCartClick}>ADD TO CART</button>
                  )
                  :
                  (
                    <button className="goods__buttons-add" style={{ backgroundColor: '#57DC19', color: "#FDFDFD" }}>Thank you!</button>
                  )
                }
                <button className="goods__buttons-buy">BUY IN ONE CLICK</button>
              </div>
              
              <h3 className="product__reviews">
                Reviews
              </h3>
              {commentInfo.length > 0 ? (
              <ul className="cart-list">
                {commentInfo
                  .slice(0, 2)
                  .map((obj, id) => {
                    return (
                      <Comment
                        key={id}
                        rate={obj.rate[0]}
                        text={obj.text}
                        date={obj.createdAt}
                        name={obj.user.firstName}
                        surname={obj.user.lastName}
                      />
                    );
                  })}
              </ul> 
              ) : (
                <h4 className="product__reviews-empty">
                  There are no reviews on this product yet. You can write them by clicking on the link below
                </h4>
              )}
              <NavLink to={`/reviews/${id}`} className="comment__link">
                    More Reviews
              </NavLink>
              <div className="care__instructions">
                <div className="care__instrucions-top">
                  <svg
                    alt="exclamation_mark"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_288)">
                      <path
                        d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z"
                        fill="#1C7FF3"
                      />
                      <path
                        d="M10.5029 16.4999C10.5029 16.3029 10.5417 16.1079 10.6171 15.9259C10.6925 15.7439 10.803 15.5786 10.9423 15.4393C11.0816 15.3 11.2469 15.1895 11.4289 15.1141C11.6109 15.0387 11.8059 14.9999 12.0029 14.9999C12.1999 14.9999 12.395 15.0387 12.577 15.1141C12.7589 15.1895 12.9243 15.3 13.0636 15.4393C13.2029 15.5786 13.3134 15.7439 13.3887 15.9259C13.4641 16.1079 13.5029 16.3029 13.5029 16.4999C13.5029 16.8978 13.3449 17.2793 13.0636 17.5606C12.7823 17.8419 12.4008 17.9999 12.0029 17.9999C11.6051 17.9999 11.2236 17.8419 10.9423 17.5606C10.661 17.2793 10.5029 16.8978 10.5029 16.4999ZM10.6499 7.49243C10.63 7.30319 10.65 7.11187 10.7087 6.93087C10.7675 6.74988 10.8636 6.58325 10.9909 6.44181C11.1182 6.30037 11.2738 6.18727 11.4476 6.10986C11.6215 6.03244 11.8096 5.99243 11.9999 5.99243C12.1902 5.99243 12.3784 6.03244 12.5522 6.10986C12.726 6.18727 12.8817 6.30037 13.009 6.44181C13.1362 6.58325 13.2324 6.74988 13.2911 6.93087C13.3499 7.11187 13.3699 7.30319 13.3499 7.49243L12.8249 12.7529C12.8073 12.9596 12.7127 13.1521 12.56 13.2924C12.4072 13.4327 12.2073 13.5105 11.9999 13.5105C11.7925 13.5105 11.5927 13.4327 11.4399 13.2924C11.2871 13.1521 11.1926 12.9596 11.1749 12.7529L10.6499 7.49243Z"
                        fill="#1C7FF3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_288">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4 className="care__instructions-title">
                    Care Instructions
                  </h4>
                </div>
                <div className="care__instructions-bottom">
                  <div className="care_instructions-text">
                    Please thoroughly read the user manual before using the product. It contains essential instructions, safety precautions, and troubleshooting tips that will help you navigate the product effectively.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
