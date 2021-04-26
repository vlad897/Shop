import {useContext} from "react";
import ShopContext from "../context";


const BasketItem = ({item}) => {

    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext);

    return (
        <li className="collection-item">
            <span><b>Name: </b> {item.name} </span>
            <span><b>Quantity: </b> <i className="material-icons tiny" onClick={() => decQuantity(item.id)}>remove</i>{item.quantity}<i className="material-icons tiny" onClick={() => incQuantity(item.id)}>add</i> </span>
            <span><b>Price: </b> {item.price * item.quantity}</span>
            <span><i className="material-icons tiny" onClick={() => removeFromBasket(item.id)}>close</i></span>
        </li>
    );
}


export default BasketItem;