"use strict";

import { Response, Request } from "express";
import * as cache from "../db/cache";
import db from "../db/db";
import { notFound} from "../const";


/**
 * redirect short url to origin url.
 * @route GET /:key
 */
export const redirectToOriginUrl = async (req: Request, res: Response) => {
  
  let key = req.path.substr(1);
  let value: string = await cache.get(req.path) as string;
  if (!value) {
    try {
      value = await db.getOriginUrl(key);
      cache.set(key, value);
      res.redirect(value);
    } catch (e) {
      res.end(notFound);
    }
  }else{
    res.redirect(value);
  }
};
