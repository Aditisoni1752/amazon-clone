import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeItems.css"
import { FaPlusCircle } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItems = ({item}) =>{
    
    const dispatch = useDispatch();
    const bagItems = useSelector(store => store.bag);
    const elementFound = bagItems.indexOf(item.id)>=0;
 
    


    const handleAdd = () =>{
        dispatch(bagActions.addToBag(item.id));

    }
    
    const handleRemove = () =>{
        dispatch(bagActions.removeFromBag(item.id));

    }
   
   
    return <><div className="item-container">
<img className="item-image" src={item.image} alt="item image"/>
<div className="rating">
    {item.rating.stars} ⭐ | {item.rating.count}
</div>
<div className="company-name">{item.company}</div>
<div className="item-name">{item.item_name}</div>
<div className="price">
    <span className="current-price">Rs {item.current_price}</span>
    <span className="original-price">Rs {item.original_price}</span>
    <span className="discount">(${item.discount_percentage}% OFF)</span>
</div>
{elementFound ?   <button type="button" className="btn btn-danger button" onClick={handleRemove}>REMOVE  <IoMdRemoveCircle />
</button> : <button type="button" className="btn btn-success button" onClick={handleAdd}>ADD   <FaPlusCircle /></button>}



</div>
</>
}
export default HomeItems;