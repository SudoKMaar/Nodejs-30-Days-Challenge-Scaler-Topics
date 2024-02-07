import express, { Request, Response, NextFunction } from "express";

function requestLoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const timestamp = new Date().toISOString();
  const httpMethod = req.method;
  console.log(`${timestamp} - ${httpMethod} request received`);
  next();
}

const app = express();
app.use(requestLoggerMiddleware);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
