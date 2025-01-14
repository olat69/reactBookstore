import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import {
  increment,
  decrement,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { getImgUrl } from "../../utils/getImgUrl";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  // Handle increment, decrement, and remove actions
  const handleIncrement = (item) => {
    dispatch(increment(item)); // Pass the entire item object
  };

  const handleDecrement = (item) => {
    dispatch(decrement(item)); // Pass the entire item object
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item)); // Pass the entire item object
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">
          Your cart is empty. Add some books to your cart!
        </p>
      ) : (
        <>
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item._id} // Use _id as the key, consistent with cartSlice
                className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <img
                  src={`${getImgUrl(item.coverImage)}`}
                  className="w-24 h-32 object-cover rounded-md"
                />

                {/* Book Info */}
                <div className="flex-1 ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <div className="text-sm text-gray-500 mt-2">
                    <span className="font-semibold text-gray-800">
                      ${item.newPrice}
                    </span>
                  </div>
                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrement(item)} // Pass entire item
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)} // Pass entire item
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => handleRemove(item)} // Pass entire item
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="flex justify-between items-center mt-8 border-t pt-6">
            <div className="text-2xl font-semibold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
