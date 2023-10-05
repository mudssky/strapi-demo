/**
 * meeting-room-order controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::meeting-room-order.meeting-room-order",
  ({ strapi }) => ({
    // async create(ctx, next) {
    // return ctx.badRequest("name 2131321is missing", { foo: "bar" });
    // },
  })
);
