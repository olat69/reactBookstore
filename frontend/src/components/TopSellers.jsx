import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const category = [
  "Choose a genre",
  "Fiction",
  "Business",
  "Adventure",
  "Horror",
];
const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectCategory, setSelectCategory] = useState(["Choose a genre"]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("books.json");
      const result = await response.json();
      setBooks(result);
    }
    fetchData();
  }, []);

  const filterBooks =
    selectCategory === "Choose a genre"
      ? books
      : books.filter((book) => book.category === selectCategory);
  console.log(filterBooks);
  return (
    <div className="py-16 w-full">
      <h1 className="text-3xl font-semibold">Top Sellers</h1>
      <div className="py-5 ">
        <select
          onChange={(e) => setSelectCategory(e.target.value)}
          name="category"
          id="category"
          className="rounded-md py-2 pl-3 pr-3 focus:outline-none hover:bg-gray-200"
        >
          {category.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        {filterBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
