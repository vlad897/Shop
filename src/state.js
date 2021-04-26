import {useReducer} from "react";
import ShopContext from "./context";
import reducer from "./reducer";


const ShopState = ({children}) => {

    const initialState = {
        goods: [],
        orders: [],
        isBasketShow: false,
        loading: true
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    state.setGoods = (data) => {
        dispatch({
            type: "SET_GOODS",
            payload: data
        });
    };

    state.addToBasket = (item) => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload: item
        });
    };

    state.removeFromBasket = (itemId) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: {id: itemId}
        });
    };

    state.incQuantity = (itemId) => {
        dispatch({
            type: "INC_QUANTITY",
            payload: {id: itemId}
        });
    };

    state.decQuantity = (itemId) => {
        dispatch({
            type: "DEC_QUANTITY",
            payload: {id: itemId}
        });
    };

    state.handleBasketShow = () => {
        dispatch({
            type: "TOGGLE_BASKET"
        });
    };

    return (
        <ShopContext.Provider value={state}>
            {children}
        </ShopContext.Provider>
    );
};


export default ShopState;