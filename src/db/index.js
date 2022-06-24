import mongoose from "mongoose";
const DB_PROTOCOL = process.env.DB_PROTOCOL
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_OPTIONS = process.env.DB_OPTIONS

export function connect() {
  return mongoose.connect(
    // <DB_PROTOCOL>://<DB_USER>:<DB_PASSWORD>@<DB_HOST>/<DB_NAME>?<DB_OPTIONS>
    `${DB_PROTOCOL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?${DB_OPTIONS}`
  );
}
