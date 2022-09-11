import { render, Router } from "./deps.ts";

export const router = new Router();
router.post("/", async (ctx) => {
  const body = await ctx.request.body({ type: "json" }).value;
  if (!body.md) {
    ctx.response.status = 400;
    ctx.response.body = "Markdown is missing";
    return;
  }
  if (typeof body.md !== "string") {
    ctx.response.status = 400;
    ctx.response.body = "Markdown is not a string";
    return;
  }
  ctx.response.body = {
    html: render(body.md),
  };
});
