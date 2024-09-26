import { useContext} from "react";
import { assets } from "../../assets/assets";
import "./food-item.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({name, id, description, image, price}) => {

    // const [itemCount, setItemCount] = useState(0);
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-img"/>
            {
                !cartItems[id]
                ?<img 
                    className="add" 
                    src={assets.add_icon_white}
                    onClick={()=>addToCart(id)}
                  />
                : <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>

        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem
