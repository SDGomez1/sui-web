import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const listStickerTag = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const stickerTagList = await ctx.db
      .query("wax")
      .order("desc")
      .paginate(args.paginationOpts);
    return stickerTagList;
  },
});

export const updateCostPerGram = mutation({
  args: { waxId: v.id("stickerTag"), constPerUnit: v.number() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.waxId, { constPerUnit: args.constPerUnit });
  },
});

export const addNewStickerTag = mutation({
  args: {
    type: v.string(),
    price: v.number(),
    quantity: v.number(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const newEntry = await ctx.db.insert("stickerTag", {
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
