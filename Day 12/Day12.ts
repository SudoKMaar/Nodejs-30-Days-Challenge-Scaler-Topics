import express, { Request, Response, NextFunction } from "express";

interface RateLimitStore {
  [key: string]: {
    count: number;
    lastReset: number;
  };
}

declare global {
  namespace Express {
    interface Request {
      rateLimitStore?: RateLimitStore;
    }
  }
}

const rateLimitMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const rateLimit = 5;
  const clientIP = req.ip || req.connection.remoteAddress;
  if (clientIP) {
    if (!req.rateLimitStore) {
      req.rateLimitStore = {};
    }
    if (!req.rateLimitStore[clientIP]) {
      req.rateLimitStore[clientIP] = {
        count: 0,
        lastReset: Date.now(),
      };
    }
    const now = Date.now();
    const elapsedTime = now - req.rateLimitStore[clientIP].lastReset;

    if (elapsedTime < 60000) {
      req.rateLimitStore[clientIP].count += 1;

      if (req.rateLimitStore[clientIP].count > rateLimit) {
        return res.status(429).json({ error: "Too Many Requests" });
      }
    } else {
      req.rateLimitStore[clientIP] = {
        count: 1,
        lastReset: now,
      };
    }
    next();
  }

  const app = express();

  app.use(rateLimitMiddleware);

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
