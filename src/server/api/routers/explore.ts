import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const FilterEnum = z.enum(["beach", "winter", "golf", "nature", "culture", "road-trip", "couples"]);

export const exploreRouter = createTRPCRouter({
  getTrips: publicProcedure.input(FilterEnum.optional()).query(({ ctx }) => {
    return ctx.prisma.trip.findMany();
  }),
});
