import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios, { AxiosError } from "axios";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (typeof credentials !== "undefined") {
          try {
            const res = await axios.post(
              "http://localhost:8000/auth/login",
              {
                username: credentials.username,
                password: credentials.password,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (typeof res !== "undefined" && res.status === 200) {
              // Authorized
              const user = {
                name: res.data.user.name,
                id: res.data.user.id,
                jwt: res.data.token,
              };
              console.log("Logged in user: ", user);
              return user;
            }
          } catch (error: any) {
            if (error.response.status === 401) {
              // Unauthorized, invalid password
              return null;
            } else {
              console.error("Error: ", error);
            }
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      //console.log("JWT Callback: ", token, user, session);
      if (user) {
        token = {...token, ...user};
      }
      return token;
    },
    async session({session, token}) {
      //console.log("Session Callback: ", session, token, user);
      if (token) {
        session = {...session, ...token};
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
