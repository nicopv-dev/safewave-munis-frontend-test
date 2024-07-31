import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  municipality?: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
