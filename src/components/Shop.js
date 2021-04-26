import {useEffect, useContext} from "react";
import ShopContext from "../context";
import PreLoader from "./Preloader";
import Cart from "./Cart";
import GoodList from "./GoodList";
import BasketList from "./BasketList";


const Shop = () => {

    const {isBasketShow, loading, setGoods} = useContext(ShopContext);

    useEffect(() => {
        fetch("https://fortniteapi.io/v1/shop?lang=en", {
            headers: {
                Authorization: "54c46929-b03668bb-317bc735-4ecc9f1e"
            }
        })
            .then(response => response.json())
            .then(data => {
                data && setGoods(data.featured);
            });
    }, []);

    return (
        <main className="container">
            <Cart />
            {isBasketShow && <BasketList/>}
            {loading ? <PreLoader /> : <GoodList />}
        </main>
    );
};


export default Shop;