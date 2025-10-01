import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function Protected() {
  const { user } = await withAuth({ ensureSignedIn: true });
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Protected</h1>
      <pre className="rounded-lg bg-muted p-4">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
