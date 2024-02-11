// Import the required modules
import * as express from "express";
import * as jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

function authenticationMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        return res.status(401).send("Unauthorized");
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).send("Unauthorized");
  }
}

export default authenticationMiddleware;
