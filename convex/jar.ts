import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const listJar = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const JarList = await ctx.db
      .query("wax")
      .order("desc")
      .paginate(args.paginationOpts);
    return JarList;
  },
});

export const updateCostPerUnit = mutation({
  args: { waxId: v.id("jar"), costPerUnit: v.number() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.waxId, { costPerUnit: args.costPerUnit });
  },
});

export const addNewJar = mutation({
  args: {
    type: v.string(),
    price: v.number(),
    quantity: v.number(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const newEntry = await ctx.db.insert("jar", {
      type: args.type,
      price: args.price,
      quantity: args.quantity,
      date: args.date,
    });
    if (newEntry) {
      return {
        status: "success",
      };
    } else {
      return {
        status: "error",
      };
    }
  },
});