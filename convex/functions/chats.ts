import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

export const getChats = query({
  args: {},
  handler: async (ctx:any) => {
    // Grab the most recent messages.
    const messages = await ctx.db.query("chats").collect();
    // Reverse the list so that it's in a chronological order.
    return messages;
  },
});



export const send = mutation({
  args: { user: v.any(), text: v.string() },
  handler: async (ctx:any, args) => {
    // Send a new message.
    await ctx.db.insert("chats", { user:args.user, text:args.text ,timestamp: Date.now() });
  },
});