import {useContext} from "react";
import ShopContext from "../context";
import GoodListItem from "./GoodListItem";


const GoodList = () => {

    const {goods} = useContext(ShopContext);

    if(!goods.length) {
        return <h3>Not Goods</h3>
    }

    return (
        <div className="goods">
            {goods.map(el => <GoodListItem key={el.id} item={el}/>)}
        </div>
    );
};


export default GoodList;