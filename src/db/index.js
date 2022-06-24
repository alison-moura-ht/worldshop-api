import mongoose from "mongoose";

export function connect() {
  return mongoose.connect(
    "mongodb+srv://mongodb:i7IqzxMR3XditDho@dev.tcgr9kc.mongodb.net/worldshop?retryWrites=true&w=majority"
  );
}
