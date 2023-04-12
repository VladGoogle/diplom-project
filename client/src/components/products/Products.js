import Card from "../card/Card.js"
import "./style.css"
import { cards } from "../../helpers/projectList";

const Products = () => {
  return (<section className="products">
    <div className="container">
      <h2 className="products__title">
        BESTSELLERS
      </h2>
      <div className="products-card__top">
        <ul className="products-card-list">
          {cards.map((card, id) => {
            return <Card key={id} title={card.title} img={card.img} category={card.category} status={card.status} old_price={card.old_price} new_price={card.new_price} />
          })}
        </ul>
      </div>
    </div>
  </section>);
}

export default Products;