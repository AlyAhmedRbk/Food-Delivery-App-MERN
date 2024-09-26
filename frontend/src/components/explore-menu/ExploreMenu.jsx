import "./explore-menu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Discover a world of culinary delights with our food delivery app! From local favorites to international cuisines.</p>

        <div className="explore-menu-list">
            {menu_list.map((list, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===list.menu_name?"All":list.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===list.menu_name?"active":""} src={list.menu_image} alt="" />
                        <p>{list.menu_name}</p>
                    </div>
                )
            })}
        </div>

        <hr />
    </div>
)};

export default ExploreMenu;
