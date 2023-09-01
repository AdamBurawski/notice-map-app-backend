import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { log } from "console";
import { ValidationError, handleError } from "./utlis/errors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(json());

//Routes...

app.get("/", async (req, res) => {
  throw new ValidationError("Ojejku!");
});

app.use(handleError);

app.listen(3001, "0.0.0.0", () => {
  console.log("Listening on port http://localhost:3001");
});
