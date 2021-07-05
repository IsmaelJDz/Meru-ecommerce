import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../cart-item';
import Button from '../button'

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    router.push('/checkout');
    dispatch(toggleCartHidden());
  }

  return (
    <div className="
      absolute
      w-56
      h-72
      flex
      flex-col
      p-4
      border
      border-gray-900
      top-16
      right-0
      z-20
      bg-white
      "
    >
      <div className="
        h-5/5
        flex
        flex-col
        overflow-scroll
      ">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        <Button
          handleClick={handleClick}
          title="GO TO CHECKOUT"
        />
      </div>
    </div>
  );
};

export default CartDropdown;