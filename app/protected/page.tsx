import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function ProtectedPage() {
  // If the user isn't signed in, they will automatically be redirected to AuthKit.
	const { user } = await withAuth({ ensureSignedIn: true });

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">This page is protected by <strong>AuthKit</strong></h1>
      <pre className="rounded-lg bg-muted p-4">{JSON.stringify(user, null, 2)}</pre>
      <p>Welcome Back{user.firstName&& `,${user.firstName}`}</p>
    </div>
  );
}
