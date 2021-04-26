import {useContext} from "react";
import ShopContext from "../context";


const Cart = () => {

    const {orders, handleBasketShow} = useContext(ShopContext);

    return(
        <div className="Cart light-green darken-3" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            <span className="add_shopping_cart">{orders.length}</span>
        </div>
    );
}


export default Cart;