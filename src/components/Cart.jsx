import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementItemCount,
  decrementItemCount,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "10px",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <h2>{item.productName}</h2>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => dispatch(decrementItemCount({ id: item.id }))}
              >
                -
              </button>
              <p>Count: {item.count}</p>
              <button
                onClick={() => dispatch(incrementItemCount({ id: item.id }))}
              >
                +
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <p>Total: ${total}</p>
        </>
      )}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
