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
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Кошик</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Кошик порожній,{" "}
          <a
            className="inline-block no-underline leading-relaxed hover:text-black hover:border-black"
            href="/"
          >
            виправити це :)
          </a>
        </p>
      ) : (
        <div className="space-y-4 gap-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full sm:w-auto max-w-[250px]">
                <h2 className="text-lg font-semibold justify-start">
                  {item.productName}
                </h2>{" "}
              </div>

              <div className="flex items-center gap-2 ml-4">
                <p className="text-gray-600">Price: ${item.price}</p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full"
                    onClick={() =>
                      dispatch(decrementItemCount({ id: item.id }))
                    }
                  >
                    -
                  </button>
                  <p className="text-gray-800">{item.count}</p>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full"
                    onClick={() =>
                      dispatch(incrementItemCount({ id: item.id }))
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-gray-600 hover:text-gray-700 mt-2 sm:mt-0"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-lg font-bold mt-6 text-right">
            Total: ${total.toFixed(2)}
          </div>
          <button
            className="w-full bg-orange text-white font-bold py-2 px-4 rounded-md hover:bg-#646cff mt-4"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
