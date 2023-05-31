import React from "react";
import Coins from "../../public/assets/coins.png";

const ProductTile = (props) => {
    return (
        <div className={props.disabled ? "disabled-tile" : "tile"}>
            <div className="image-div">
                <img className="image" src={props.productData.image} />
            </div>
            <div className="tile-desc">
                <div className="tile-title">{props.productData.title}</div>
                <p className="tile-description">{props.productData.description}</p>
                <div className="tile-item-price"><img className="coins-icon" src={Coins} />{props.productData.price} Gil</div>
                <div></div>
                <button
                    className="button"
                    onClick={() => props.addToBasket(props.productData)}
                >
                Add to Basket
                </button>
            </div>
        </div>
    );
};

export default ProductTile;