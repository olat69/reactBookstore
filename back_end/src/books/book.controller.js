const Book = require("./book.model");

const Createbook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book has been created sucessfully", book: newBook });
  } catch (error) {
    console.error("Error", error);
    res.status(500).send({ message: "Failed to create book, Try again" });
  }
};

module.exports = {
  Createbook,
};
