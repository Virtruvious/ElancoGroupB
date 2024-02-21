import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email?: string | null | undefined;
      image?: string | null | undefined;
      sub?: string | undefined;
    };
    expires: string;
    jwt: string;
    id: string;
  }
}
