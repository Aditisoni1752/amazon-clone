
import { IoMdMenu } from "react-icons/io";
import "./Header2.css"
const Header2 = () =>{
    return <>
    <div className="header2">

        <ul className="ul">
            <div className="div"><IoMdMenu /><span>All</span></div>
          <li className="li">MX player</li>
          <li className="li">Sell</li>
          <li className="li">Best Sellers</li>
          <li className="li">Today's Deals</li>
          <li className="li">Mobiles</li>
          <li className="li">Electronics</li>
          <li className="li">Customer Service</li>
          <li className="li">Home & kitchen</li>
        </ul>


      </div>
    </>
    }
    export default Header2;