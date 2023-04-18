import NextAuth from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GitlabProvider({
      name: "Magenta CICD",
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET,

      authorization: {
        url: "https://gitlab.devops.telekom.de/oauth/authorize",
      },
      token: "https://gitlab.devops.telekom.de/oauth/token",
      userinfo: "https://gitlab.devops.telekom.de/api/v4/user",
      httpOptions: {
        timeout: 15_000,
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // try{
        //   const prisma = new PrismaClient()
        //   let user = await prisma.user.findFirst({});
  
        //   if (!user) {
        //     throw new Error("User not found");
        //   }
        // }catch(e){
        //   console.debug("Prisma error: ", e);
        // }
     
        // console.debug("User: ", user);

        const user = { id: "1", name: "Admin", email: "emergency@email.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
