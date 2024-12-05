import "./Header.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {

  const bag = useSelector(store => store.bag);
  return (
    <>
      <div className="Hcontainer">
        <div className="headerContainer">
          <Link className="img  a" to='home'>
            <img src="/images/image1.png" alt="amazon" />
          </Link>
          <div className="location  a">
            <div style={{color:"grey"}} className="locationdelivering">Delivering to Jabalpur 482004</div>
            <div className="updatelocation"  style={{color:"white"}}>
              <FaLocationDot style={{fontSize:"20px"}}/>
              <span>Update location</span>
            </div>
          </div>
          <div className="searchBar  a">
            <select  id="searchall"><option >All</option></select>
            <input type="text"  id="searchbar" placeholder="Search Amazon.in"/>
            <FaSearch id="searchicon"/>
            </div>
            <div className="flag  a">
              <img src="/images/image.png" alt="flagimag" />
              <select name="" id=""><option value="">EN</option></select>
            </div>
            <div className="sign-in  a"> 
              <span>Hello, sign in</span>
              <div>Account & lists</div>
            </div>
            <div className="return  a"> 
              <span>Returns</span>
              <div>& Orders</div>
            </div>
            <Link className="cart a" to='cart'>
            <FaShoppingCart />
          <span className="bag-item-count">{bag.length}</span>

            <span className="Cart">cart</span>
            </Link>
          </div>
        </div>
    </>
  );
};
export default Header;
