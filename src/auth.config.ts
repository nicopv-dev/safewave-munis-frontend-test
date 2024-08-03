import type { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import api from "./lib/axios";
import { AuthResponse } from "./types/response";
import { AxiosError } from "axios";
import type { NextAuthConfig } from "next-auth";
import authService from "./services/api/auth-service";

export default {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        try {
          const { data: response, status } = await authService.login({
            email: credentials.email as string,
            password: credentials.password as string,
          });

          if (status !== 201) throw new Error("Error");

          const user: User = {
            name: `${response.firstName} ${response.lastName}`,
          };
          return user;
        } catch (e) {
          console.log(e);
          if (e instanceof AxiosError) {
            throw new Error("Axios error");
          }
          throw new Error("Error");
        }
      },
    }),
  ],
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;

      if (url.includes("/admin")) return "/admin";

      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },

    session: ({ session }) => {
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
  },
} satisfies NextAuthConfig;
