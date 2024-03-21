import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({req, token}) => 
        req.nextUrl.pathname === "/LogoWhite.png" || !!token
  },
});