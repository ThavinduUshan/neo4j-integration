const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact page");
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
