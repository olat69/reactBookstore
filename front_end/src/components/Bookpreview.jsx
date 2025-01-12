import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BookPreview = ({ isOpen, onClose, book }) => {
  return (
    <motion.div
      className={`absolute inset-0 bg-gray-300 bg-opacity-65 flex justify-center items-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose} // Close the popup when clicking outside the modal
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg max-h-full w-3/4"
        initial={{ scale: 0.8 }}
        animate={{ scale: isOpen ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Prevent close if clicked inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500"
        ></button>
        <h3 className="text-xl font-bold mb-3">{book.title}</h3>

        <p>{book.description}</p>
      </motion.div>
    </motion.div>
  );
};

BookPreview.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    newPrice: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookPreview;
