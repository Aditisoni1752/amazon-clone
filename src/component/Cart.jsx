import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
const Cart = () =>{

    const bagItem = useSelector(store => store.bag);
    const item = useSelector(store => store.item);
    const FinalItems = item.filter(item =>{
        const itemIndex = bagItem.indexOf(item.id);
        return itemIndex >= 0;
    })


return <>
<main>
<div className="bag-page">
    <div className="bag-items-container">
        {FinalItems.map(item =>   <CartItem key={item.id} item={item} />)}

    </div>
    <div className="bag-summary">
        <CartSummary/>
    </div>

</div>
</main></>
}
export default Cart;