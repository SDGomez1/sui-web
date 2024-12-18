import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const listFragance = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const fraganceList = await ctx.db
      .query("fragance")
      .order("desc")
      .paginate(args.paginationOpts);
    return fraganceList;
  },
});

export const addNewFragance = mutation({
  args: {
    type: v.string(),
    price: v.number(),
    weight: v.number(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const newEntry = await ctx.db.insert("fragance", {
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
