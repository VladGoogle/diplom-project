import "./style.css"
import { Link } from 'react-router-dom';

function Categories({ name, categoryIcon, categoryId }) {
  return (
    <li className="categories__top-item">
      <div className="categories__image-container">
        <Link to={`/catalog?category=${categoryId}`} className="categories__image-link">
          <img
            src={categoryIcon}
            alt="Tools and equipment"
            className="categories__top-item_image"
          />
        </Link>
      </div>
      <h4 className="categories__title">{name}</h4>
    </li>
  );
}

export default Categories;