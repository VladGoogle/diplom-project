import "./style.css";
import { useState, useEffect } from "react";
import AxiosInstance from "../../utils/axios/instance";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import ReviewPopup from "./ReviewPopup";

const schema = yup.object().shape({
  rate: yup.string().required(),
  text: yup.string().required(),
});

const ReviewForm = (props) => {
  const { id } = useParams();
  const [selectedStars, setSelectedStars] = useState(1);
  const instance = AxiosInstance();
  const [rate, setRate] = useState("ONE");
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(true);

  const handleStarHover = (starIndex) => {
    setSelectedStars(starIndex);
  };

  const handleStarClick = (starIndex) => {
    const selectedRate = ["ONE", "TWO", "THREE", "FOUR", "FIVE"][starIndex - 1];
    setSelectedStars(starIndex);
    setRate(selectedRate);
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    data.rate = ["ONE", "TWO", "THREE", "FOUR", "FIVE"][selectedStars - 1];
    try {
      const response = await instance.post(`/product/${id}/comments`, data);
      setShowReviewPopup(true);
      setShowReviewForm(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const closeReviewPopup = () => {
    setShowReviewPopup(false);
  };


  return (
    <>
    {showReviewForm && (
    <div className="review__bg">
      <div className="review__form">
        <div className="review__form-top">
          <h3 className="review__form-title">Write review</h3>
          <svg
            className="review__form-close"
            onClick={props.onCloseReview}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5666 4.56639C20.641 4.492 20.7 4.4037 20.7403 4.30652C20.7805 4.20934 20.8012 4.10518 20.8012 3.99999C20.8012 3.89479 20.7805 3.79063 20.7403 3.69345C20.7 3.59627 20.641 3.50797 20.5666 3.43358C20.4922 3.3592 20.4039 3.3002 20.3068 3.25995C20.2096 3.21969 20.1054 3.19897 20.0002 3.19897C19.895 3.19897 19.7909 3.21969 19.6937 3.25995C19.5965 3.3002 19.5082 3.3592 19.4338 3.43358L12.0002 10.8688L4.56663 3.43358C4.49225 3.3592 4.40395 3.3002 4.30676 3.25995C4.20958 3.21969 4.10542 3.19897 4.00023 3.19897C3.89504 3.19897 3.79088 3.21969 3.6937 3.25995C3.59651 3.3002 3.50821 3.3592 3.43383 3.43358C3.35945 3.50797 3.30045 3.59627 3.26019 3.69345C3.21994 3.79063 3.19922 3.89479 3.19922 3.99999C3.19922 4.10518 3.21994 4.20934 3.26019 4.30652C3.30045 4.4037 3.35945 4.492 3.43383 4.56639L10.869 12L3.43383 19.4336C3.28361 19.5838 3.19922 19.7875 3.19922 20C3.19922 20.2124 3.28361 20.4162 3.43383 20.5664C3.58405 20.7166 3.78779 20.801 4.00023 20.801C4.21267 20.801 4.41641 20.7166 4.56663 20.5664L12.0002 13.1312L19.4338 20.5664C19.584 20.7166 19.7878 20.801 20.0002 20.801C20.2127 20.801 20.4164 20.7166 20.5666 20.5664C20.7168 20.4162 20.8012 20.2124 20.8012 20C20.8012 19.7875 20.7168 19.5838 20.5666 19.4336L13.1314 12L20.5666 4.56639V4.56639Z"
              fill="#050630"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="review__form-content">
          <div className="review__form-stars">
            <ul className="review__form-stars--list">
              {[...Array(5)].map((_, index) => (
                <li
                  key={index}
                  className="review__form-star"
                  onClick={() => handleStarClick(index + 1)}
                  onMouseEnter={() => handleStarHover(index + 1)}
                  
                >
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill={index < selectedStars ? "#FDEB46" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5972 81.4616L28.4246 56.2689L28.4925 55.9757L28.265 55.7785L8.72002 38.8335L34.5432 36.5919L34.8433 36.5658L34.9606 36.2884L45 12.5344L55.0394 36.2884L55.1567 36.5658L55.4568 36.5919L81.28 38.8335L61.735 55.7785L61.5075 55.9757L61.5754 56.2689L67.4028 81.4616L45.2583 68.1031L45 67.9473L44.7417 68.1031L22.5972 81.4616Z"
                      stroke="#FDEB46"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
          <span className="review__form-hint">
            What are your impressions of this product?
          </span>
          <textarea
            className="review__form-text"
            type="text"
            name="text"
            id="text"
            cols="30"
            rows="10"
            {...register("text")}
          />
            {selectedStars && (
            <input
                type="hidden"
                name="rate"
                value={rate}
                {...register("rate")}
            />  
            )}
          <button type="submit" className="review__form-button">
            REVIEW
          </button>
        </form>
      </div>
      
    </div>
    )}
    {showReviewPopup && <ReviewPopup onClose={closeReviewPopup} />}
     </>
  );
};

export default ReviewForm;