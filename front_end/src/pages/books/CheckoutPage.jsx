import { FaCreditCard, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  // Access totalPrice passed from CartPage
  const location = useLocation();
  const { totalPrice } = location.state || {};

  // If totalPrice is undefined or missing, handle the case (show fallback message)
  if (!totalPrice) {
    return (
      <div className="text-center mt-8 text-lg  text-gray-600">
        There is nothing in your shopping cart. Please continue shopping.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Container for checkout form */}
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Checkout</h2>

        {/* Cart Summary */}
        <motion.div
          className="bg-gray-50 p-6 rounded-md shadow-sm mb-6"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaChevronDown className="text-2xl text-blue-500 mr-2" />
              <span className="text-lg font-medium">Checkout Summary</span>
            </div>
          </div>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </li>
          </ul>
        </motion.div>

        {/* Payment Form */}
        <div className="space-y-6">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCreditCard className="text-3xl text-gray-700" />
            <h3 className="text-xl font-semibold">Payment Information</h3>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="1234 5678 9876 5432"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="123"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Complete Payment
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CheckoutPage;
