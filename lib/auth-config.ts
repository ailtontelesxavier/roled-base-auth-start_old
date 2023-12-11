import CredentialsProvider from "next-auth/providers/credentials";

import { NextAuthOptions, User } from "next-auth";

export const auth: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your username",
        },
        password: { label: "Password", type: "password", placeholder: "senha" },
      },
      async authorize(credentials, req) {
        const user: User = {
          id: "1",
          name: "atx",
          email: "atx@gmail.com",
          role: "default",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({token, user}) {
        let domain: string;

        if(user) {
            domain = user.domain || "default";
            if(domain === "ADMINNET") {
                token.role = "admin"
                token.domain = domain;

            } else {

            }
        }
        return token;
    },
    session({session, token}) {
        //console.log("token: ", token)
        session.user.role = token.role;
        session.user.domain = token.domain;

        return session;  
    }
  }
};
