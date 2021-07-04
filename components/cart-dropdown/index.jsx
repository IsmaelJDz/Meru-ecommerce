import { useSelector } from 'react-redux';


import CartItem from '../cart-item';

// import { selectCartItems } from '../../redux/cart/cart.selector';
// import { toggleCartHidden } from '../../redux/cart/cart.actions';

//import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

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
        {/* <CustomButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton> */}
        <button className="bg-gray-900 text-white p-2">GO TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartDropdown;

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

// export default withRouter(connect(mapStateToProps, null)(CartDropdown));