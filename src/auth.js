import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { db } from "./config/firebase.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      // adding custom fields
      profile(profile) {
        return { isAdmin: profile.isAdmin ?? false, ...profile };
      },
    }),
  ],
  adapter: FirestoreAdapter(db),
  callbacks: {
    async session({ session, user }) {
      // session to return to the client coming from next auth and user is coming from db (from firebase)
      if (session.user) {
        // modding session object for both server and client
        session.user = {
          id: user.id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
          picture: user.picture,
        };
        return session.user; // returning to the client
      }
    },
  },
});
