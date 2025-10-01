// app/page.tsx
import Link from "next/link";
import { withAuth, signOut } from "@workos-inc/authkit-nextjs";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { user } = await withAuth(); // null if signed out
  return (
    <main className="p-6 space-y-4">
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span>Hello{user.firstName ? `, ${user.firstName}` : ""}!</span>
            <form action={async () => { "use server"; await signOut(); }}>
              <Button variant="outline" type="submit">Sign out</Button>
            </form>
            <Link href="/protected"><Button>Protected</Button></Link>
          </>
        ) : (
          <Link href="/login"><Button>Sign in</Button></Link>
        )}
      </div>
    </main>
  );
}
