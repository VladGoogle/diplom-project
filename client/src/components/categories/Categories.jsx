import "./style.css"

function Categories({ name, categoryIcon }) {
    
    return ( 
        <li className="categories__top-item">
        <div className="categories__image-container">
          <a href="#" className="categories__image-link">
            <img
              src={categoryIcon}
              alt="Tools and equipment"
              className="categories__top-item_image"
            />
          </a>
        </div>
        <h4 className="categories__title">{name}</h4>
      </li>
     );
}
 
export default Categories;