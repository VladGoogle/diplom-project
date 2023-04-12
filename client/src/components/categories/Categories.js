import tools_and_equipment from "./../../img/tools_and_equipment.png"
import smarpthones_and_gadgets from "./../../img/smarpthones_and_gadgets.png"
import air_conditioning_equipment from "./../../img/Air_conditioning_equipment.png"
import Laptop_and_pcs from "./../../img/Laptop_and_pcs.png"
import gas_equipment from "./../../img/gas_equipment.png"
import large_household_appliances from "./../../img/large_household-appliances.png"
import small_household_appliances from"./../../img/small_household_appliances.png"
import tv_and_av from "./../../img/tv_and_av.png"
import "./style.css"

const Categories = () => {
    return ( <section className="categories">
    <div className="categories__top">
      <ul className="categories__top-items">
        <li className="categories__top-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={tools_and_equipment} alt="Tools and equipment"
                className="categories__top-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            Tools and equipment
          </h4>
        </li>
        <li className="categories__top-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={smarpthones_and_gadgets} alt="Smartphones and gadgets"
                className="categories__top-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            Smartphones and gadgets
          </h4>
        </li>
        <li className="categories__top-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={air_conditioning_equipment} alt="Air conditioning equipment"
                className="categories__top-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            Air conditioning equipment
          </h4>
        </li>
        <li className="categories__top-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={Laptop_and_pcs} alt="Laptops and PCs" className="categories__top-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            Laptops and PCs
          </h4>
        </li>
      </ul>
    </div>
    <div className="categories__bottom">
      <ul className="categories__bottom-items">
        <li className="categories__bottom-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={gas_equipment} alt="Gas equipment" className="categories__bottom-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            Gas equipment
          </h4>
        </li>
        <li className="categories__bottom-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={large_household_appliances} alt="Large household appliances"
                className="categories__bottom-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            Large household appliances
          </h4>
        </li>
        <li className="categories__bottom-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={small_household_appliances} alt="Small household appliances"
                className="categories__bottom-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            Small household appliances
          </h4>
        </li>
        <li className="categories__bottom-item">
          <div className="categories__image-container">
            <a href="#" className="categories__image-link">
              <img src={tv_and_av} alt="TV and AV" className="categories__bottom-item_image" />
            </a>
          </div>
          <h4 className="categories__title">
            TV and AV
          </h4>
        </li>
      </ul>
    </div>
  </section> );
}
 
export default Categories;