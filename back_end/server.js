import express from "express";
import connectDB from "./config/database.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  connectDB();
});
