import * as cache from "memory-cache";
import { Request, Response, NextFunction } from "express";

const cacheDuration = 5 * 60 * 1000;

function cachingMiddleware(req: Request, res: Response, next: NextFunction) {
  const cacheKey = `__express__${req.originalUrl || req.url}`;
  const cachedBody = cache.get(cacheKey);

  if (cachedBody) {
    res.send(cachedBody);
    return;
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache.put(cacheKey, body, cacheDuration);
      res.sendResponse(body);
    };
    next();
  }
}
