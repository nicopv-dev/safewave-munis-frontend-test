import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  // municipality?: {
  //   name: string;
  //   city: string;
  // };
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
