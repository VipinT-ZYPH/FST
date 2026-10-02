import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

// Note: It's best practice to reuse a single MongoClient instance across module reloads in development.
const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017/nextjs_ecommerce_catalog");

export const auth = betterAuth({
  database: mongodbAdapter(client.db()), // automatically uses the database specified in the URI

  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
