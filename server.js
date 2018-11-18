import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("*", (req, res) => {
  res.send("This is my working app!");
});

app.listen(PORT, () => {
  console.log("App running,", PORT);
});
