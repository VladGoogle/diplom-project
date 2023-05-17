import './style.css'
import card_image from "../../img/card_image.png"

const Recommended = () => {
    
    return ( 
        <section className="recommended">
        <div className="container">
          <div className="tab-container">
            <div className="tab-buttons">
              <div className="tab-button active" data-tab="most-often-choose">
                MOST OFTEN CHOOSE
              </div>
              <div className="tab-button" data-tab="included-with">
                INCLUDED WITH
              </div>
              <div className="tab-button" data-tab="you-watched">
                YOU WATCHED
              </div>
            </div>
            <div className="tab-content" data-tab="most-often-choose">
              <div className="products-card__top">
                <ul className="products-card-list">
                  <li className="products__card" data-tab="most-often-choose">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="product.html" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="most-often-choose">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="most-often-choose">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="most-often-choose">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="most-often-choose">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content" data-tab="included-with">
              <div className="products-card__top">
                <ul className="products-card-list">
                  <li className="products__card" data-tab="included-with">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="product.html" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="included-with">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="included-with">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="included-with">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="included-with">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content" data-tab="you-watched">
              <div className="products-card__top">
                <ul className="products-card-list">
                  <li className="products__card" data-tab="you-watched">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="product.html" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="you-watched">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="you-watched">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="you-watched">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                  <li className="products__card" data-tab="you-watched">
                    <div className="products__card-top">
                      <span className="products-card__status">DISCOUNT</span>
                      <svg
                        className="products__card-like"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                          fill="#FDEB46"
                        />
                      </svg>
                    </div>
                    <div className="product__card-content">
                      <div className="card__image-container">
                        <a href="#" className="card__image-link">
                          <img
                            src={card_image}
                            alt="card_image"
                            className="products__card-image"
                          />
                        </a>
                      </div>
                      <div className="products__card-bottom">
                        <span className="products__category-title">
                          Smartphone
                        </span>
                        <span className="product__title">iPhone 14</span>
                        <div className="product__prices">
                          <span className="product__price-old">499,99$</span>
                          <span className="product__price">299,99$</span>
                        </div>
                        <button className="product__button">Buy</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Recommended;