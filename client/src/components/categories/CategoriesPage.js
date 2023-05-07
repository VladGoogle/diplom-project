import './style.css';
import Categories from './Categories';
import React from "react"
import { useEffect, useState } from 'react';
import createAxiosInstance from '../../utils/axios/instance'; 


function  CategoriesPage() {

  const instance = createAxiosInstance();
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ids = Array.from({ length: 8 }, (_, i) => i + 1); // создаем массив с id от 1 до 10
        const promises = ids.map((id) => instance.get(`/category/${id}`)); // создаем массив промисов для выполнения запросов к API
        const responses = await Promise.all(promises); // ожидаем выполнения всех промисов
        const categories = responses.map((response) => response.data);
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="categories">
        <ul className="categories__top-items">
        {categories
            .map((obj) => {
              return (
                <Categories
                  key={obj.id}
                  name={obj.name}
                  categoryIcon={obj.categoryIcon.url}
                />
              );
            })}
        </ul>
    </section>
  );
};

export default CategoriesPage;
