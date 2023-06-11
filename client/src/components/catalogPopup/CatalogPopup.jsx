import "./style.css";
import categories_arrow from "./../../img/categories_icon.svg";
import AxiosInstance from "../../utils/axios/instance";
import { useState, useEffect } from "react";
import advertisment from "./../../img/advertisment.png";
import { useNavigate } from "react-router-dom";

const CatalogPopup = (props) => {
  const instance = AxiosInstance();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/catalog?category=${selectedCategory?.id}&subcategory=${subcategory.id}`);
  };

  const firstSubcategories = selectedCategory?.subcategories.slice(0, 11);
  const secondSubcategories = selectedCategory?.subcategories.slice(11, 22);
  const thirdSubcategories = selectedCategory?.subcategories.slice(22, 33);

  return (
    <div className="catalog__bg">
      <div className="container">
        <div className="catalog__popup">
          <div className="catalog__categories">
            <ul className="catalog__categories-list">
              {categories.map((category) => (
                <li className="catalog__categories-item" key={category.id} onClick={() => handleCategoryClick(category)}>
                  <img src={category.categoryImage?.url} alt="" className="category__icon" />
                  <div className="catalog__categories-item--right">
                    <span className="categorie__name">{category.name}</span>
                    <img src={categories_arrow} alt="" className="categories__icon-arrow" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="catalog__content">
            <ul className="catalog__list">
              {firstSubcategories &&
                firstSubcategories.map((subcategory, index) => (
                  <li
                    className={`catalog__subcategories-item ${
                      index % 5 === 0 ? "every-fifth" : ""
                    }`}
                    key={subcategory.id}
                    onClick={() => {
                      handleSubcategoryClick(subcategory);
                      props.onCloseCatalog();
                    }}
                    subcategoryId={subcategory.id}
                  >
                    <span className="subcategorie__name">{subcategory.name}</span>
                  </li>
                ))}
            </ul>
            {secondSubcategories && secondSubcategories.length > 0 && (
              <ul className="catalog__list">
                {secondSubcategories.map((subcategory, index) => (
                  <li
                    className={`catalog__subcategories-item ${
                      index % 5 === 0 ? "every-fifth" : ""
                    }`}
                    key={subcategory.id}
                    onClick={() => {
                      handleSubcategoryClick(subcategory);
                      props.onCloseCatalog();
                    }}
                    subcategoryId={subcategory.id}
                  >
                    <span className="subcategorie__name">{subcategory.name}</span>
                  </li>
                ))}
              </ul>
            )}
            {thirdSubcategories && thirdSubcategories.length > 0 && (
              <ul className="catalog__list">
                {thirdSubcategories.map((subcategory, index) => (
                  <li
                    className={`catalog__subcategories-item ${
                      index % 5 === 0 ? "every-fifth" : ""
                    }`}
                    key={subcategory.id}
                    onClick={() => {
                      handleSubcategoryClick(subcategory);
                      props.onCloseCatalog();
                    }}
                    subcategoryId={subcategory.id}
                  >
                    <span className="subcategorie__name">{subcategory.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <img src={advertisment} alt="discount advertisment" className="catalog__image" />
        </div>
      </div>
    </div>
  );
};

export default CatalogPopup;