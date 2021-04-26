import Header from "./components/Header";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import ShopState from "./state";


const App = () => {
    return (
        <>
            <Header />
            <ShopState>
                <Shop />
            </ShopState>
            <Footer />
        </>
    );
};


export default App;