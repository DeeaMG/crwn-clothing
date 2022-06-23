import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartItemContainer,
  ItemDetails,
  RemoveButton,
  RemoveTotal,
  Total,
} from "./cart-item.styles.jsx";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetails>
      <RemoveTotal>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        <Total>{price * quantity}</Total>
      </RemoveTotal>
    </CartItemContainer>
  );
}

export default CartItem;
