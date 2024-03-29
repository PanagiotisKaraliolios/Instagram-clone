import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const newLocal = process.env;
export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: newLocal.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],

	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ token, session, user }) {
			// Save the user's ID to their session
			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLocaleLowerCase();

			session.user.uid = token.sub;
			return session;
		},
	},
});
