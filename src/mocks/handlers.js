import { rest } from "msw";

import jsonData from "./data.json";

export const handlers = [
  rest.get("/api/productItems", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: JSON.stringify(jsonData),
        success: true,
      })
    );
  }),
];
