const express = require("express");
const {
  createBook,
  getAllBooks,
  getSingleBook,
  UpdateBook,
  deleteBook,
} = require("./book.controller");
const router = express.Router();

router.post("/createbook", createBook);

router.get("/", getAllBooks);

router.get("/:id", getSingleBook);

router.put("/edit/:id", UpdateBook);

router.delete("/:id", deleteBook);

module.exports = router;
