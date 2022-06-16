import React from "react";
import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
      <div className="remove-total">
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
        <div className="total">{price * quantity}</div>
      </div>
    </div>
  );
}

export default CartItem;
