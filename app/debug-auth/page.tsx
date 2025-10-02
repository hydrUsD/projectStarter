import { getSignInUrl } from "@workos-inc/authkit-nextjs";

export default async function DebugAuth() {
	// @ts-expect-error This page is not being handled by `middleware.ts` for debugging.
const signUpUrl = await getSignInUrl({ screenHint: "sign-up" });
	const signInUrl = await getSignInUrl();
	return (
			<div className="p-6 space-y-4">
				<div><strong>Sign-up URL:</strong> {signUpUrl}</div>
				<div><strong>Sign-in URL:</strong> {signInUrl}</div>
			</div>
	)
}
