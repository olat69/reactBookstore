const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

require("dotenv").config();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Server is ready");
  });
}

main()
  .then(() => console.log("MongoDb connected sucessfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`server running`);
});

//ZzZmPdq5BfRXyaHP
