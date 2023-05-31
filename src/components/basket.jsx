import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasketItem from '../components/basketItem';

const Basket = (props) => {
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        getTotal();
        setBasketItems(props.basketItems);
    }, [props]);

    const getTotal = () => {
        let sum = 0;
        for (const product of props.basketItems) {
            sum += product.price;
        }
        setTotal(sum);
    }
  
    const handleCheckout = () => {
        navigate('/checkout');
    }

    return (
        <div className="basket-div">
            <div className="basket-title">Basket</div>
            <div className={(props.basketItems && props.basketItems.length>0) ? "basket-list" : 'no-items-title'}>
                {(basketItems && basketItems.length>0) ? basketItems.map((product, index) => (
                    <>
                        <BasketItem key={product.id} productData={product} removeFromBasket={props.removeFromBasket}/>
                        {index+1 !== props.basketItems.length ? <hr key={product.id} className="hr-line"/> : null}
                    </>
                )) : "No items"}
            </div>
            {props.basketItems && props.basketItems.length>0 &&
                <div className="total-div">
                    <div className="total-label">Total</div>
                    <div className="total-val">{total} Gil</div>
                </div>
            }
            <button
                className={props.basketItems && props.basketItems.length > 0 ? "cart-button" : "disabled-button"}
                onClick={handleCheckout}
            >
            Continue
            </button>
        </div>
    );
};
  
export default Basket;