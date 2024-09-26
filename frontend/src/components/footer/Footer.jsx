import { assets } from "../../assets/assets";
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, hic. Fugiat quasi iste temporibus voluptate nobis debitis ex. Quae beatae exercitationem vero aut consequuntur aperiam atque, ex sit enim deserunt assumenda, distinctio sed laboriosam.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""  />
                <img src={assets.twitter_icon} alt=""   />
                <img src={assets.linkedin_icon} alt=""  />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+923555098183</li>
                <li>alyahmedrbk@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved.    </p>
    </div>
  )
}

export default Footer
