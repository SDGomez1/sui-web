import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const listDye = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const dyeList = await ctx.db
      .query("dye")
      .order("desc")
      .paginate(args.paginationOpts);
    return dyeList;
  },
});

export const addNewDye = mutation({
  args: {
    quantity: v.number(),
    price: v.number(),
    weight: v.number(),
    dropQuantity: v.number(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const newEntry = await ctx.db.insert("dye", {
      quantity: args.quantity,
      price: args.price,
      weight: args.weight,
      dropQuantity: args.dropQuantity,
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
