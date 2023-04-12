import React, { useState } from 'react';
import './style.css';
import product1_big from '../../img/product1-big.png';
import product2_big from '../../img/product2-big.png';
import product1_small from '../../img/product1-small.png';
import product2_small from '../../img/product2-small.png';

import { ReactComponent as PrevIcon } from '../../img/Arrow_prev.svg';
import { ReactComponent as NextIcon } from '../../img/Arrow-next.svg';

const products = [
  { id: 1, imgBig: product1_big, imgSmall: product1_small },
  { id: 2, imgBig: product2_big, imgSmall: product2_small },
  { id: 3, imgBig: product1_big, imgSmall: product1_small },
  { id: 4, imgBig: product2_big, imgSmall: product2_small },
  { id: 5, imgBig: product1_big, imgSmall: product1_small },
  { id: 6, imgBig: product2_big, imgSmall: product2_small },
  { id: 7, imgBig: product1_big, imgSmall: product1_small },
  { id: 8, imgBig: product2_big, imgSmall: product2_small },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  const onPrevClick = () => {
    setCurrentSlide(
      currentSlide === 0 ? products.length - 1 : currentSlide - 1,
    );
  };

  const onNextClick = () => {
    setCurrentSlide(
      currentSlide === products.length - 1 ? 0 : currentSlide + 1,
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={products[currentSlide].imgBig} alt="Product" />
        <div className="slider-controls">
          <button className="slider-button prev-button" onClick={onPrevClick}>
            <PrevIcon />
          </button>
          <button className="slider-button next-button" onClick={onNextClick}>
            <NextIcon />
          </button>
        </div>
        <div className="thumbnails">
          {products.map((product, index) => (
            <img
              key={product.id}
              src={product.imgSmall}
              alt="Product Thumbnail"
              className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
              onClick={() => onThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
