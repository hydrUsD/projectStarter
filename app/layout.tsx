import "styles/tailwind.css";
// @ts-ignore
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthKitProvider>{children}</AuthKitProvider>
      </body>
    </html>
  );
}
