import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { ValidationError, handleError } from "./utlis/errors";
import { rateLimit } from "express-rate-limit";
import { adRouter } from "./routers/ad.router";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(json());
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
  })
);

//Routes...
app.use("/ad", adRouter);

// app.get("/", async (req, res) => {
//   throw new ValidationError("Ojejku!");
// });

app.use(handleError);

app.listen(3001, "0.0.0.0", () => {
  console.log("Listening on port http://localhost:3001");
});
