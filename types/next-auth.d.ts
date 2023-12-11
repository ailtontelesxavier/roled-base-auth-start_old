import nextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        role: string | undefined;
        domain: string | undefined;
    }
    interface Session {
        user: {
            role?: string;
            domain?: string;
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: string | undefined;
        domain: string | undefined;
    }
}