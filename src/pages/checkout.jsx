import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, fetchItems } from '../features/cartSlice';
import "../sass/checkout.scss";
import { useNavigate } from "react-router-dom";
import BasketItem from '../components/basketItem';
import Header from '../components/header';
import Cover from '../components/cover';

const Checkout = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let cartItems = useSelector((state) => state.cartItems.cartItems);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        getTotal();
    }, [props, cartItems]);

    const getTotal = () => {
        let sum = 0;
        for (const product of cartItems) {
            sum += product.price;
        }
        setTotal(sum);
    }

    const handleGoBack = () => {
        navigate('/');
    }

    const removeFromBasket = (product) => {
        dispatch(removeItem(product.id));
    }

    return (
        <div className="checkout-main-div">
            <div><Header /></div>
            <div className="cover-div"><Cover /></div>
            <div className="checkout-details">
                <div className="checkout-box">
                    <button
                        className="back-button"
                        onClick={handleGoBack}
                    >
                    Go Back
                    </button>
                    {(cartItems && cartItems.length>0) ? cartItems.map((product, index) => (
                        <>
                            <BasketItem key={product.id} productData={product} removeFromBasket={removeFromBasket}/>
                            {index+1 !== cartItems.length ? <hr className="hr-line"/> : null}
                        </>
                    )) : <div>No items</div>}
                    {cartItems && cartItems.length>0 &&
                        <div className="checkout-total-div">
                            <div className="checkout-total-label">Total</div>
                            <div className="total-val">{total} Gil</div>
                        </div>
                    }
                </div>
            </div>
        </div>
  );
};
  
export default Checkout;