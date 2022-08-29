import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CartItemContainer,
  ItemDetails,
  RemoveButton,
  RemoveTotal,
  Total,
} from "./cart-item.styles";
import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

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
});

export default CartItem;
