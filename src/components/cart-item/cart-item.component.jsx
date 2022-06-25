import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CartItemContainer,
  ItemDetails,
  RemoveButton,
  RemoveTotal,
  Total,
} from "./cart-item.styles.jsx";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clearItemHandler = () => {
    return dispatch(clearItemFromCart(cartItems, cartItem)), [dispatch];
  };

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
