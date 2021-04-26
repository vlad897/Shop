import {useContext} from "react";
import ShopContext from "../context";
import BasketListItem from "./BasketListItem";


const BasketList = () => {

    const {orders, handleBasketShow} = useContext(ShopContext);

    const totalPrice = orders.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <span className="basket-close" onClick={handleBasketShow}>X</span>
            <li className="collection-item"><b>Basket List</b></li>
            {orders.length ?
                orders.map(el => <BasketListItem key={el.id} item={el}/>)
                :
                <li className="collection-item">Basket is Empty</li>
            }
            <li className="collection-item">Total: {totalPrice}</li>
        </ul>
    );
}


export default BasketList;