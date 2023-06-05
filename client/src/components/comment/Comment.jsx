import "./style.css"
import React from "react";


const Comment = ({ rate, text, date, name, surname }) => {

    const commentDate = new Date(date);

    // Форматирование даты в "MMM DD, YYYY" формате
    const formattedDate = commentDate.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    const starsCount = rate === "ONE" ? 1 :
    rate === "TWO" ? 2 :
    rate === "THREE" ? 3 :
    rate === "FOUR" ? 4 :
    rate === "FIVE" ? 5 :
    0;
    


    return (
        <div className="comment">
            <div className="comment__top">
            <ul className="comment__list-stars">
          {[...Array(5)].map((_, index) => (
            <li className="comment__item-star" key={index}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill={index < starsCount ? "#FDEB46" : "none"} xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4909 31.9616L11.6621 22.5752L11.73 22.2819L11.5025 22.0847L4.22002 15.771L13.8432 14.9356L14.1433 14.9096L14.2606 14.6321L18 5.78436L21.7394 14.6321L21.8567 14.9096L22.1568 14.9356L31.78 15.771L24.4975 22.0847L24.27 22.2819L24.3379 22.5752L26.5091 31.9616L18.2583 26.9844L18 26.8286L17.7417 26.9844L9.4909 31.9616Z" stroke="#FDEB46" />
              </svg>
            </li>
          ))}
        </ul>
                <span className="comment__name">
                    {name + (" ") + surname}
                </span>
                <span className="comment__date">
                    {formattedDate}
                </span>
            </div>
            <div className="comment__middle">
                <p className="comment__text">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Comment;