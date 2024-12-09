import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listWax = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const waxList = await ctx.db
      .query("wax")
      .order("desc")
      .paginate(args.paginationOpts);
    return waxList;
  },
});

export const updateCostPerGram = mutation({
  args: { waxId: v.id("wax"), pricePerGram: v.number() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.waxId, { costPerGram: args.pricePerGram });
  },
});

export const addNewWax = mutation({
  args: {
    type: v.string(),
    price: v.number(),
    weight: v.number(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const newEntry = await ctx.db.insert("wax", {
      type: args.type,
      price: args.price,
      weight: args.weight,
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
