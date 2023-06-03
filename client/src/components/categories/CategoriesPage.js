import './style.css';
import Categories from './Categories';
import React from "react"
import { useEffect } from 'react';
import AxiosInstance from '../../utils/axios/instance'; 


function  CategoriesPage() {

  const instance = AxiosInstance();
  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/categories"); // запрос к API, который вернет все категории
        setCategories(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="categories">
        <ul className="categories__top-items">
        {categories 
            .map((obj) => {
              return (
                <Categories
                  key={obj.id}
                  name={obj.name}
                  categoryIcon={obj.categoryIcons[0]?.url}
                />  
              );
            })}
        </ul>
    </section>
  );
};

export default CategoriesPage;
