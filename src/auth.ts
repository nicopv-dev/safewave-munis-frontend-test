import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import api from "./lib/axios";
import { AuthResponse } from "./types/response";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          municipality: session.user.municipality,
        },
      };
    },
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        try {
          const { data: response, status } = await api.post<AuthResponse>(
            "/auth/signin",
            {
              email: credentials.email as string,
              password: credentials.password as string,
            }
          );
          if (status === 201) {
            const user: User = {
              id: "1",
              name: `${response.firstName} ${response.lastName}`,
            };
            return user;
          }
          return null;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
});
