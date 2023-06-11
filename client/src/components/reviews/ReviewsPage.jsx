import "./style.css"
import { useState, useEffect } from "react"
import Comment from "../comment/Comment";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../utils/axios/instance";
import ReviewForm from "./ReviewForm";

const ReviewsPage = () => {

    const [reviewFormOpen, setReviewFormOpen] = useState(false);
    const [commentInfo, setCommentInfo] = useState([]);
    const [productInfo, setProductInfo] = useState(null);
    const instance = AxiosInstance();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await instance.get(`/product/${id}/comments`);
            setCommentInfo(response.data)
            setProductInfo(response.data[0].product)
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [id]);

    return ( 
        <div className="container">
        <section className="reviews">
                {productInfo && (  // Check if productInfo exists and has a name
                    <h1 className="reviews__title">
                    Reviews on {productInfo.name}
                    </h1>
                )}
            <div className="reviews__send-box">
                <h2 className="reviews__send-box--title">
                    Leave your review
                </h2>
                <button onClick={() => setReviewFormOpen(true)} className="reviews__send-box--button">
                    REVIEW
                </button>
            </div>
            <ul className="cart-list">
                {commentInfo
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
              {reviewFormOpen && <ReviewForm 
              onCloseReview = {() => setReviewFormOpen(false)}
              />}
        </section>
        </div>
     );
}
 
export default ReviewsPage;