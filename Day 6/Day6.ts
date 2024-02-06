import * as express from "express";
const app = express();

interface QueryParams {
  name?: string;
}

function greetHandler(req: express.Request, res: express.Response) {
  const name = (req.query as QueryParams).name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send("Hello, Guest!");
  }
}

app.get("/greet", greetHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
