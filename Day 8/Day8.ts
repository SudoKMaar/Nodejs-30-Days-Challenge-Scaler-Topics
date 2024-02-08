import express, { Request, Response, NextFunction } from "express";
const app = express();

function validatePositiveInteger(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const number = parseInt(req.query.number as string);

  if (Number.isInteger(number) && number > 0) {
    next();
  } else {
    next(new Error("Invalid or non-positive integer provided"));
  }
}

app.get("/positive", validatePositiveInteger, (req: Request, res: Response) => {
  res.send("Success! Positive integer provided.");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message === "Invalid or non-positive integer provided") {
    res.status(400).send("Invalid or non-positive integer provided");
  } else {
    next(err);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
