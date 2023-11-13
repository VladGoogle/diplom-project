import './style.css';
import AxiosInstance from '../../utils/axios/instance';
import { useState, useEffect, useContext } from 'react';
import Card from '../card/Card';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TokenContext } from '../../TokenContext';

const Catalog = () => {
  const instance = AxiosInstance();
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('searchQuery');
  const navigate = useNavigate();
  const { loggedIn } = useContext(TokenContext);

  const queryParams = new URLSearchParams(location.search);
  const selectedCategoryParam = queryParams.get('category');
  const selectedSubcategoryParam = queryParams.get('subcategory');
  const initialSelectedCategory = selectedCategoryParam
    ? parseInt(selectedCategoryParam, 10)
    : null;
  const initialSelectedSubcategory = selectedSubcategoryParam
    ? parseInt(selectedSubcategoryParam, 10)
    : null;

  const togglePanel = (index) => {
    setIsOpen((prevState) =>
      prevState.map((open, i) => (i === index ? !open : open)),
    );
  };

  const handleSubcategoryChange = (subcategoryId) => {
    if (selectedSubcategories.includes(subcategoryId)) {
      setSelectedSubcategories((prevSubcategories) =>
        prevSubcategories.filter((id) => id !== subcategoryId),
      );
    } else {
      setSelectedSubcategories((prevSubcategories) => [
        ...prevSubcategories,
        subcategoryId,
      ]);
    }
  };

  const [items, setItems] = useState([]);
  const [wishlistId, setWishlistId] = useState(null);
  const [wishlistItems, setWishlistItems] = React.useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    initialSelectedCategory,
  );
  const [selectedSubcategories, setSelectedSubcategories] = useState(
    initialSelectedSubcategory ? [initialSelectedSubcategory] : [],
  );
  

  const selectedCategoryName = categories.find(
    (category) => category.id === selectedCategory,
  )?.name;

  const selectedSubcategoryName = subcategories.find(
    (subcategory) => subcategory.id === (selectedSubcategories[0] || 0),
  )?.name;

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (searchQuery) {
          response = await instance.get(`/search/?searchQuery=${searchQuery}`);
        } else {
          response = await instance.get('/products');
        }
        if (loggedIn) {
          setItems(response.data.products);
          setWishlistItems(response.data.wishlist);
        } else {
          setItems(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    

    fetchData();
  }, [
    wishlistId,
    selectedCategory,
    selectedSubcategories,
    searchQuery,
    loggedIn,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/subcategories');
        setSubcategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      navigate(`/catalog?category=${selectedCategory}`);
    }
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedSubcategories([]);
  }, [selectedCategory]);

  const handleAddToCart = async (item) => {
    try {
      await instance.post('/carts', { productId: item.id, quantity: 1 });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToWishlist = async (item) => {
    try {
      const response = await instance.post('/wishlists', {
        productId: item.id,
      });
      setWishlistId(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromWishlist = async (item) => {
    try {
      const wishlistItem = wishlistItems.wishlistItems.find(
        (wishlistItem) => wishlistItem.productId === item.id,
      );
      if (wishlistItem) {
        await instance.patch('/wishlist/removeItem', {
          wishlistId: wishlistItems.id,
          wishlistItemId: wishlistItem.id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <section className="catalog">
        <h1 className="catalog__title">
          {selectedSubcategoryName ? (
            <>
              {selectedCategoryName}
            </>
          ) : (
            selectedCategoryName
          )}
        </h1>
        <div className="catalog__inner">
          <div className="catalog__filters">
            <div
              className="category__filter catalog__filter"
              onClick={() => togglePanel(0)}
            >
              <span className="category__name-filter">Category</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen[0] ? (
                  <path d="M7 10L12 15L17 10H7Z" fill="#1C7FF3" />
                ) : (
                  <path d="M7 14L12 9L17 14H7Z" fill="#050630" />
                )}
              </svg>
            </div>
            {isOpen[0] && (
              <div className="catalog__filter-content">
                <ul className="catalog__input-list">
                  {categories.map((category) => (
                    <li className="catalog__input-box" key={category.id}>
                      <input
                        type="checkbox"
                        id={`category-checkbox-${category.id}`}
                        className="category__filter-name_checkbox catalog__checkbox"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                      />
                      <label
                        className="catalog__label"
                        htmlFor={`category-checkbox-${category.id}`}
                      >
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div
              className="subcategory__filter catalog__filter"
              onClick={() => togglePanel(1)}
            >
              <div className="subcategory__name-filter">Subcategory</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen[1] ? (
                  <path d="M7 10L12 15L17 10H7Z" fill="#1C7FF3" />
                ) : (
                  <path d="M7 14L12 9L17 14H7Z" fill="#050630" />
                )}
              </svg>
            </div>
            {isOpen[1] && (
              <div className="catalog__filter-content">
                <ul className="catalog__input-list">
                  {subcategories
                    .filter(
                      (subcategory) =>
                        subcategory.categoryId === selectedCategory,
                    )
                    .map((subcategory) => (
                      <li className="catalog__input-box" key={subcategory.id}>
                        <input
                          type="checkbox"
                          id={`subcategory-checkbox-${subcategory.id}`}
                          className="subcategory__filter-name_checkbox catalog__checkbox"
                          checked={selectedSubcategories.includes(
                            subcategory.id,
                          )}
                          onChange={() =>
                            handleSubcategoryChange(subcategory.id)
                          }
                        />
                        <label
                          className="catalog__label"
                          htmlFor={`subcategory-checkbox-${subcategory.id}`}
                        >
                          {subcategory.name}
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <div
              className="category__filter catalog__filter"
              onClick={() => togglePanel(2)}
            >
              <span className="category__name-filter">Price</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen[2] ? (
                  <path d="M7 10L12 15L17 10H7Z" fill="#1C7FF3" />
                ) : (
                  <path d="M7 14L12 9L17 14H7Z" fill="#050630" />
                )}
              </svg>
            </div>
            {isOpen[2] && (
              <div className="catalog__filter-content">
                <div className="catalog__filter-price_box">
                  <input
                    placeholder="Min price"
                    type="text"
                    className="catalog__filter-minprice"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                  />
                  <input
                    placeholder="Max price"
                    type="text"
                    className="catalog__filter-maxprice"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="catalog__items">
            <ul className="catalog-card-list">
              {Array.isArray(items) ? (
                items
                  .filter((item) =>
                    selectedCategory
                      ? item.subcategory.categoryId === selectedCategory
                      : true,
                  )
                  .filter((item) =>
                    selectedSubcategories.length === 0
                      ? true
                      : selectedSubcategories.includes(item.subcategoryId),
                  )
                  .filter(
                    (item) =>
                      minPrice === '' || Number(item.price) >= Number(minPrice),
                  )
                  .filter(
                    (item) =>
                      maxPrice === '' || Number(item.price) <= Number(maxPrice),
                  )
                  .map((obj, id) => {
                    const isInWishlist =
                      loggedIn &&
                      wishlistItems?.wishlistItems?.some(
                        (wishlistItem) => wishlistItem.productId === obj.id,
                      );
                    return (
                      <Card
                        key={id}
                        id={obj.id}
                        name={
                          obj.name.length > 15
                            ? obj.name.slice(0, 13) + '...'
                            : obj.name
                        }
                        category={obj.subcategory.name}
                        price={obj.price}
                        discountPrice={obj.discountPrice}
                        img={obj.productImages[0].url}
                        onAddToCart={() => handleAddToCart(obj)}
                        onAddToWishlist={() => handleAddToWishlist(obj)}
                        onRemoveFromWishlist={() =>
                          handleRemoveFromWishlist(obj)
                        }
                        itsInWishlist={isInWishlist}
                      />
                    );
                  })
              ) : (
                <p>Loading...</p>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
