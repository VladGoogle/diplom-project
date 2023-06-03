import React, { useState } from 'react';
import './style.css';


import { ReactComponent as PrevIcon } from '../../img/Arrow_prev.svg';
import { ReactComponent as NextIcon } from '../../img/Arrow-next.svg';


const ProductsSlider = ({images}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  const onPrevClick = () => {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : currentSlide - 1,
    );
  };

  const onNextClick = () => {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : currentSlide + 1,
    );
  };
  
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="big__image-container">
        {images.map((image, id) => (
          <img key={id} 
          src={image?.url} 
          alt="Product" 
          className={`slider-big-image ${id === currentSlide ? 'active' : ''}`}
          />
        ))}
        </div>
        <div className="slider-controls">
          <button className="slider-button prev-button" onClick={onPrevClick}>
            <PrevIcon />
          </button>
          <button className="slider-button next-button" onClick={onNextClick}>
            <NextIcon />
          </button>
        </div>
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image?.url}
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

export default ProductsSlider;
