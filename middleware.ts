import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

// Protect only '/' for now (adjust matcher later)
export default authkitMiddleware({
	// Use env, fall back to localhost for dev:
    redirectUri: process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI ?? "http://localhost:3000/callback",
});
export const config = {
	matcher: ["/((?!_next/|.*\\..*)*)"],
};
