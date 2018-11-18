const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("*", (req, res) => {
  res.send("This is not rendering HTML!");
});

app.listen(PORT, () => {
  console.log("App running", PORT);
});
