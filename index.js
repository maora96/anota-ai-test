import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081, "0.0.0.0", null, () => {
  console.log("app listening");
});
