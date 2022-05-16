import { rest } from "msw";
import { mockRobots } from "./mockRobots";

export const handlers = [
  rest.get(
    `202204-w6chwe-maicol-torres-back.onrender.com/robots`,
    (_req, res, ctx) => res(ctx.status(200), ctx.json(mockRobots))
  ),
];
