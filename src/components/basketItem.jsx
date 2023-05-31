import React from "react";
import Bin from "../../public/assets/bin.png";
import Coins from "../../public/assets/coins.png";
import "../sass/basket.scss";

const ProductTile = (props) => {
    return (
        <div className="basket-item">
            <div className="basket-item-img-div">
                <img className="basket-item-img" src={props.productData.image} />
            </div>
            <div className="basket-item-desc">
                <div className="basket-item-name">{props.productData.title}</div>
                <div className="cart-item-price"><img className="coins-icon" src={Coins} />{props.productData.price} Gil</div>              
            </div>
            <div className="remove-button-div">
                <button
                    className="remove-button"
                    onClick={() => props.removeFromBasket(props.productData)}
                >
                    <img className="remove-button-icon" src={Bin} />
                </button>
            </div>
      </div>
  );
};

export default ProductTile;
  