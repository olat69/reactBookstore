import { FiShoppingCart } from "react-icons/fi";
import getImgUrl from "../utils/getImgUrl";
import PropTypes from "prop-types";
import { useState } from "react";
import BookPreview from "./Bookpreview";

const BookCard = ({ book }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
        <div className="sm:h-72 sm:w-max sm:flex-shrink-0 border rounded-md">
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            onClick={openPopup}
          />
        </div>
        <div className="flex-1">
          <h3
            onClick={openPopup}
            className="text-xl font-semibold hover:text-blue-600 mb-3 cursor-pointer"
          >
            {book.title}
          </h3>

          {isPopupOpen && (
            <BookPreview
              isOpen={isPopupOpen}
              onClose={closePopup}
              book={book}
            />
          )}

          <p className="text-gray-600 mb-5">
            {book.description.length > 60
              ? `${book.description.slice(0, 60)}...`
              : book.description}
          </p>
          <p className="font-medium mb-5">
            ${book.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${book.oldPrice}
            </span>
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1">
            <FiShoppingCart />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    newPrice: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookCard;
