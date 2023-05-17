import ProductsSlider from '../components/swiper/Slider';
import Recommended from '../components/recommendations/Recommended';

const Product = () => {
  return (
    <>
      <section className="goods">
        <div className="container">
          <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item breadcrumbs__item-home">
                <a href="#" className="breadcrumbs__link">
                  <svg
                    alt="home"
                    className="home__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_148_1167)">
                      <path
                        d="M22.4733 11.5266L12.4733 1.52663C12.3484 1.40246 12.1795 1.33276 12.0033 1.33276C11.8272 1.33276 11.6583 1.40246 11.5333 1.52663L1.53335 11.5266C1.42413 11.6542 1.36706 11.8182 1.37354 11.986C1.38002 12.1538 1.44958 12.3129 1.56831 12.4317C1.68704 12.5504 1.8462 12.62 2.01398 12.6264C2.18177 12.6329 2.34582 12.5758 2.47335 12.4666L12 2.93996L21.5267 12.4733C21.6542 12.5825 21.8183 12.6396 21.9861 12.6331C22.1538 12.6266 22.313 12.5571 22.4317 12.4383C22.5505 12.3196 22.62 12.1604 22.6265 11.9927C22.633 11.8249 22.5759 11.6608 22.4667 11.5333L22.4733 11.5266Z"
                        fill="#1C7FF3"
                      />
                      <path
                        d="M18.6667 21.3334H15.3333V14.6668H8.66667V21.3334H5.33333V12.0001L4 13.3334V21.3334C4 21.687 4.14048 22.0262 4.39052 22.2762C4.64057 22.5263 4.97971 22.6668 5.33333 22.6668H10V16.0001H14V22.6668H18.6667C19.0203 22.6668 19.3594 22.5263 19.6095 22.2762C19.8595 22.0262 20 21.687 20 21.3334V13.1734L18.6667 11.8401V21.3334Z"
                        fill="#1C7FF3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_148_1167">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    alt="arrow"
                    className="breadcrumbs__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  <span className="breadcrumbs__text">
                    Smartphones and gadgets
                  </span>
                  <svg
                    alt="arrow"
                    className="breadcrumbs__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  <span className="breadcrumbs__text">Smartphones</span>
                  <svg
                    alt="arrow"
                    className="breadcrumbs__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  <span className="breadcrumbs__text">iOS Smartphone</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="goods__inner">
            <div className="goods__left">
              <div className="goods__main">
                <ProductsSlider />
                <p className="goods__description">
                  Lorem ipsum dolor sit amet consectetur. Morbi vehicula
                  porttitor porta lobortis id dolor. Tellus varius vel at
                  vulputate elementum ut sit. Penatibus lectus lacus enim
                  convallis vitae ipsum neque. Eu ornare tincidunt neque nec
                  cursus leo viverra. Egestas purus amet erat id sed
                  consectetur. Potenti quam eget metus purus vel. Egestas
                  elementum lectus risus ac ac vivamus. Sit nulla dolor velit
                  tortor eu justo praesent. A sed tincidunt vitae enim ut
                  integer. Urna pulvinar aliquam sit mi maecenas. Arcu mauris
                  habitasse lectus volutpat turpis lacus sed. Arcu aliquam
                  fringilla orci ac eget nam elementum ultricies nunc. Vitae
                  mauris dictum turpis congue fringilla vitae cursus diam
                  ullamcorper. Ornare erat nisl donec eget augue scelerisque
                  etiam.
                </p>
              </div>
            </div>
            <div className="goods__right">
              <div className="goods__name">
                <div className="goods__name-top">
                  <div className="goods__company">APPLE</div>
                  <div className="goods__id">
                    Article №: <b>10002343</b>
                  </div>
                </div>
                <div className="goods__name-bottom">
                  <div className="goods__title">iPhone 14 Pro</div>
                </div>
              </div>
              <div className="goods__price-top">
                <div className="goods__price-old">
                  <span className="goods__price-old--title goods__price-title">
                    Old price
                  </span>
                  <span className="goods__price-old--text">499.99$</span>
                </div>
                <div className="goods__delivery-cost">
                  <span className="goods__delivery-cost--text">
                    The cost of delivery goods to{' '}
                    <b className="goods__delivery-cost--city">Odesa - 10$</b>
                  </span>
                </div>
              </div>
              <div className="goods__price-bottom">
                <div className="goods__new-price">
                  <span className="goods__price-new--title goods__price-title">
                    New price
                  </span>
                  <span className="goods__price-new--text">299.99$</span>
                </div>
                <svg
                  alt="line"
                  className="vertical-line"
                  width="2"
                  height="60"
                  viewBox="0 0 2 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V46" stroke="#D9D9D9" />
                </svg>
                <div className="goods__new-discount">
                  <span className="goods__discount-title goods__price-title">
                    Discount
                  </span>
                  <span className="goods__discount-text goods__price-text">
                    59%[200$]
                  </span>
                </div>
                <svg
                  alt="line"
                  className="vertical-line"
                  width="2"
                  height="60"
                  viewBox="0 0 2 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V46" stroke="#D9D9D9" />
                </svg>
                <div className="goods__new-termination">
                  <span className="goods__termination-title goods__price-title">
                    Before the end of the discount:
                  </span>
                  <span className="goods__termination-text goods__price-text">
                    1 day, 12 hours and 55 minutes
                  </span>
                </div>
              </div>
              <span className="goods__in-stock">In stock: 10</span>
              <div className="goods__buttons">
                <button className="goods__buttons-add">ADD TO CART</button>
                <button className="goods__buttons-buy">BUY IN ONE CLICK</button>
              </div>
              <div className="goods__details">
                <div className="goods__details-container">
                  <div className="goods__details-top" id="details1">
                    <h3 className="goods__details-title">PRODUCT DETAILS</h3>
                    <svg
                      alt="arrow"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 15L18 22.5L25.5 15H10.5Z" fill="#050630" />
                    </svg>
                  </div>
                  <div className="goods__details-content">
                    <p className="goods__details-text">
                      Lorem ipsum dolor sit amet consectetur. Morbi vehicula
                      porttitor porta lobortis id dolor. Tellus varius vel at
                      vulputate elementum ut sit. Penatibus lectus lacus enim
                      convallis vitae ipsum neque. Eu ornare tincidunt neque nec
                      cursus leo viverra. Egestas purus amet erat id sed
                      consectetur. Potenti quam eget metus purus vel
                    </p>
                  </div>
                </div>
                <div className="goods__details-container">
                  <div className="goods__details-top" id="details2">
                    <h3 className="goods__details-title">SIZE</h3>
                    <svg
                      alt="arrow"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 15L18 22.5L25.5 15H10.5Z" fill="#050630" />
                    </svg>
                  </div>
                  <div className="goods__details-content">
                    <p className="goods__details-text">
                      Lorem ipsum dolor sit amet consectetur. Morbi vehicula
                      porttitor porta lobortis id dolor. Tellus varius vel at
                      vulputate elementum ut sit. Penatibus lectus lacus enim
                      convallis vitae ipsum neque. Eu ornare tincidunt neque nec
                      cursus leo viverra. Egestas purus amet erat id sed
                      consectetur. Potenti quam eget metus purus vel
                    </p>
                  </div>
                </div>
              </div>
              <div className="care__instructions">
                <div className="care__instrucions-top">
                  <svg
                    alt="exclamation_mark"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_288)">
                      <path
                        d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z"
                        fill="#1C7FF3"
                      />
                      <path
                        d="M10.5029 16.4999C10.5029 16.3029 10.5417 16.1079 10.6171 15.9259C10.6925 15.7439 10.803 15.5786 10.9423 15.4393C11.0816 15.3 11.2469 15.1895 11.4289 15.1141C11.6109 15.0387 11.8059 14.9999 12.0029 14.9999C12.1999 14.9999 12.395 15.0387 12.577 15.1141C12.7589 15.1895 12.9243 15.3 13.0636 15.4393C13.2029 15.5786 13.3134 15.7439 13.3887 15.9259C13.4641 16.1079 13.5029 16.3029 13.5029 16.4999C13.5029 16.8978 13.3449 17.2793 13.0636 17.5606C12.7823 17.8419 12.4008 17.9999 12.0029 17.9999C11.6051 17.9999 11.2236 17.8419 10.9423 17.5606C10.661 17.2793 10.5029 16.8978 10.5029 16.4999ZM10.6499 7.49243C10.63 7.30319 10.65 7.11187 10.7087 6.93087C10.7675 6.74988 10.8636 6.58325 10.9909 6.44181C11.1182 6.30037 11.2738 6.18727 11.4476 6.10986C11.6215 6.03244 11.8096 5.99243 11.9999 5.99243C12.1902 5.99243 12.3784 6.03244 12.5522 6.10986C12.726 6.18727 12.8817 6.30037 13.009 6.44181C13.1362 6.58325 13.2324 6.74988 13.2911 6.93087C13.3499 7.11187 13.3699 7.30319 13.3499 7.49243L12.8249 12.7529C12.8073 12.9596 12.7127 13.1521 12.56 13.2924C12.4072 13.4327 12.2073 13.5105 11.9999 13.5105C11.7925 13.5105 11.5927 13.4327 11.4399 13.2924C11.2871 13.1521 11.1926 12.9596 11.1749 12.7529L10.6499 7.49243Z"
                        fill="#1C7FF3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_288">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4 className="care__instructions-title">
                    Care Instructions
                  </h4>
                </div>
                <div className="care__instructions-bottom">
                  <div className="care_instructions-text">
                    Lorem ipsum dolor sit amet consectetur. Dui penatibus
                    fermentum donec augue adipiscing nec et felis commodo. Vel
                    nulla nascetur ac neque consequat cursus orci in nunc.
                    Faucibus euismod porttitor luctus elementum viverra dui
                    faucibus aliquam faucibus. Vel fringilla aliquam ut vel
                    libero varius viverra mattis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Recommended/>
    </>
  );
};

export default Product;
