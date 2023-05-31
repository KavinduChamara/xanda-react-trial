import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, fetchItems } from '../features/cartSlice';
import "../sass/home.scss";
import Basket from '../components/basket';
import Header from '../components/header';
import Cover from '../components/cover';
import { productData } from "../productData";
import ProductTile from "../components/productTile"

const Home = (props) => {
    const dispatch = useDispatch();
    let cartItems = useSelector((state) => state.cartItems.cartItems);
    const [productlist, setProductlist] = useState([]);
    const [basketItems, setBasketItems] = useState(cartItems);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        setProductlist(productData);
    }, []);

    const addToBasket = (product) => {
        setBasketItems([...basketItems, product])
        dispatch(addItem(product));
    }

    const removeFromBasket = (product) => {
        setBasketItems(basketItems.filter( el => el !== product ));
        dispatch(removeItem(product.id));
    }

  return (
      <div className="main-div">
          <div className="store">
              <div>
                  <Header />
              </div>
              <div>
                  <Cover />
              </div>
              <div className="items-list">
                  {productlist && productlist.map((product) => (
                      <ProductTile disabled={basketItems.some(el => el === product)} key={product.id} productData={product} addToBasket={addToBasket} />
                  ))}
              </div>
          </div>
          <div className="basket">
              <Basket basketItems={basketItems} removeFromBasket={removeFromBasket}/>
          </div>
      </div>
  );
};
  
export default Home;