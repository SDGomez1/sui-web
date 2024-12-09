import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  wax: defineTable({
    type: v.string(),
    price: v.number(),
    weight: v.number(),
    date: v.string(),
  }),
  dye: defineTable({
    quantity: v.number(),
    price: v.number(),
    weight: v.number(),
    dropQuantity: v.number(),
    date: v.string(),
  }),
  fragance: defineTable({
    type: v.string(),
    weight: v.number(),
    price: v.number(),
    date: v.string(),
  }),
  jar: defineTable({
    type: v.string(),
    price: v.number(),
    quantity: v.number(),
    date: v.string(),
  }),
  stickerTag: defineTable({
    type: v.string(),
    price: v.number(),
    quantity: v.number(),
    date: v.string(),
  }),
});
