/**
 * meeting-room-order service
 */

import { factories } from "@strapi/strapi";
// import dayjs from "@/global/dayjs";
import dayjs from "../../../global/dayjs";
import { errors } from "@strapi/utils";
export default factories.createCoreService(
  "api::meeting-room-order.meeting-room-order",
  ({ strapi }) => ({
    async create(ctx) {
      // const  order= strapi.meet
      // console.log({ body: ctx.data });
      // return;
      // 查询同一天的所有数据
      const sameDayList = await strapi.db
        .query("api::meeting-room-order.meeting-room-order")
        .findMany({
          where: {
            date: ctx.data.date,
            // 结束时间不能重合
            endTime: {
              $ne: ctx.data.endTime,
            },
          },
        });

      const start1 = dayjs(ctx.data.startTime, "HH:mm");
      const end1 = dayjs(ctx.data.endTime, "HH:mm");
      console.log({ start1, end1 });

      if (sameDayList.length > 0) {
        console.log({ sameDayList });
        for (const item of sameDayList) {
          const start2 = dayjs(item.startTime, "HH:mm");
          const end2 = dayjs(item.endTime, "HH:mm");
          if (start1.isBefore(end2) && end1.isAfter(start2)) {
            console.log("error found");

            throw new errors.ApplicationError("该时间段已经有预约", {
              foo: "bar",
            });
          }
        }
      }

      const res = await super.create(ctx);
      return res;
    },
  })
);
